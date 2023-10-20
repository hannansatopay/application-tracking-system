<script>
    import Footer from "../../shared/Footer.svelte";
    import Navbar from "../../shared/Navbar.svelte";
    import Modal from "../../pages/Modal.svelte";

    let email = "";

    function handleSubmit() {
        // Handle form submission here
        console.log("Email submitted:", email);
    }
</script>

<!-- NAVBAR -->
<Navbar />

<!-- HEADER   -->
<!-- <div class="relative">
    <img
        src={imageSrc}
        class="absolute inset-0 object-cover w-full h-full"
        alt=""
    />

    <div class="relative bg-gray-900 bg-opacity-75">
        <div
            class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
            <div class="flex flex-col items-center justify-between xl:flex-row">
                <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                    <h2
                        class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
                    >
                        We keep moving forward, opening new doors, and doing new
                        things, because we’re curious and curiosity keeps
                        leading us down new paths.
                        <span class="text-teal-accent-400">lazy dog</span>
                    </h2>
                    <p
                        class="max-w-xl mb-4 text-base text-gray-400 md:text-lg text-right"
                    >
                        – Walt Disney
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-deep-purple-accent-400"
                    >
                        Jobs
                        <svg
                            class="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path
                                d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div> -->

<div class="relative bg-blue-900">
    <div class="absolute inset-x-0 bottom-0">
        <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            class="w-full -mb-1 text-white"
            preserveAspectRatio="none"
        >
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
            />
        </svg>
    </div>
    <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
        <div
            class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center"
        >
            <h2
                class="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
                JOB SEARCH
                <!-- <br class="hidden md:block" />
                jumps over a{" "}
                <span class="relative inline-block px-2">
                    <div
                        class="absolute inset-0 transform -skew-x-12 bg-teal-accent-400"
                    />
                    <span class="relative text-teal-900">lazy dog</span>
                </span> -->
            </h2>
            <!-- <p class="mb-6 text-base text-indigo-100 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo. Sed ut perspiciatis unde omnis.
            </p> -->
            <form
                on:submit={handleSubmit}
                class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
            >
                <input
                    bind:value={email}
                    placeholder="Enter your preference..."
                    required
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                />
                <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md md:w-auto text-white bg-blue-500 hover:bg-white hover:text-blue-800 hover:border-4 border-blue-600 focus:shadow-outline focus:outline-none"
                >
                    Search
                </button>
            </form>
            <p
                class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16"
            >
                It always seems impossible until it’s done.
            </p>
        </div>
    </div>
</div>

<div class="text-center text-blue-900 py-4 text-4xl font-semibold">JOBS</div>

<!-- JOB CARDS -->
<!-- <div class="flex mx-5">
    <div>Filters</div> -->
<div
    class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4"
>
    <div class="p-8 rounded shadow-xl sm:p-16">
        <div class="flex flex-col lg:flex-row">
            <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2
                    class="font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none"
                >
                    Backend Developer
                    <br class="hidden md:block" />
                    TechFest.co
                    <!-- <span class="inline-block text-deep-purple-accent-400">
                        a lazy dog
                    </span> -->
                </h2>
            </div>
            <div class="lg:w-1/2">
                <p class="mb-4 text-base text-gray-700">
                    About the work from home job/internship Selected intern's
                    day-to-day responsibilities include: Maintain servers and
                    databases, write backend code in Node.js/Mean/ MySQL stack
                    and coordinate with the front-end team to develop new
                    features
                </p>
                <a
                    href="/jobapply"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    Apply Now
                </a>
            </div>
        </div>
    </div>

    <div class="rounded shadow-xl sm:p-16">
        <div class="flex flex-col lg:flex-row">
            <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2
                    class="font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none"
                >
                    Frontend Developer
                    <br class="hidden md:block" />
                    Logix.io
                    <!-- <span class="inline-block text-deep-purple-accent-400">
                        a lazy dog
                    </span> -->
                </h2>
            </div>
            <div class="lg:w-1/2">
                <p class="mb-4 text-base text-gray-700">
                    Selected intern's day-to-day responsibilities include: Work
                    on developing new user-facing features using React.js, build
                    reusable components, and translate design into React
                    components for our product
                </p>
                <a
                    href="/jobapply"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    Apply Now
                </a>
            </div>
        </div>
    </div>
    <div class="p-8 rounded shadow-xl sm:p-16">
        <div class="flex flex-col lg:flex-row">
            <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2
                    class="font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none"
                >
                    Frontend Developer
                    <br class="hidden md:block" />
                    Logix
                    <!-- <span class="inline-block text-deep-purple-accent-400">
                        a lazy dog
                    </span> -->
                </h2>
            </div>
            <div class="lg:w-1/2">
                <p class="mb-4 text-base text-gray-700">
                    Selected intern's day-to-day responsibilities include: Work
                    on developing new user-facing features using React.js, build
                    reusable components, and translate design into React
                    components for our product
                </p>
                <a
                    href="/jobapply"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    Apply Now
                </a>
            </div>
        </div>
    </div>

    <div class="p-8 rounded shadow-xl sm:p-16">
        <div class="flex flex-col lg:flex-row">
            <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2
                    class="font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none"
                >
                    Backend Develper
                    <br class="hidden md:block" />
                    AULabs
                    <span class="inline-block text-deep-purple-accent-400">
                        a lazy dog
                    </span>
                </h2>
            </div>
            <div class="lg:w-1/2">
                <p class="mb-4 text-base text-gray-700">
                    About the work from home job/internship Selected intern's
                    day-to-day responsibilities include: Maintain servers and
                    databases, write backend code in Node.js/Mean/ MySQL stack
                    and coordinate with the front-end team to develop new
                    features
                </p>
                <a
                    href="/jobapply"
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    Apply Now
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Pass isOpen to the Modal component -->
<!-- FOOTER -->
<Footer />
