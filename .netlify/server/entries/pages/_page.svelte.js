import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../chunks/index.js";
const Dashboard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".slider-thumb.svelte-16aa0sf::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:white}@media(max-width: 768px){.custom.svelte-16aa0sf{align-items:center}}",
  map: null
};
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checkboxesArray = ["Uppercase", "Lowercase", "Symbols", "Numbers"];
  let checkBoxValue = [];
  let Length = 10;
  let password = "";
  $$result.css.add(css);
  return `<main class="${escape("bg-green-600", true) + " rounded-md transition-colors ease-in-out duration-200 m-2 h-min md:w-full font-mono"}"><div class="${"flex flex-col space-y-10 p-16 custom svelte-16aa0sf"}"><p class="${"text-3xl font-extrabold uppercase"}">Fashlane</p>

		<input placeholder="${"Password"}" readonly class="${"bg-transparent w-full font-mono outline-none border-b-2 placeholder:text-white placeholder:opacity-50 text-3xl"}"${add_attribute("value", password, 0)}>

		<div class="${"flex flex-col md:flex-row space-y-8 md:space-y-0 md:justify-between p-4"}"><p class="${"text-xl font-medium transition-all ease-out duration-300"}">${`Strong Password`}</p>
			<button id="${"copyButton"}" class="${"p-3 bg-white " + escape("text-green-500", true) + " font-medium rounded-md w-fit active:scale-90 transition-all ease-in-out duration-300"}">Copy Password
			</button></div>
		<p class="${"font-semibold text-lg"}">Length (${escape(Length)})</p>
		<input type="${"range"}" name="${"length"}" step="${"1"}" min="${"4"}" max="${"40"}" class="${"appearance-none w-full h-1 rounded-full outline-none transition-all ease-in-out slider-thumb svelte-16aa0sf"}"${add_attribute("value", Length, 0)}>

		<div class="${"flex flex-col md:flex-row align-baseline md:space-x-6"}">${each(checkboxesArray, (c) => {
    return `<label class="${"text-lg"}" for="${escape(c, true) + "}"}"><input type="${"checkbox"}"${add_attribute("value", c, 0)}${add_attribute("id", c, 0)}${add_attribute("name", c, 0)} class="${"accent-indigo-700 transition-colors ease-linear w-4 h-4"}"${~checkBoxValue.indexOf(c) ? add_attribute("checked", true, 1) : ""}>
					${escape(c)}
				</label>`;
  })}</div>
		<div class="${"justify-center flex"}"><button class="${"bg-white " + escape("text-green-500", true) + " font-semibold p-3 w-min rounded-md active:scale-75 transition-all ease-in-out duration-300"}">Generate</button></div></div>
</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"flex items-center h-screen justify-center md:p-10 text-white"}">${validate_component(Dashboard, "DashBoard").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
