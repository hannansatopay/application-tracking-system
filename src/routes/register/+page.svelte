<script>
    import Footer from "../../shared/Footer.svelte";
    import Navbar from "../../shared/Navbar.svelte";
    import { onMount } from "svelte";
    import { enhance } from "$app/forms";
    import { Alert, Spinner } from "flowbite-svelte";
    export let form;
    let formLoading = false;
    let imageSrc =
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600";
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
                    <h1 class="font-bold text-3xl text-gray-900">SIGN UP</h1>
                    <p>Enter your credentials to sign up</p>
                </div>
                <div>
                    <form
                        class="space-y-4 md:space-y-6"
                        method="POST"
                        use:enhance={() => {
                            formLoading = true;
                            return async ({ update }) => {
                                await update({ reset: false });
                                formLoading = false;
                            };
                        }}
                    >
                        {#if form?.error}
                            <Alert color="red">
                                {form.error}
                            </Alert>
                        {/if}
                        <div class="flex -mx-3">
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1"
                                    >First name</label
                                >
                                <div class="flex">
                                    <div
                                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                                    >
                                        <i
                                            class="mdi mdi-account-outline text-gray-400 text-lg"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="first_name"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="John"
                                    />
                                </div>
                            </div>
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1"
                                    >Last name</label
                                >
                                <div class="flex">
                                    <div
                                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                                    >
                                        <i
                                            class="mdi mdi-account-outline text-gray-400 text-lg"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="last_name"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="Smith"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1"
                                    >Email</label
                                >
                                <div class="flex">
                                    <div
                                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                                    >
                                        <i
                                            class="mdi mdi-email-outline text-gray-400 text-lg"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        name="email_verified"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="johnsmith@example.com"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-12">
                                <label for="" class="text-xs font-semibold px-1"
                                    >Password</label
                                >
                                <div class="flex">
                                    <div
                                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                                    >
                                        <i
                                            class="mdi mdi-lock-outline text-gray-400 text-lg"
                                        />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="************"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <button
                                    type="submit"
                                    class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                                    >SIGN UP</button
                                >
                            </div>
                        </div>
                        <p class="text-center text-sm text-gray-500">
                            Already a member?{" "}
                            <a
                                href="/login"
                                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Login
                            </a>
                        </p>
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
