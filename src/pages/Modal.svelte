<script>
    export let isOpen = false;

    function closeModal() {
        isOpen = false;
    }
</script>

<div
    class={isOpen
        ? "modal fixed inset-0 flex items-center justify-center"
        : "modal hidden"}
>
    <div
        class="modal-content bg-white p-4 rounded-lg shadow-md bg-gray-300 text-center"
    >
        <p class="text-lg font-semibold mb-4">Your application is submitted</p>
        <a href="/jobs">
            <button
                class="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
                on:click={closeModal}>Close</button
            >
        </a>
    </div>
</div>
