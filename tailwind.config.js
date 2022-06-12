// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
    // // mode: 'jit',
    // // These paths are just examples, customize them to match your project structure
    // purge: [
    //     // './public/**/*.html',
    //     // './src/**/*.{js,jsx,ts,tsx,vue}',
    // ],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
