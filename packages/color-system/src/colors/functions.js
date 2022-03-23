import colorNames from "./colorNames";
import Color from "color";

const convertToHsl = function (input) {
  let resultObj = {};
  if (typeof input === "object" && input !== null) {
    Object.entries(input).forEach(([rule, value]) => {
      if (colorNames.hasOwnProperty(rule)) {
        const hslArray = Color(value).hsl().round().array();
        resultObj[colorNames[rule]] =
          hslArray[0] + " " + hslArray[1] + "%" + " " + hslArray[2] + "%";
      } else {
        resultObj[rule] = value;
      }
    });
    return resultObj;
  }
  return input;
};

export function injectThemes(addBase, config, themes) {
  let includedThemesObj = new Object();

  // add light themes
  if (config("daisyui.themes") == false) {
    Object.entries(themes).forEach(([theme, index]) => {
      includedThemesObj[theme] = convertToHsl(themes[theme]);
    });
  }

  // add default themes
  if (config("daisyui.themes") != false) {
    Object.entries(themes).forEach(([theme, index]) => {
      includedThemesObj[theme] = convertToHsl(themes[theme]);
    });
  }

  // add custom themes
  if (Array.isArray(config("daisyui.themes"))) {
    config("daisyui.themes").forEach((item, index) => {
      if (typeof item === "object" && item !== null) {
        Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
          includedThemesObj["[data-theme=" + customThemeName + "]"] =
            convertToHsl(customThemevalue);
        });
      }
    });
  }

  // inject themes in order
  themeOrder.forEach((themeName, index) => {
    if (index === 0) {
      // first theme as root
      addBase({
        [":root"]: includedThemesObj["[data-theme=" + themeName + "]"],
      });
    } else if (index === 1) {
      // auto dark
      if (config("daisyui.darkTheme")) {
        if (
          themeOrder[0] != config("daisyui.darkTheme") &&
          themeOrder.includes(config("daisyui.darkTheme"))
        ) {
          addBase({
            ["@media (prefers-color-scheme: dark)"]: {
              [":root"]:
                includedThemesObj[
                  `[data-theme=${config("daisyui.darkTheme")}]`
                ],
            },
          });
        }
      } else {
        if (themeOrder[0] != "dark" && themeOrder.includes("dark")) {
          addBase({
            ["@media (prefers-color-scheme: dark)"]: {
              [":root"]: includedThemesObj["[data-theme=dark]"],
            },
          });
        }
      }
      // theme 0 with name
      addBase({
        ["[data-theme=" + themeOrder[0] + "]"]:
          includedThemesObj["[data-theme=" + themeOrder[0] + "]"],
      });
      // theme 1 with name
      addBase({
        ["[data-theme=" + themeOrder[1] + "]"]:
          includedThemesObj["[data-theme=" + themeOrder[1] + "]"],
      });
    } else {
      addBase({
        ["[data-theme=" + themeName + "]"]:
          includedThemesObj["[data-theme=" + themeName + "]"],
      });
    }
  });

  return {
    includedThemesObj: includedThemesObj,
    themeOrder: themeOrder,
  };
}
