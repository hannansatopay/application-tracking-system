<script>
    import { onMount } from 'svelte';
    import { enhance } from '$app/forms';
    import { Alert, Spinner } from "flowbite-svelte";
    export let form;
    let formLoading = false;
    
    import Footer from "../../shared/Footer.svelte";
    import Navbar from "../../shared/Navbar.svelte";
    let imageSrc = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600";
</script>

<!-- Navbar -->
<Navbar />

<div
    class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5"
>
    <div
        class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style="max-width:1000px"
    >
        <div class="md:flex w-full">
            <!-- <div class="hidden md:block w-1/2 bg-indigo-500 py-10 px-10"> -->
            <!-- Replace the SVG with Svelte elements or components if necessary -->
            <img
                src={imageSrc}
                class="hidden md:block w-1/2 bg-indigo-500"
                alt=""
            />
            <!-- </div> -->
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
                    <p>Enter your credentials to login</p>
                </div>
                <div>
                    <form class="space-y-4 md:space-y-6" method="POST" use:enhance={() => {
                        formLoading = true;
                        return async ({ update }) => {
                            await update({ reset: false });
                            formLoading = false;
                        };
                    }}>
                        {#if form?.error}
                            <Alert color="red">
                                {form.error}
                            </Alert>
                        {/if}
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <button disabled={formLoading} type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            {#if formLoading}
                                <Spinner size="5" color="white" />
                            {:else}
                                Sign in
                            {/if}
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account yet? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                        <!-- <a href="/forgot-password" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- FOOTER -->
<Footer />

<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
    /* Add any additional styles you need */
</style>
