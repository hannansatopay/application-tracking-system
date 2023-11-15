<script>
    import Footer from "../../shared/Footer.svelte";
    import Navbar from "../../shared/Navbar.svelte";
    let imageSrc =
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    let applicants = [
        {
            title: "candidate 1",
            name: "abc xyz",
            emailID: "abc@example.com",
            phoneNumber: "123",
            resumeLink: "http://example.com",
            answer: "I want to join this company as...",
        },
        {
            title: "candidate 1",
            name: "abc xyz",
            emailID: "abc@example.com",
            phoneNumber: "123",
            resumeLink: "http://example.com",
            answer: "I want to join this company as...",
        },
        {
            title: "candidate 1",
            name: "abc xyz",
            emailID: "abc@example.com",
            phoneNumber: "123",
            resumeLink: "http://example.com",
            answer: "I want to join this company as...",
        },
        {
            title: "candidate 1",
            name: "abc xyz",
            emailID: "abc@example.com",
            phoneNumber: "123",
            resumeLink: "http://example.com",
            answer: "I want to join this company as...",
        },
    ];
</script>

<Navbar />

<div class="bg-gray-100 px-2">
    <div class="px-10 py-5 bg-gray-300 rounded-3xl mx-2 my-4">
        <div class="text-3xl mb-4 text-center font-bold">JOB TITLE</div>
        <div
            class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-3 sm:grid-cols-2"
        >
            {#each applicants as applicant (applicant.title)}
                <div
                    class="bg-gray-100 round-200 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl px-4 py-4 rounded-3xl"
                >
                    <!-- <div class="text-3xl text-center pb-3 font-bold">
                        <p>{applicant.title}</p>
                    </div> -->
                    <div class="text-2xl pb-2">
                        <p>Name: {applicant.name}</p>
                    </div>
                    <div class="text-2xl pb-2">
                        <p>EmailID: {applicant.emailID}</p>
                    </div>
                    <div class="text-2xl pb-2">
                        <p>Phone No.: {applicant.phoneNumber}</p>
                    </div>
                    <div class="text-2xl pb-2 flex">
                        <p>
                            Rssume: {applicant.resumeLink}
                        </p>
                    </div>
                    <div class="text-2xl pb-2">
                        <p>{applicant.answer}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<Footer />
