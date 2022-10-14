<script>
  import CheckBox from "./CheckBox.svelte";

  let checkboxesArray = [
    { text: "Uppercase", value: "up" },
    { text: "Lowercase", value: "lo" },
    { text: "Symbol", value: "sy" },
    { text: "Number", value: "nu" },
  ];
  let length = 10;
  let password = "ashish";
  function copyToClipboard() {
    navigator.clipboard.writeText(password);
    document.getElementById("copyButton").innerHTML = "Password Copied";
    setTimeout(() => {
      document.getElementById("copyButton").innerHTML = "Copy Password";
    }, 3000);
  }
</script>

<main
  class="{length < 8
    ? 'bg-rose-600'
    : 'bg-green-600'} w-full flex flex-col space-y-10 p-16 m-10 rounded-md transition-colors ease-in-out duration-200"
>
  <p class="text-3xl font-extrabold uppercase">Fashlane</p>

  <input
    bind:value={password}
    placeholder="Password"
    readonly
    class="bg-transparent w-full font-mono outline-none border-b-2 p-2 placeholder:text-white placeholder:opacity-50 text-3xl"
  />

  <div
    class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:justify-between p-4"
  >
    <p class="text-xl font-medium transition-all ease-out duration-300">
      {#if length < 8}
        Weak Password!!!
      {:else}
        Strong Password
      {/if}
    </p>
    <button
      id="copyButton"
      on:click={copyToClipboard}
      class="p-3 bg-white text-green-500 font-medium rounded-md w-fit active:scale-90 transition-all ease-in-out duration-300"
    >
      Copy Password
    </button>
  </div>
  <p class=" font-semibold text-lg">Length ({length})</p>
  <input
    type="range"
    name="length"
    step="1"
    min="4"
    max="40"
    bind:value={length}
    class="appearance-none w-full h-1 rounded-full outline-none transition-all ease-in-out slider-thumb"
  />

  <div class="flex flex-col md:flex-row align-baseline md:space-x-6">
    {#each checkboxesArray as c}
      <CheckBox text={c.text} value={c.value} />
    {/each}
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
</style>
