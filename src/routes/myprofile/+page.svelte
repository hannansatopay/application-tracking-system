<script>
    import Footer from "../../shared/Footer.svelte";
    import Navbar from "../../shared/Navbar.svelte";
    let imageSrc =
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    let myjobs = [
        {
            title: "SDE",
            type: "Full-time",
            enddate: "01-11-2023",
            description: "This is SDE Role...",
            stipend: "INR 10000",
            opening: "3",
            question: "Why do you want to join?",
            imageSrc:
                "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            title: "Fronted",
            type: "Part-time",
            enddate: "01-11-2023",
            description: "This is SDE Role...",
            stipend: "INR 10000",
            opening: "3",
            question: "Why do you want to join?",
            imageSrc:
                "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            title: "UI/UX",
            type: "Internship",
            enddate: "01-11-2023",
            description: "This is SDE Role...",
            stipend: "INR 10000",
            opening: "3",
            question: "Why do you want to join?",
            imageSrc:
                "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            title: "Backend",
            type: "Full-time",
            enddate: "01-11-2023",
            description: "This is SDE Role...",
            stipend: "INR 10000",
            opening: "3",
            question: "Why do you want to join?",
            imageSrc:
                "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
    ];
</script>

<Navbar />

<div class="bg-gray-100">
    <div class="flex">
        <div class="px-10 py-5 bg-gray-300 w-1/4 rounded-3xl mx-2 my-4">
            <div class="flex">
                <img
                    class="w-20 h-20 rounded-full"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Rounded avatar"
                />
                <div class="px-5 flex items-center justify-center text-4xl">
                    Name
                </div>
            </div>
            <div>
                <p>I am recuriting fot the SDE role.</p>
            </div>
        </div>

        <div class="px-10 py-5 bg-gray-300 w-3/4 rounded-3xl mr-2 my-4">
            <div class="text-3xl mb-4 text-center font-bold">JOBS POSTED</div>
            <div
                class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-3 sm:grid-cols-2"
            >
                {#each myjobs as myjob (myjob.title)}
                    <div
                        class="bg-gray-100 round-200 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl px-4 py-4 rounded-3xl"
                    >
                        <div class="text-3xl text-center pb-3 font-bold">
                            <p>{myjob.title}</p>
                        </div>
                        <div class="text-2xl pb-2">
                            <p>Type: {myjob.type}</p>
                        </div>
                        <div class="text-2xl pb-2">
                            <p>End Date: {myjob.enddate}</p>
                        </div>
                        <div class="text-2xl pb-2">
                            <p>Stipend: {myjob.stipend}</p>
                        </div>
                        <div class="text-2xl pb-2 flex">
                            <p>
                                Opening(s): {myjob.opening}
                            </p>
                        </div>
                        <div class="text-2xl pb-2">
                            <p>{myjob.description}</p>
                        </div>
                        <div class="text-2xl pb-2">
                            <p>{myjob.question}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<Footer />
