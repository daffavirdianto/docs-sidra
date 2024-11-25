<script>
    import Bar from "$lib/assets/svg/menu.svg";
    let isMenuOpen = false;

    
</script>

<header class="fixed z-10 w-full bg-white">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <button class="text-4xl md:hidden" on:click={() => isMenuOpen = !isMenuOpen}>
            {#if isMenuOpen}
                <object data="{Bar}" type="image/svg+xml" aria-label="icon" class="m-3.5"></object>
            {:else}
                &#9776;
            {/if}
        </button>
        
        <div class="text-xl font-semibold">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" class="h-8" alt="Sidra Logo" />
                <span class="self-center whitespace-nowrap">Sidra | Docs</span>
            </a>
        </div>

        <div class="flex">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
            </div>
        </div>

        <nav class="hidden space-x-6 md:flex">
            <a href="/" class="hover:text-gray-200">Documentation</a>
            <a href="/contact" class="hover:text-gray-200">Contact</a>
        </nav>
    </div>

    <div class={`md:hidden h-screen bg-gray-50 p-4 space-y-4 overflow-y-auto transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <a href="/" class="block">Documentation</a>
        <a href="/about" class="block">Contact</a>
        
        <ul>
            <li>
                <h2 class="my-3 text-base font-semibold text-zinc-900 dark:text-white">Introduction</h2>
                <ul>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">Overview of Sidra Gateway</a></li>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">Release Notes</a></li>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">How Sidra Works</a></li>
                </ul>
            </li>
            <li>
                <h2 class="my-3 text-base font-semibold text-zinc-900 dark:text-white">Get Started with Sidra</h2>
                <ul>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">Get Sidra</a></li>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">Services and Routes</a></li>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">Rate Limiting</a></li>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">Proxy Caching</a></li>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">Key Authentication</a></li>
                    <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 dark:text-white hover:text-sky-700 hover:border-sky-700/60">Load-Balancing</a></li>
                </ul>
            </li>
            <li><h2 class="my-3 text-base font-semibold text-zinc-900 dark:text-white">Install Sidra</h2></li>
            <li><h2 class="my-3 text-base font-semibold text-zinc-900 dark:text-white">Sidra in Production</h2></li>
            <li><h2 class="my-3 text-base font-semibold text-zinc-900 dark:text-white">Sidra Gateway Enterprise</h2></li>
            <li><h2 class="my-3 text-base font-semibold text-zinc-900 dark:text-white">Sidra AI Gateway</h2></li>
            <li><h2 class="my-3 text-base font-semibold text-zinc-900 dark:text-white">Sidra Manager</h2></li>
        </ul>
    </div>
</header>