<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<div class="bg-blue-900">
    <div
        class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
        <div class="relative flex items-center justify-between">
            <a
                href="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center"
            >
                <svg class="w-8 text-teal-accent-400" viewBox="0 0 24 24">
                    <rect x="3" y="1" width="7" height="12" />
                    <rect x="3" y="17" width="7" height="6" />
                    <rect x="14" y="1" width="7" height="6" />
                    <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span
                    class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
                >
                    Company
                </span>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                    <a
                        href="/"
                        aria-label="Home"
                        title="Home"
                        class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        aria-label="About Us"
                        title="About Us"
                        class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400"
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        aria-label="Jobs"
                        title="Jobs"
                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-400"
                    >
                        Jobs
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        aria-label="Contact us"
                        title="Contact us"
                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-400"
                    >
                        Contact us
                    </a>
                </li>
            </ul>
            <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                    <a
                        href="/"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-blue-500 hover:bg-white hover:text-blue-800 hover:border-4 border-blue-600 focus:shadow-outline focus:outline-none"
                        aria-label="Recruiter"
                        title="Recruiter"
                    >
                        Recruiter
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-blue-500 hover:bg-white hover:text-blue-800 hover:border-4 border-blue-600 focus:shadow-outline focus:outline-none"
                        aria-label="Applicant"
                        title="Applicant"
                    >
                        Applicant
                    </a>
                </li>
            </ul>
            <div class="lg:hidden">
                <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                    on:click={toggleMenu}
                >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        />
                        <path
                            fill="currentColor"
                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        />
                        <path
                            fill="currentColor"
                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        />
                    </svg>
                </button>
                {#if isMenuOpen}
                    <div class="absolute top-0 left-0 w-full">
                        <div class="p-5 bg-white border rounded shadow-sm">
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <a
                                        href="/"
                                        aria-label="Company"
                                        title="Company"
                                        class="inline-flex items-center"
                                    >
                                        <svg
                                            class="w-8 text-deep-purple-accent-400"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect
                                                x="3"
                                                y="1"
                                                width="7"
                                                height="12"
                                            />
                                            <rect
                                                x="3"
                                                y="17"
                                                width="7"
                                                height="6"
                                            />
                                            <rect
                                                x="14"
                                                y="1"
                                                width="7"
                                                height="6"
                                            />
                                            <rect
                                                x="14"
                                                y="11"
                                                width="7"
                                                height="12"
                                            />
                                        </svg>
                                        <span
                                            class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                                        >
                                            Company
                                        </span>
                                    </a>
                                </div>
                                <div>
                                    <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        on:click={toggleMenu}
                                    >
                                        <svg
                                            class="w-5 text-gray-600"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul class="space-y-4">
                                    <li>
                                        <a
                                            href="/"
                                            aria-label="Our product"
                                            title="Our product"
                                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            aria-label="Our product"
                                            title="Our product"
                                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            aria-label="Product pricing"
                                            title="Product pricing"
                                            class="font-medium tracking-wide text-white transition-colors duration-200 hover:blue-400"
                                        >
                                            Jobs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            aria-label="About us"
                                            title="About us"
                                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            Contact us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-blue-700 hover:bg-white hover:text-blue-800 hover:border-4 border-blue-600 focus:shadow-outline focus:outline-none"
                                            aria-label="Recruiter"
                                            title="Recruiter"
                                        >
                                            Recruiter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-blue-700 hover:bg-white hover:text-blue-800 hover:border-4 border-blue-600 focus:shadow-outline focus:outline-none"
                                            aria-label="Applicant"
                                            title="Applicant"
                                        >
                                            Applicant
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
