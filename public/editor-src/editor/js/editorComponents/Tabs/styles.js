import classnames from "classnames";
import { css } from "glamor";
import { hexToRgba } from "visual/utils/color";
import { getFontById } from "visual/utils/fonts";

const aligns = {
  horizontal: {
    left: "flex-start",
    center: "center",
    right: "flex-end"
  }
};

// Tabs Style
export function styleClassName(v) {
  const { className } = v;
  let glamorObj;

  if (IS_EDITOR) {
    glamorObj = {
      ".brz &": {
        fontFamily: "var(--fontFamily)",

        "& .brz-tabs__nav--button, & .brz-tabs__items": {
          color: "var(--color)",
          backgroundColor: "var(--backgroundColor)",
          borderColor: "var(--borderColor)",
        },
        "& .brz-tabs__items": {
          borderWidth: "var(--borderWidth)",
        },
        "& .brz-tabs__nav--active .brz-tabs__nav--button": {
          borderBottomColor: "var(--backgroundColor)",
        },
        "& .brz-tabs__nav--active::after, & .brz-tabs__nav--active::before": {
          backgroundColor: "var(--borderColor)",
        },
        "& .brz-tabs__nav--active::after": {
          right: "var(--afterWidth)"
        },
        "& .brz-tabs__nav--active::before": {
          left: "var(--afterWidth)"
        }
      },

      ".brz-ed--desktop &": {
        fontSize: "var(--fontSize)",
        lineHeight: "var(--lineHeight)",
        fontWeight: "var(--fontWeight)",
        letterSpacing: "var(--letterSpacing)",

        "& .brz-tabs__nav": {
          justifyContent: "var(--horizontalAlign)",
        },
        "& .brz-tabs__nav--button": {
          borderWidth: "var(--borderWidth)",
          borderBottomColor: "transparent",
        },
        "& .brz-tabs__item--content": {
          paddingTop: "var(--paddingTop)",
          paddingRight: "var(--paddingRight)",
          paddingBottom: "var(--paddingBottom)",
          paddingLeft: "var(--paddingLeft)"
        },
      },
      ".brz-ed--mobile &": {
        fontSize: "var(--mobileFontSize)",
        lineHeight: "var(--mobileLineHeight)",
        fontWeight: "var(--mobileFontWeight)",
        letterSpacing: "var(--mobileLetterSpacing)",

        "& .brz-tabs__nav": {
          justifyContent: "var(--mobileHorizontalAlign)",
        },
        "& .brz-tabs__nav--button": {
          borderBottomColor: "var(--borderColor)",
          borderWidth: 0,
        },
        "& .brz-tabs__nav--mobile--active .brz-tabs__nav--button": {
          borderBottomWidth: "var(--borderWidth)",
        },
        "& .brz-tabs__item--content": {
          paddingTop: "var(--mobilePaddingTop)",
          paddingRight: "var(--mobilePaddingRight)",
          paddingBottom: "var(--mobilePaddingBottom)",
          paddingLeft: "var(--mobilePaddingLeft)"
        },
      }
    };
  } else {
    const {
      fontFamily,
      fontSize,
      lineHeight,
      fontWeight,
      letterSpacing,
      colorHex,
      colorOpacity,
      bgColorHex,
      bgColorOpacity,
      borderWidth,
      borderColorHex,
      borderColorOpacity,
      horizontalAlign,
      paddingType,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      mobilePaddingType,
      mobilePadding,
      mobilePaddingTop,
      mobilePaddingRight,
      mobilePaddingBottom,
      mobilePaddingLeft,
      mobileFontSize,
      mobileLineHeight,
      mobileFontWeight,
      mobileLetterSpacing,
      mobileHorizontalAlign
    } = v;

    glamorObj = {
      ".brz &": {
        fontFamily: getFontById(fontFamily).family,
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing,

        "& .brz-tabs__nav": {
          justifyContent: `${aligns.horizontal[horizontalAlign]}`,
        },
        "& .brz-tabs__item--content": {
          paddingTop:
            paddingType === "grouped" ? `${padding}px` : `${paddingTop}px`,
          paddingRight:
            paddingType === "grouped" ? `${padding}px` : `${paddingRight}px`,
          paddingBottom:
            paddingType === "grouped" ? `${padding}px` : `${paddingBottom}px`,
          paddingLeft:
            paddingType === "grouped" ? `${padding}px` : `${paddingLeft}px`,
        },
        "& .brz-tabs__nav--button, & .brz-tabs__items": {
          color: hexToRgba(colorHex, colorOpacity),
          backgroundColor: hexToRgba(bgColorHex, bgColorOpacity),
          borderColor: hexToRgba(borderColorHex, borderColorOpacity),
          borderWidth,
        },
        "& .brz-tabs__nav--button": {
          borderBottomColor: "transparent",
        },
        "& .brz-tabs__nav--active .brz-tabs__nav--button": {
          borderBottomColor: hexToRgba(bgColorHex, bgColorOpacity),
        },
        "& .brz-tabs__nav--active::after, & .brz-tabs__nav--active::before": {
          backgroundColor: hexToRgba(borderColorHex, borderColorOpacity),
        },
        "& .brz-tabs__nav--active::after": {
          right: `calc(-100vw + ${borderWidth}px)`
        },
        "& .brz-tabs__nav--active::before": {
          left: `calc(-100vw + ${borderWidth}px)`
        }
      },
      "@media (max-width: 767px)": {
        ".brz &": {
          fontSize: `${mobileFontSize}px`,
          lineHeight: mobileLineHeight,
          fontWeight: mobileFontWeight,
          letterSpacing: `${mobileLetterSpacing}px`,

          "& .brz-tabs__nav": {
            justifyContent: `${aligns.horizontal[mobileHorizontalAlign]}`
          },
          "& .brz-tabs__nav--button": {
            borderBottomColor: hexToRgba(borderColorHex, borderColorOpacity),
            borderWidth: 0,
          },
          "& .brz-tabs__nav--mobile--active .brz-tabs__nav--button": {
            borderBottomWidth: `${borderWidth}px`,
          },
          "& .brz-tabs__item--content": {
            paddingTop:
              mobilePaddingType === "grouped"
                ? `${mobilePadding}px`
                : `${mobilePaddingTop}px`,
            paddingRight:
              mobilePaddingType === "grouped"
                ? `${mobilePadding}px`
                : `${mobilePaddingRight}px`,
            paddingBottom:
              mobilePaddingType === "grouped"
                ? `${mobilePadding}px`
                : `${mobilePaddingBottom}px`,
            paddingLeft:
              mobilePaddingType === "grouped"
                ? `${mobilePadding}px`
                : `${mobilePaddingLeft}px`
          },
        },
      }
    };
  }

  const glamorClassName = String(css(glamorObj));

  return classnames("brz-tabs", glamorClassName, className);
}

