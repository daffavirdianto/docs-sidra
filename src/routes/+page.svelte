<script>
    import Header from '$lib/components/Header.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    
    // CodeBlock
    import { CodeBlock } from "svhighlight";

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

<Header />
<div class="h-screen pt-16">
    <Sidebar />
    <section class="mt-5">
        <div id="proxy-caching" class="flex px-4 pt-10 flex-col gap-5">
            <div class="">
                <a href="#proxy-caching">
                    <h1 class="text-4xl text-zinc-900 font-semibold mb-3">
                        Proxy Caching
                    </h1>
                </a>
                <p class="text-base text-zinc-600">
                    One of the ways Sidra delivers performance is through
                    caching.
                    <a
                        href=""
                        class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                    >
                        The Proxy Cache plugin
                    </a>
                    accelerates performance by caching responses based on configurable
                    response codes, content types, and request methods. When caching
                    is enabled, upstream services are not bogged down with repetitive
                    requests, because Sidra Gateway responds on their behalf with
                    cached results. Caching can be enabled on specific Sidra Gateway
                    objects or for all requests globally.
                </p>
            </div>
            <div class="">
                <a href="#cache-ttl">
                    <h2 class="text-xl text-zinc-900 font-semibold mb-3">
                        Cache Time To Live (TTL)
                    </h2>
                </a>
                <p class="text-base text-zinc-600">
                    TTL governs the refresh rate of cached content, which is
                    critical for ensuring that clients aren’t served outdated
                    content. A TTL of 30 seconds means content older than 30
                    seconds is deemed expired and will be refreshed on
                    subsequent requests. TTL configurations should be set
                    differently based on the type of the content the upstream
                    service is serving.
                </p>
                <ul
                    class="list-disc pl-6 text-base text-zinc-600 leading-loose"
                >
                    <li>
                        Static data that is rarely updated can have longer TTL
                    </li>
                    <li>
                        Dynamic data should use shorter TTL to avoid serving
                        outdated data
                    </li>
                </ul>
                <p class="text-base text-zinc-600">
                    Sidra Gateway follows
                    <a
                        href=""
                        class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                    >
                        RFC-7234 section 5.2
                    </a>
                    for cached controlled operations. See the specification and the
                    Proxy Cache plugin
                    <a
                        href=""
                        class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                    >
                        parameter reference
                    </a>
                    for more details on TTL configurations.
                </p>
            </div>
            <div class="">
                <a href="#enable-caching">
                    <h2 class="text-3xl text-zinc-900 font-semibold mb-3">
                        Enable caching
                    </h2>
                </a>
                <p class="text-base text-zinc-600">
                    The following tutorial walks through managing proxy caching
                    across various aspects in Sidra Gateway.
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
                    series. For the best experience, it is recommended that you follow
                    the series from the beginning.
                </p>
                <p class="text-base text-zinc-600">
                    Start with the introduction
                    <a
                        href=""
                        class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                    >
                        Get Sidra
                    </a>, which includes tool prerequisites and instructions for
                    running a local Sidra Gateway.
                </p>
                <p class="text-base text-zinc-600">
                    Step two of the guide,
                    <a
                        href=""
                        class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                    >
                        Services and Routes
                    </a>, includes instructions for installing a mock service
                    used throughout this series.
                </p>
                <p class="text-base text-zinc-600">
                    If you haven’t completed these steps already, complete them
                    before proceeding.
                </p>
            </div>
            <div class="mb-4">
                <a href="#global-proxy-caching">
                    <h2 class="text-xl text-zinc-900 font-semibold mb-3">
                        Global proxy caching
                    </h2>
                </a>
                <p class="text-base text-zinc-600 mb-5">
                    Installing the plugin globally means <i>every</i> proxy request
                    to Sidra Gateway will potentially be cached.
                </p>
                <ol class="list-decimal space-y-4 text-base">
                    <li
                        class="flex items-center space-x-3 text-zinc-900 font-semibold"
                    >
                        <span
                            class="w-8 h-8 flex items-center justify-center rounded-full border"
                            >1</span
                        >
                        <p class="">Enable proxy caching</p>
                    </li>
                    <div class="pl-11">
                        <p class="text-zinc-600">
                            The Proxy Cache plugin is installed by default on
                            Sidra Gateway, and can be enabled by sending a
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >POST</span
                            >
                            request to the plugins object on the Admin API:
                        </p>
                        <CodeBlock {code} {language} {headerText} />
                        <div class="flex flex-col my-3 text-zinc-600 gap-3">
                            <p>
                                If configuration was successful, you will
                                receive a
                                <span
                                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >201</span
                                >
                                response code.
                            </p>
                            <p>
                                This Admin API request configured a Proxy Cache
                                plugin for all
                                <span
                                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >GET</span
                                >
                                requests that resulted in response codes of
                                <span
                                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >200</span
                                >
                                and <i>response</i>
                                <span
                                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >Content-Type</span
                                >
                                headers that <i>equal</i>
                                <span
                                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >application/json</span
                                >.
                                <span
                                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >cache_ttl</span
                                >
                                instructed the plugin to flush values after 30 seconds.
                            </p>
                            <p>
                                The final option
                                <span
                                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >config.strategy=memory</span
                                >
                                specifies the backing data store for cached responses.
                                More information on
                                <span
                                    class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >strategy</span
                                >
                                can be found in the
                                <a
                                    href=""
                                    class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                                >
                                    parameter reference
                                </a>
                                for the Proxy Cache plugin.
                            </p>
                        </div>
                    </div>
                    <li
                        class="flex items-center space-x-3 text-zinc-900 font-semibold"
                    >
                        <span
                            class="w-8 h-8 flex items-center justify-center rounded-full border"
                            >2</span
                        >
                        <p>Validate</p>
                    </li>
                    <div class="pl-11 text-zinc-600">
                        <p class="mb-3">
                            You can check that the Proxy Cache plugin is working
                            by sending
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >GET</span
                            >
                            requests and examining the returned headers. In step
                            two of this guide,
                            <a
                                href=""
                                class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                                >services and routes</a
                            >, you setup a
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >/mock</span
                            >
                            route and service that can help you see proxy caching
                            in action.
                        </p>
                        <p class="my-3">
                            First, make an initial request to the
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >/mock</span
                            >
                            route. The Proxy Cache plugin returns status information
                            headers prefixed with
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >X-Cache</span
                            >, so use
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >grep</span
                            >
                            to filter for that information:
                        </p>
                        <CodeBlock {code} {language} {headerText} />
                        <p class=" my-3">
                            On the initial request, there should be no cached
                            responses, and the headers will indicate this with
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >X-Cache-Status: Miss</span
                            >.
                        </p>
                        <CodeBlock {code} {language} {headerText} />
                        <p class=" my-3">
                            Within 30 seconds of the initial request, repeat the
                            command to send an identical request and the headers
                            will indicate a cache
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >Hit</span
                            > :
                        </p>
                        <CodeBlock {code} {language} {headerText} />
                        <p class=" my-3">
                            The
                            <span
                                class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                >X-Cache-Status</span
                            >
                            headers can return the following cache results:
                        </p>

                        <div
                            class="relative overflow-x-auto shadow-md sm:rounded-lg"
                        >
                            <table
                                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                                >
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            STATE
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td class="px-6 py-4">Miss</td>
                                        <td class="px-6 py-4">The request could be satisfied in cache, but an entry for the resource was not found in cache, and the request was proxied upstream.</td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td class="px-6 py-4">Hit</td>
                                        <td class="px-6 py-4">The request was satisfied. The resource was found in cache.</td>
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800">
                                        <td class="px-6 py-4">Refresh</td>
                                        <td class="px-6 py-4">
                                            The resource was found in cache, but could not satisfy the request, due to Cache-Control behaviors or reaching its hard-coded 
                                            <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                                cache_ttl
                                            </span>
                                            threshold.
                                        </td>
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800">
                                        <td class="px-6 py-4">Bypass</td>
                                        <td class="px-6 py-4">The request could not be satisfied from cache based on plugin configuration.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </ol>
            </div>
            <div class="">
                <a href="#entity-level-caching">
                    <h2 class="text-2xl text-zinc-900 font-semibold mb-3">
                        Entity-level proxy caching
                    </h2>
                </a>
                <Tabs />
                <p class="text-base text-zinc-600 my-3">
                    The Proxy Cache plugin can be enabled for specific services. The request is the same as above, but the request is sent to the service URL:
                </p>
                <CodeBlock {code} {language} {headerText} />
            </div>
            <div class="">
                <a href="#entity-level-caching">
                    <h2 class="text-2xl text-zinc-900 font-semibold mb-3">
                        Manage cached entities
                    </h2>
                </a>
                <p class="text-base text-zinc-600">
                    The Proxy Cache plugin supports administrative endpoints to manage cached entities. 
                    Administrators can view and delete cached entities, or purge the entire cache by sending requests to the Admin API.
                </p>
                <p class="text-base text-zinc-600 my-3">
                    To retrieve the cached entity, submit a request to the Admin API
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        /proxy-cache 
                    </span>
                    endpoint with the
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        X-Cache-Key 
                    </span>
                    value of a known cached value. This request must be submitted 
                    prior to the TTL expiration, otherwise the cached entity has been purged.
                </p>
                <p class="text-base text-zinc-600 my-3">
                    For example, using the response headers above, pass the
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        X-Cache-Key
                    </span>
                    value of
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        c9e1d4c8e5fd8209a5969eb3b0e85bc6
                    </span>
                    to the Admin API:
                </p>
                <CodeBlock {code} {language} {headerText} />
                <p class="text-base text-zinc-600 my-3">
                    A response with
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        200 OK
                    </span>
                    will contain full details of the cached entity.
                </p>
                <p class="text-base text-zinc-600 my-3">
                    See the 
                    <a href="" class="text-sky-700 font-semibold hover:underline hover:text-sky-400">
                        Proxy Cache plugin documentation
                    </a>
                    for the full list of the Proxy Cache specific Admin API endpoints.
                </p>
            </div>
            <hr class="border-t-2 border-gray-200" />
            <div class="flex justify-between">
                <div>
                    <p class="text-zinc-900 font-semibold">Previous</p>
                    <a
                        href=""
                        class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                        >Rate Limiting</a
                    >
                </div>
                <div class="text-right">
                    <p class="text-zinc-900 font-semibold">Next</p>
                    <a
                        href=""
                        class="text-sky-700 font-semibold hover:underline hover:text-sky-400"
                        >Key Authentication</a
                    >
                </div>
            </div>
        </div>
    </section>
</div>