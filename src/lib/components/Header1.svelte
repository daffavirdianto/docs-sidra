<script>
    let isMenuOpen = false;
	let isSearchOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            isSearchOpen = false;
        }
    }

	function toggleSearch() {
        isSearchOpen = !isSearchOpen;
        if (isSearchOpen) {
            isMenuOpen = false;
        }
    }
</script>

<header class="fixed z-20 w-full bg-white shadow-sm">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <!-- Mobile Menu Toggle -->
        <button class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none rounded-lg text-sm p-2.5" on:click={toggleMenu} aria-label="Toggle Mobile Menu">
            {#if isMenuOpen}
				<span class="text-2xl">&#10005;</span>
            {:else}
                <span class="text-2xl">&#9776;</span>
            {/if}
        </button>

		<!-- Logo -->
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.png" class="h-8" alt="Sidra Logo" />
            <span class="self-center whitespace-nowrap text-2xl font-semibold">Sidra | Docs</span>
        </a>

		<!-- Mobile Search Toggle -->
		<button on:click={toggleSearch} aria-label="Toggle Search" class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none rounded-lg text-sm p-2.5">
			<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
			</svg>
		</button>

		<div class="hidden md:flex items-center space-x-4">
            <!-- Search for Desktop -->
			<div class="relative hidden md:block">
				<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
					</svg>
					<span class="sr-only">Search icon</span>
				</div>
				<input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
			</div>
		</div>

        <!-- Search and Navigation -->
        <div class="hidden md:flex items-center space-x-4">
            <!-- Navigation Links -->
            <nav class="hidden md:flex space-x-6 items-center">
                <a href="/" class="text-blue-700 hover:text-blue-900">Documentation</a>
                <a href="/contact" class="text-gray-700 hover:text-blue-700">Contact</a>
                <a 
                    href="/portal/admin" 
                    class="px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
                >
                    Get Started
                </a>

                
            </nav>
        </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div 
        class={`
            md:hidden 
            fixed 
            top-16 
            left-0 
            w-full 
            h-[calc(100vh-4rem)] 
            bg-white 
            transition-transform 
            duration-300 
            ease-in-out 
            transform 
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            overflow-y-auto
            p-4
            space-y-4
        `}
    >
        <div class="space-y-3">
            <!-- Mobile Search -->
            <a href="/" class="block py-1 text-gray-700 hover:text-blue-700">Documentation</a>
            <a href="/contact" class="block py-1 text-gray-700 hover:text-blue-700">Contact</a>
            <a href="/portal/admin" class="block w-full text-center py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Get Started
            </a>

            <ul class="space-y-3 mt-4">
                <li>
                    <h2 class="text-base font-semibold text-zinc-900">Introduction</h2>
                    <ul>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">Overview of Sidra Gateway</a></li>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">Release Notes</a></li>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">How Sidra Works</a></li>
                    </ul>
                </li>
                <li>
                    <h2 class="text-base font-semibold text-zinc-900">Get Started with Sidra</h2>
                    <ul>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">Get Sidra</a></li>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">Services and Routes</a></li>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">Rate Limiting</a></li>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">Proxy Caching</a></li>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">Key Authentication</a></li>
                        <li><a href="#" class="flex justify-between gap-2 py-1 pl-4 text-sm transition border-l border-zinc-900/10 text-zinc-600 hover:text-sky-700 hover:border-sky-700/60">Load-Balancing</a></li>
                    </ul>
                </li>
                <li><h2 class="text-base font-semibold text-zinc-900">Install Sidra</h2></li>
                <li><h2 class="text-base font-semibold text-zinc-900">Sidra in Production</h2></li>
                <li><h2 class="text-base font-semibold text-zinc-900">Sidra Gateway Enterprise</h2></li>
                <li><h2 class="text-base font-semibold text-zinc-900">Sidra AI Gateway</h2></li>
                <li><h2 class="text-base font-semibold text-zinc-900">Sidra Manager</h2></li>
            </ul>
        </div>
    </div>

    <!-- Mobile Menu Search -->
    <div 
        class={`
            md:hidden 
            fixed 
            top-16 
            left-0 
            w-full
            bg-white
            transition-transform 
            duration-300 
            ease-in-out 
            transform
            ${isSearchOpen ? 'translate-x-0' : '-translate-x-full'}
            overflow-y-auto
            p-4
            space-y-4
        `}
    >
        <div class="space-y-3">
            <!-- Mobile Search -->
            <div class="md:hidden mt-4">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" placeholder="Search..." class="block w-full pl-10 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
            </div>
        </div>
    </div>
</header>