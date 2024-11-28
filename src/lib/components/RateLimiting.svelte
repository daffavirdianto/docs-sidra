<script>
    // CodeBlock
    import { CodeBlock } from "svhighlight";

    import Alert from "$lib/components/Alert.svelte";
    import Tabs from "$lib/components/Tabs.svelte";

    let code = `curl --location 'http://localhost:3033/api/v1/plugin/conf' \
--header 'Content-Type: application/json' \
--data '{
    "Name": "jwt",
    "typeEvent": "CREATE    ",
    "config": "{\\"key\\":\\"value\\"}"
}'`;

    let language = "bash";
    let headerText = "cURL Rate Limiting";
</script>
<div id="rate-limiting" class="flex px-4 pt-10 flex-col gap-5">
    <div class="">
        <a href="#rate-limiting">
            <h1 class="text-4xl text-zinc-900 font-semibold mb-3">
                Rate Limiting
            </h1>
        </a>
        <p class="text-base text-zinc-600">
            Rate limiting is used to control the rate of requests sent to an
            upstream service. It can be used to prevent DoS attacks, limit
            web scraping, and other forms of overuse. Without rate limiting,
            clients have unlimited access to your upstream services, which
            may negatively impact availability.
        </p>
    </div>

    <div class="">
        <a href="#rate-limiting-plugin">
            <h2 class="text-2xl text-zinc-900 font-semibold mb-3">
                The Rate Limiting plugin
            </h2>
        </a>
        <p class="text-base text-zinc-600">
            Sidra Gateway imposes rate limits on clients through the use of the 
            <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">Rate Limiting plugin</a>. 
            When rate limiting is enabled, clients are restricted in the number of requests that can be made in a
            configurable period of time. The plugin supports identifying clients as 
            <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">consumers</a> 
            or by the client IP address of the requests.
        </p>
    </div> 

    <Alert />

    <div class="mb-3">
        <a href="#managing-rate-limiting">
            <h2 class="text-2xl text-zinc-900 font-semibold mb-3">
                Managing rate limiting
            </h2>
        </a>
        <p class="text-base text-zinc-600">
            The following tutorial walks through managing rate limiting across various aspects in Sidra Gateway.
        </p>
    </div> 
    
    <div class="flex flex-col gap-3 mb-3">
        <a href="#prerequisites">
            <h2 class="text-xl text-zinc-900 font-semibold">
                Prerequisites
            </h2>
        </a>
        <p class="text-base text-zinc-600">
            This chapter is part of the 
            <i>Get Started with Sidra</i>
            series. For the best experience, 
            it is recommended that you follow the series from the beginning.
        </p>
        <p class="text-base text-zinc-600">
            Start with the introduction 
            <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">Get Sidra</a>, 
            which includes tool prerequisites and instructions for running a local Sidra Gateway.
        </p>
        <p class="text-base text-zinc-600">
            Step two of the guide, 
            <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">Services and Routes</a>, 
            includes instructions for installing a mock service used throughout this series.
        </p>
        <p class="text-base text-zinc-600">
            If you haven’t completed these steps already, complete them before proceeding.
        </p>
    </div>

    <div class="mb-4">
        <a href="#global-rate-limiting">
            <h2 class="text-xl text-zinc-900 font-semibold mb-3">
                Global rate limiting
            </h2>
        </a>
        <p class="text-base text-zinc-600 mb-5">
            Installing the plugin globally means every proxy request to Sidra Gateway will be subject to rate limit enforcement.
        </p>
        <ol class="list-decimal space-y-4 text-base">
            <li class="flex items-center space-x-3 text-zinc-900 font-semibold">
                <span class="w-8 h-8 flex items-center justify-center rounded-full border">1</span>
                <p class="">Enable rate limiting</p>
            </li>
            <div class="pl-11">
                <p class="text-zinc-600">
                    The rate limiting plugin is installed by default on Sidra Gateway, 
                    and can be enabled by sending a POST request to the plugins object 
                    on the Admin API:
                </p>
                <CodeBlock {code} {language} {headerText} />
                <div class="my-3 text-zinc-600 leading-loose">
                    <p>
                        This command has instructed Sidra Gateway to impose a maximum of 5 requests per minute per client IP address for all routes and services.
                    </p>
                    <p>
                        The policy configuration determines where Sidra Gateway retrieves and increments limits. See the full plugin configuration reference for details.
                    </p>
                    <p>
                        You will see a response that contains the new plugin configuration, including identification information similar to:
                    </p>
                </div>
                
                <CodeBlock {code} {language} {headerText} />
            </div>
            

            <li class="flex items-center space-x-3 text-zinc-900 font-semibold">
                <span class="w-8 h-8 flex items-center justify-center rounded-full border">2</span>
                <p>Validate</p>
            </li>
            <div class="pl-11 text-zinc-600">
                <p class="mb-3">
                    After configuring rate limiting, 
                    you can verify that it was configured correctly and is working, 
                    by sending more requests than allowed in the configured time limit.
                </p>
                <Tabs />
                <p class="my-3">
                    Run the following command to quickly send 6 mock requests:
                </p>
                <CodeBlock {code} {language} {headerText} />
                <p class=" my-3">
                    After the 6th request, you should receive a 429 “API rate limit exceeded” error:
                </p>
                <CodeBlock {code} {language} {headerText} />
            </div>
        </ol>
    </div> 
    
    <div class="flex flex-col mb-4 gap-3">
        <a href="#service-rate-limiting">
            <h2 class="text-2xl text-zinc-900 font-semibold">
                Service level rate limiting
            </h2>
        </a>
        <p class="text-base text-zinc-600">
            The Rate Limiting plugin can be enabled for specific services. 
            The request is the same as above, but posted to the service URL:
        </p>
        <CodeBlock {code} {language} {headerText} />
    </div> 

    <div class="flex flex-col mb-4 gap-3">
        <a href="#route-rate-limiting">
            <h2 class="text-2xl text-zinc-900 font-semibold">
                Route level rate limiting
            </h2>
        </a>
        <p class="text-base text-zinc-600">
            The Rate Limiting plugin can be enabled for specific routes. 
            The request is the same as above, but posted to the route URL:
        </p>
        <CodeBlock {code} {language} {headerText} />
    </div> 

    <div class="">
        <a href="#consumer-rate-limiting">
            <h2 class="text-xl text-zinc-900 font-semibold mb-3">
                Consumer level rate limiting
            </h2>
        </a>
        <p class="text-base text-zinc-600 mb-5">
            In Sidra Gateway, consumers are an abstraction that defines a user of a service. 
            Consumer-level rate limiting can be used to limit request rates per consumer.
        </p>
        <ol class="list-decimal space-y-4 text-base">
            <li class="flex items-center space-x-3 text-zinc-900 font-semibold">
                <span class="w-8 h-8 flex items-center justify-center rounded-full border">1</span>
                <p class="">Create a consumer</p>
            </li>
            <div class="pl-11">
                <p class="text-zinc-600">
                    Consumers are created using the consumer object in the Admin API.
                </p>
                <CodeBlock {code} {language} {headerText} />
            </div>

            <li class="flex items-center space-x-3 text-zinc-900 font-semibold">
                <span class="w-8 h-8 flex items-center justify-center rounded-full border">2</span>
                <p>Enable rate limiting for the consumer</p>
            </li>
            <div class="pl-11">
                <p class="text-zinc-600">
                    Using the consumer id, enable rate limiting for all routes and services for the jsmith consumer.
                </p>
                <CodeBlock {code} {language} {headerText} />
            </div>
        </ol>
    </div> 

    <div class="mb-3">
        <a href="#advanced-rate-limiting">
            <h2 class="text-2xl text-zinc-900 font-semibold mb-3">
                Advanced rate limiting
            </h2>
        </a>
        <p class="text-base text-zinc-600 leading-loose">
            In high scale production scenarios, effective rate limiting may require advanced techniques. 
            The basic Rate Limiting plugin described above only allows you to define limits over fixed-time windows. 
            Fixed-time windows are sufficient for many cases, however, there are disadvantages:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-zinc-600 leading-loose">
            <li>Bursts of requests around the boundary time of the fixed window, 
                may result in strained resources as the window counter is reset in the middle of the traffic burst.
            </li>
            <li>Multiple client applications may be waiting for the fixed-time window to reset so they can resume making requests. 
                When the fixed-window resets, multiple clients may flood the system with requests, 
                causing a stampeding effect on your upstream services.
            </li>
        </ul>
        <p class="text-base text-zinc-600 leading-loose">
            The 
            <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">Rate Limiting Advanced</a>
            <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">ENTERPRISE</span> 
            plugin is an enhanced version of the Rate Limiting plugin. 
            The advanced plugin provides additional limiting algorithm capabilities and superior performance compared to the basic plugin. 
            For more information on advanced rate limiting algorithms, see 
            <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">How to Design a Scalable Rate Limiting Algorithm with Sidra API.</a>
        </p>
    </div>
    <hr class="border-t-2 border-gray-200 ">
    <div class="flex justify-between">
        <div>
            <p class="text-zinc-900 font-semibold">Previous</p>
            <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">Services and Routes</a>
        </div>
        <div class="text-right">
            <p class="text-zinc-900 font-semibold">Next</p>
            <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">Proxy Caching</a>
        </div>
    </div>
</div>