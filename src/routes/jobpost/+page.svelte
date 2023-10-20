<script>
    import Footer from "../../shared/Footer.svelte";
    import Navbar from "../../shared/Navbar.svelte";

    let username = "";
    let emailAddress = "";
    let password = "";
    let passwordConfirmation = "";
    let color = "";
    let selectedCity = "Surabaya";
    let rangeValue = 0;
    let date = "";
    let textArea = "";
    let file = null;

    let numberOfOpenings = 0;

    function increment() {
        numberOfOpenings += 1;
    }

    function decrement() {
        if (numberOfOpenings > 0) {
            numberOfOpenings -= 1;
        }
    }

    function handleSubmit() {
        // Handle form submission logic here
    }
</script>

<!-- NAVBAR -->
<Navbar />

<!-- POST JOB FORM -->
<section class="max-w-4xl p-6 mx-auto rounded-md shadow-md my-10 bg-gray-100">
    <!-- HEADING -->
    <h1 class="font-bold text-3xl text-gray-900 text-center">Post Job</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <!-- JOB TITLE -->
            <div>
                <label class="text-gray-800 font-semibold" for="title"
                    >Job Title</label
                >
                <div class="flex">
                    <input
                        type="text"
                        class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="SDE"
                    />
                </div>
            </div>

            <!-- JOB TYPE AND JOB END DATE -->
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <!-- JOB TYPE -->
                <div>
                    <label class="text-gray-800 font-semibold" for="type"
                        >Job Type</label
                    >
                    <div class="flex">
                        <input
                            type="type"
                            class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Full-Time"
                        />
                    </div>
                </div>

                <!-- JOB END DATE -->
                <div>
                    <label class="text-gray-800 font-semibold" for="date"
                        >Job End Date</label
                    >
                    <input
                        id="date"
                        type="date"
                        class="text-gray-600 w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        bind:value={date}
                    />
                </div>
            </div>

            <!-- JOB DESCRIPTION -->
            <div class="mt-4">
                <label class="text-gray-800 font-semibold" for="textarea"
                    >Job Description</label
                >
                <textarea
                    id="description"
                    class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Work on developing and enhancing data models, algorithms, ...
                    "
                />
            </div>

            <!-- STIPEND AND NUMBER OF OPENING(S)-->
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <!-- STIPEND -->
                <div>
                    <div>
                        <label
                            class="text-gray-800 font-semibold"
                            for="password">Stipend</label
                        >
                    </div>
                    <div class="flex items-center space-x-2">
                        <div
                            class="text-gray-600 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        >
                            <span class="text-gray-800 mx-3 text-2xl">₹</span>
                        </div>
                        <input
                            id="stipend"
                            type="number"
                            class="text-gray-600 w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="50000"
                        />
                    </div>
                </div>

                <!-- JOB OPENING(S) -->
                <div>
                    <label class="text-gray-800 font-semibold" for="password"
                        >Number of Opening(s)</label
                    >
                    <div>
                        <button
                            class="bg-white pb-2 px-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-2xl font-semibold"
                            on:click={increment}>+</button
                        >
                        <span class="mx-4 text-2xl font-semibold"
                            >{numberOfOpenings}</span
                        >
                        <button
                            class="bg-white pb-2 px-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-semibold text-2xl"
                            on:click={decrement}>-</button
                        >
                    </div>
                </div>
            </div>

            <!-- QUESTION -->
            <div class="mt-4">
                <label class="text-gray-800 font-semibold" for="textarea"
                    >Question</label
                >
                <textarea
                    id="textarea"
                    class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Why should we hire you?"
                />
            </div>

            <!-- POST JOB -->
            <div class="flex justify-center mt-6">
                <a href="/" class="block w-full">
                    <button
                        class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                        >POST JOB
                    </button>
                </a>
            </div>
        </div>
    </form>
</section>

<!-- FOOTER -->
<Footer />

<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
    /* Add any additional styles you need */
</style>
