<script>
  let checkboxesArray = ["Uppercase", "Lowercase", "Symbols", "Numbers"];
  let checkBoxValue = [];
  let Length = 10;
  let password = "";

  function copyToClipboard() {
    navigator.clipboard.writeText(password);
    document.getElementById("copyButton").innerHTML = "Password Copied";
    setTimeout(() => {
      document.getElementById("copyButton").innerHTML = "Copy Password";
    }, 3000);
  }

  function postData() {
    let data = { Length };
    checkBoxValue.map((x) => {
      data[x] = x;
    });
    return data;
  }

  async function fetchData() {
    const res = await fetch(".netlify/functions/getPassword", {
      method: "POST",
      body: JSON.stringify(postData()),
    });
    const data = await res.json();
    password = data.password;
  }
</script>

<main
  class="{Length < 8
    ? 'bg-rose-600'
    : 'bg-green-600'}  rounded-md transition-colors ease-in-out duration-200 m-2 h-min md:w-full font-sans"
>
  <div class=" flex flex-col space-y-10 p-16 custom">
    <p class="text-3xl font-extrabold uppercase">Fashlane</p>

    <input
      bind:value={password}
      placeholder="Password"
      readonly
      class="bg-transparent w-full font-mono outline-none border-b-2  placeholder:text-white placeholder:opacity-50 text-3xl"
    />

    <div
      class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:justify-between p-4"
    >
      <p class="text-xl font-medium transition-all ease-out duration-300">
        {#if Length < 8}
          Weak Password!!!
        {:else}
          Strong Password
        {/if}
      </p>
      <button
        id="copyButton"
        disabled={password !== ""}
        on:click={copyToClipboard}
        class="p-3 bg-white {Length < 8
          ? 'text-rose-500'
          : 'text-green-500'} font-medium rounded-md w-fit active:scale-90 transition-all ease-in-out duration-300"
      >
        Copy Password
      </button>
    </div>
    <p class=" font-semibold text-lg">Length ({Length})</p>
    <input
      type="range"
      name="length"
      step="1"
      min="4"
      max="40"
      bind:value={Length}
      class="appearance-none w-full h-1 rounded-full outline-none transition-all ease-in-out slider-thumb"
    />

    <div class="flex flex-col md:flex-row align-baseline md:space-x-6">
      {#each checkboxesArray as c}
        <label class="text-lg" for="{c}}">
          <input
            type="checkbox"
            bind:group={checkBoxValue}
            value={c}
            id={c}
            name={c}
            class="accent-indigo-700 transition-colors ease-linear w-4 h-4"
          />
          {c}
        </label>
      {/each}
    </div>
    <div class="justify-center flex">
      <button
        on:click={fetchData}
        class="bg-white {Length < 8
          ? 'text-rose-500'
          : 'text-green-500'} font-semibold p-3 w-min rounded-md active:scale-75 transition-all ease-in-out duration-300"
        >Generate</button
      >
    </div>
  </div>
</main>

<style scoped>
  .slider-thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
  }
  @media (max-width: 768px) {
    .custom {
      align-items: center;
    }
  }
</style>
