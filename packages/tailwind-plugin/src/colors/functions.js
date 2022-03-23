import colorNames from "./colorNames";
import Color from "color";

const generateForegorundColorFrom = function (input, percentage = 0.8) {
  if (Color(input).isDark()) {
    let arr = Color(input)
      .mix(Color("white"), percentage)
      .saturate(10)
      .hsl()
      .round()
      .array();
    return arr[0] + " " + arr[1] + "%" + " " + arr[2] + "%";
  } else {
    let arr = Color(input)
      .mix(Color("black"), percentage)
      .saturate(10)
      .hsl()
      .round()
      .array();
    return arr[0] + " " + arr[1] + "%" + " " + arr[2] + "%";
  }
};

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

      // auto generate focus colors
      if (!input.hasOwnProperty("primary-focus")) {
        const darkerHslArray = Color(input["primary"])
          .darken(0.2)
          .hsl()
          .round()
          .array();
        resultObj["--primary-focus"] =
          darkerHslArray[0] +
          " " +
          darkerHslArray[1] +
          "%" +
          " " +
          darkerHslArray[2] +
          "%";
      }

      if (!input.hasOwnProperty("secondary-focus")) {
        const darkerHslArray = Color(input["secondary"])
          .darken(0.2)
          .hsl()
          .round()
          .array();
        resultObj["--secondary-focus"] =
          darkerHslArray[0] +
          " " +
          darkerHslArray[1] +
          "%" +
          " " +
          darkerHslArray[2] +
          "%";
      }

      if (!input.hasOwnProperty("accent-focus")) {
        const darkerHslArray = Color(input["accent"])
          .darken(0.2)
          .hsl()
          .round()
          .array();
        resultObj["--accent-focus"] =
          darkerHslArray[0] +
          " " +
          darkerHslArray[1] +
          "%" +
          " " +
          darkerHslArray[2] +
          "%";
      }

      if (!input.hasOwnProperty("neutral-focus")) {
        const darkerHslArray = Color(input["neutral"])
          .darken(0.2)
          .hsl()
          .round()
          .array();
        resultObj["--neutral-focus"] =
          darkerHslArray[0] +
          " " +
          darkerHslArray[1] +
          "%" +
          " " +
          darkerHslArray[2] +
          "%";
      }

      // auto generate base colors
      if (!input.hasOwnProperty("base-100")) {
        resultObj["--base-100"] = 0 + " " + 0 + "%" + " " + 100 + "%";
      }

      if (!input.hasOwnProperty("base-200")) {
        const darkerHslArray = Color(input["base-100"])
          .darken(0.1)
          .hsl()
          .round()
          .array();
        resultObj["--base-200"] =
          darkerHslArray[0] +
          " " +
          darkerHslArray[1] +
          "%" +
          " " +
          darkerHslArray[2] +
          "%";
      }

      if (!input.hasOwnProperty("base-300")) {
        if (input.hasOwnProperty("base-200")) {
          const darkerHslArray = Color(input["base-200"])
            .darken(0.1)
            .hsl()
            .round()
            .array();
          resultObj["--base-300"] =
            darkerHslArray[0] +
            " " +
            darkerHslArray[1] +
            "%" +
            " " +
            darkerHslArray[2] +
            "%";
        } else {
          const darkerHslArray = Color(input["base-100"])
            .darken(0.1)
            .darken(0.1)
            .hsl()
            .round()
            .array();
          resultObj["--base-300"] =
            darkerHslArray[0] +
            " " +
            darkerHslArray[1] +
            "%" +
            " " +
            darkerHslArray[2] +
            "%";
        }
      }

      // auto generate state colors
      if (!input.hasOwnProperty("info")) {
        resultObj["--info"] = 198 + " " + 93 + "%" + " " + 60 + "%";
      }
      if (!input.hasOwnProperty("success")) {
        resultObj["--success"] = 158 + " " + 64 + "%" + " " + 52 + "%";
      }
      if (!input.hasOwnProperty("warning")) {
        resultObj["--warning"] = 43 + " " + 96 + "%" + " " + 56 + "%";
      }
      if (!input.hasOwnProperty("danger")) {
        resultObj["--danger"] = 0 + " " + 91 + "%" + " " + 71 + "%";
      }

      // auto generate content colors
      if (!input.hasOwnProperty("base-content")) {
        resultObj["--base-content"] = generateForegorundColorFrom(
          input["base-100"]
        );
      }
      if (!input.hasOwnProperty("primary-content")) {
        resultObj["--primary-content"] = generateForegorundColorFrom(
          input["primary"]
        );
      }

      if (!input.hasOwnProperty("secondary-content")) {
        resultObj["--secondary-content"] = generateForegorundColorFrom(
          input["secondary"]
        );
      }

      if (!input.hasOwnProperty("accent-content")) {
        resultObj["--accent-content"] = generateForegorundColorFrom(
          input["accent"]
        );
      }

      if (!input.hasOwnProperty("neutral-content")) {
        resultObj["--neutral-content"] = generateForegorundColorFrom(
          input["neutral"]
        );
      }

      if (!input.hasOwnProperty("info-content")) {
        if (input.hasOwnProperty("info")) {
          resultObj["--info-content"] = generateForegorundColorFrom(
            input["info"]
          );
        } else {
          resultObj["--info-content"] = 198 + " " + 100 + "%" + " " + 12 + "%";
        }
      }

      if (!input.hasOwnProperty("success-content")) {
        if (input.hasOwnProperty("success")) {
          resultObj["--success-content"] = generateForegorundColorFrom(
            input["success"]
          );
        } else {
          resultObj["--success-content"] =
            158 + " " + 100 + "%" + " " + 10 + "%";
        }
      }

      if (!input.hasOwnProperty("warning-content")) {
        if (input.hasOwnProperty("warning")) {
          resultObj["--warning-content"] = generateForegorundColorFrom(
            input["warning"]
          );
        } else {
          resultObj["--warning-content"] =
            43 + " " + 100 + "%" + " " + 11 + "%";
        }
      }

      if (!input.hasOwnProperty("danger-content")) {
        if (input.hasOwnProperty("danger")) {
          resultObj["--danger-content"] = generateForegorundColorFrom(
            input["danger"]
          );
        } else {
          resultObj["--danger-content"] = 0 + " " + 100 + "%" + " " + 14 + "%";
        }
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

  let themeOrder = [];
  if (Array.isArray(config("daisyui.themes"))) {
    config("daisyui.themes").forEach((theme, index) => {
      if (typeof theme === "object" && theme !== null) {
        Object.entries(theme).forEach(([customThemeName, customThemevalue]) => {
          themeOrder.push(customThemeName);
        });
      } else if (
        includedThemesObj.hasOwnProperty("[data-theme=" + theme + "]")
      ) {
        themeOrder.push(theme);
      }
    });
  } else if (config("daisyui.themes") != false) {
    themeOrder = ["light", "dark"];
  } else if (config("daisyui.themes") == false) {
    themeOrder.push("light");
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
