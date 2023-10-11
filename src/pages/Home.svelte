<script>
    import Footer from "../shared/Footer.svelte";
    import Navbar from "../shared/Navbar.svelte";
    let imageSrc =
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    let paintings = [
        {
            name: "Mona Lisa",
            description:
                "Painted between 1503 and 1517, Da Vinci’s alluring portrait has been dogged by two questions since the day it was made: Who’s the subject and why is she smiling?",
            imageSrc:
                "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            name: "The Starry Night",
            description:
                "Vincent Van Gogh’s most popular painting, The Starry Night was created by Van Gogh at the asylum in Saint-Rémy, where he’d committed himself in 1889.",
            imageSrc:
                "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            name: "The Kiss",
            description:
                "Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimt’s fin-de-siècle portrayal of intimacy, is a mix of Symbolism and Vienna Jugendstil, the Austrian variant of Art Nouveau.",
            imageSrc:
                "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            name: "The Harvesters",
            description:
                "Bruegel’s fanfare for the common man is considered one of the defining works of Western art. This composition was one of six created on the theme of the seasons.",
            imageSrc:
                "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
    ];
</script>

<!-- NAVBAR -->
<Navbar />

<!-- COVER IMAGE -->
<div class="relative">
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
                        <!-- <span class="text-teal-accent-400">lazy dog</span> -->
                    </h2>
                    <p
                        class="max-w-xl mb-4 text-base text-gray-400 md:text-lg text-right"
                    >
                        – Walt Disney
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
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
</div>

<div class="text-center py-6 text-4xl font-semibold">JOBS</div>

<!-- CARD -->
<div
    class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 mx-4"
>
    {#each paintings as painting (painting.name)}
        <a href="/" aria-label="View Item">
            <div
                class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
            >
                <img
                    class="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={painting.imageSrc}
                    alt={painting.name}
                />
                <div
                    class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
                >
                    <p class="mb-4 text-lg font-bold text-gray-100">
                        {painting.name}
                    </p>
                    <p class="text-sm tracking-wide text-gray-300">
                        {painting.description}
                    </p>
                </div>
            </div>
        </a>
    {/each}
</div>

<div class="text-center mb-8">
    <a
        href="/"
        aria-label=""
        class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    >
        View more jobs
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

<!-- FOOTER -->
<Footer />
