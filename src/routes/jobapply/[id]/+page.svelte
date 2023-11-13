<script>
  import Footer from "../../../shared/Footer.svelte";
  import Navbar from "../../../shared/Navbar.svelte";
  import Modal from "../../../pages/Modal.svelte";

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

  // FUNCTION TO HANDEL MODAL
  let isOpen = false;

  // function openModal() {
  //     isOpen = true;
  // }
</script>

<!-- NAVBAR -->
<Navbar />

<!-- JOB APPLY FORM -->
<section class="max-w-4xl p-6 mx-auto rounded-md shadow-md my-10 bg-gray-100">
  <!-- HEADING -->
  <h1 class="font-bold text-3xl text-gray-900 text-center">Apply Job</h1>
  <form method="POST">
    <div>
      <!-- FIRST AND LAST NAME -->
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <!-- FIRST NAME -->
        <div>
          <label class="text-gray-800 font-semibold" for="username"
            >First Name</label
          >
          <div class="flex">
            <input
              type="text"
              name="first_name"
              class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="John"
            />
          </div>
        </div>

        <!-- LAST NAME -->
        <div>
          <label class="text-gray-800 font-semibold" for="username"
            >Last Name</label
          >
          <div class="flex">
            <input
              type="text"
              name="last_name"
              class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="John"
            />
          </div>
        </div>
      </div>

      <!-- EMAIL ID AND PHONE NUMBER -->
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <!-- EMAIL ID -->
        <div>
          <label class="text-gray-800 font-semibold" for="emailAddress"
            >Email ID</label
          >
          <div class="flex">
            <input
              type="email"
              name="email"
              class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="johnsmith@example.com"
            />
          </div>
        </div>

        <!-- PHONE NUMBER -->
        <div>
          <div>
            <label class="text-gray-800 font-semibold" for="phone"
              >Phone Number</label
            >
          </div>

          <div class="flex items-center space-x-2">
            <div
              class="text-gray-600 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            >
              <span class="text-gray-800 mx-3 text-xl font-semibold">+91</span>
            </div>
            <input
              id="phone"
              type="tel"
              class="text-gray-600 w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="Enter your phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
           
          </div>
        </div>
      </div>

      <!-- RESUME UPLOAD -->
      <div class="mt-4">
        <label class="text-gray-800 font-semibold mb-3" for="Resume upload"
          >Resume</label
        >
        <div
          class="bg-white mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-500 border-dashed rounded-md"
        >
          <div class="space-y-1 text-center">
            <svg
              class="mx-auto h-12 w-12 text-gray-600"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer bg-white rounded-md font-medium text-gray-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span class="">Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  bind:files={file}
                />
              </label>
              <p class="pl-1 text-gray-600">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-600">PDF, PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      <!-- ANSWER TO QUESTION -->
      <div class="mt-4">
        <label class="text-gray-800 font-semibold pb-3" for="answer"
          >Why do you want to join this organisation? (sample question)</label
        >
        <textarea
          id="answer"
          class="w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 mt-2"
          placeholder="I want to join this organisation..."
        />
      </div>

      <!-- JOB APPLY BUTTON -->
      <div class="flex justify-end mt-6">
        <!-- <button
                    class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    on:click={openModal} type="submit">APPLY</button
                > -->
        <button
          class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
          type="submit">APPLY</button
        >
      </div>
    </div>
  </form>
</section>

<!-- FOOTER -->
<Footer />

<Modal {isOpen} />

<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
  /* Add any additional styles you need */
</style>
