import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  // transformerDirectives,
  // transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    ["flex-center-row", "flex items-center justify-center"],
    ["flex-center-column", "flex flex-col items-center justify-center"],
    [
      "icon-btn",
      "text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none",
    ],
    ["light", "#6C757D"],
    [
      "center-absolute",
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    ],
  ],
  theme: {
    // ...
    colors: {
      dark: "#212529",
      light: "#6C757D",
      primary: "#0D6EFD",
      blueLight: "#0094FF",
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
});