export function styleCSSVars(v) {
  if (IS_PREVIEW) return null;

  const {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    colorHex,
    colorOpacity,
    bgColorHex,
    bgColorOpacity,
    borderWidth,
    borderColorHex,
    borderColorOpacity,
    mobileFontSize,
    mobileLineHeight,
    mobileFontWeight,
    mobileLetterSpacing,
    horizontalAlign,
    mobileHorizontalAlign,
    paddingType,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    mobilePaddingType,
    mobilePadding,
    mobilePaddingTop,
    mobilePaddingRight,
    mobilePaddingBottom,
    mobilePaddingLeft
  } = v;

  return {
    // Typography
    "--fontFamily": getFontById(fontFamily).family,
    "--fontWeight": fontWeight,
    "--fontSize": `${fontSize}px`,
    "--lineHeight": lineHeight,
    "--letterSpacing": `${letterSpacing}px`,

    // Colors
    "--color": hexToRgba(colorHex, colorOpacity),
    "--backgroundColor": hexToRgba(bgColorHex, bgColorOpacity),
    "--borderColor": hexToRgba(borderColorHex, borderColorOpacity),

    // Border
    "--borderWidth": `${borderWidth}px`,

    // Align
    "--horizontalAlign": `${aligns.horizontal[horizontalAlign]}`,
    "--mobileHorizontalAlign": `${aligns.horizontal[mobileHorizontalAlign]}`,

    // Border After and Before
    "--afterWidth": `calc(-100vw + ${borderWidth}px)`,
    "--beforeWidth": `calc(-100vw + ${borderWidth}px)`,

    // Padding Tab
    "--paddingTop":
      paddingType === "grouped" ? `${padding}px` : `${paddingTop}px`,
    "--paddingRight":
      paddingType === "grouped" ? `${padding}px` : `${paddingRight}px`,
    "--paddingBottom":
      paddingType === "grouped" ? `${padding}px` : `${paddingBottom}px`,
    "--paddingLeft":
      paddingType === "grouped" ? `${padding}px` : `${paddingLeft}px`,
    "--mobilePaddingTop":
      mobilePaddingType === "grouped"
        ? `${mobilePadding}px`
        : `${mobilePaddingTop}px`,
    "--mobilePaddingRight":
      mobilePaddingType === "grouped"
        ? `${mobilePadding}px`
        : `${mobilePaddingRight}px`,
    "--mobilePaddingBottom":
      mobilePaddingType === "grouped"
        ? `${mobilePadding}px`
        : `${mobilePaddingBottom}px`,
    "--mobilePaddingLeft":
      mobilePaddingType === "grouped"
        ? `${mobilePadding}px`
        : `${mobilePaddingLeft}px`,

    // Mobile
    "--mobileFontSize": `${mobileFontSize}px`,
    "--mobileLineHeight": mobileLineHeight,
    "--mobileFontWeight": mobileFontWeight,
    "--mobileLetterSpacing": `${mobileLetterSpacing}px`,
  };
}
