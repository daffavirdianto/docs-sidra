<script>
    export let currentPage = '';
</script>

<aside class="space-y-8 p-5 hidden md:block md:sticky h-[calc(100vh-4rem)] overflow-y-auto bg-white border-r border-gray-200">
    <ul class="pl-4 space-y-6 mt-10">
        <li>
            <h2 class="my-3 text-base font-semibold text-zinc-900">Introduction</h2>
            <ul>
                <li>
                    <a 
                        href="/overview" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'overview' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        Overview of Sidra Gateway
                    </a>
                </li>
                <li>
                    <a 
                        href="/release-notes" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'release-notes' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        Release Notes
                    </a>
                </li>
                <li>
                    <a 
                        href="/how-it-works" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'how-it-works' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        How Sidra Works
                    </a>
                </li>
            </ul>
        </li>

        <li>
            <h2 class="my-3 text-base font-semibold text-zinc-900">Get Started with Sidra</h2>
            <ul>
                <li>
                    <a 
                        href="/get-sidra" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'get-sidra' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        Get Sidra
                    </a>
                </li>
                <li>
                    <a 
                        href="/services-and-routes" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'services-and-routes' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        Services and Routes
                    </a>
                </li>
                <li>
                    <a 
                        href="/rate-limiting" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'rate-limiting' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        Rate Limiting
                    </a>
                </li>
                <li>
                    <a 
                        href="/proxy-caching" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'proxy-caching' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        Proxy Caching
                    </a>
                </li>
                <li>
                    <a 
                        href="/key-authentication" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'key-authentication' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        Key Authentication
                    </a>
                </li>
                <li>
                    <a 
                        href="/load-balancing" 
                        class={`
                            flex justify-between gap-2 
                            py-1 pl-4 text-sm 
                            transition border-l 
                            ${currentPage === 'load-balancing' 
                                ? 'text-sky-700 border-sky-700' 
                                : 'text-zinc-600 border-zinc-900/10 hover:text-sky-700 hover:border-sky-700/60'}
                        `}
                    >
                        Load-Balancing
                    </a>
                </li>
            </ul>
        </li>

        <li>
            <h2 class="my-3 text-base font-semibold text-zinc-900">Additional Sections</h2>
            <ul class="space-y-2">
                <li><a href="/install-sidra" class="block py-1 text-zinc-600 hover:text-sky-700">Install Sidra</a></li>
                <li><a href="/production" class="block py-1 text-zinc-600 hover:text-sky-700">Sidra in Production</a></li>
                <li><a href="/enterprise" class="block py-1 text-zinc-600 hover:text-sky-700">Sidra Gateway Enterprise</a></li>
                <li><a href="/ai-gateway" class="block py-1 text-zinc-600 hover:text-sky-700">Sidra AI Gateway</a></li>
                <li><a href="/manager" class="block py-1 text-zinc-600 hover:text-sky-700">Sidra Manager</a></li>
            </ul>
        </li>
    </ul>
</aside>