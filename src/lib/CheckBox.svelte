<script>
  export let text, value;
</script>

<label class="text-lg" for="{value}}">
  <input
    type="checkbox"
    id={value}
    name={text}
    {value}
    class="accent-indigo-700 transition-colors ease-linear w-4 h-4"
  />
  {text}
</label>
