<script>
    import Header from '$lib/components/Header1.svelte';
    import Sidebar from '$lib/components/Sidebar1.svelte';
    import RateLimiting from '$lib/components/RateLimiting.svelte';
   
    let currentPage = 'overview'; 
</script>

<div class="flex">
    <Header />
    <div class="fixed top-16 left-0 w-72 h-[calc(100vh-4rem)] overflow-y-auto border-r border-gray-200 bg-white hidden md:block">
        <Sidebar {currentPage} />
    </div>
    <main class="pt-16 w-full md:ml-72 md:w-[calc(100vw-18rem)] h-screen overflow-y-auto">
        <div class="p-6">
            <RateLimiting />
        </div>
    </main>
</div>