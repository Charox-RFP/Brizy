import { t } from "visual/utils/i18n";

export function getItemsForDesktop(v) {
  return [
    {
      id: "toolbarSettings",
      type: "popover",
      icon: "nc-cog",
      title: t("Settings"),
      roles: ["admin"],
      position: 110,
      options: [
        {
          id: "height",
          label: t("Height"),
          type: "slider",
          slider: {
            min: 10,
            max: 200
          },
          input: {
            show: true
          },
          suffix: {
            show: true,
            choices: [
              {
                title: "px",
                value: "px"
              }
            ]
          },
          value: {
            value: v.height
          },
          onChange: ({ value: height }) => {
            return {
              height,
              mobileHeight:
                v.height === v.mobileHeight ? height : v.mobileHeight
            };
          }
        },
        {
          id: "advancedSettings",
          type: "advancedSettings",
          disabled: true
        }
      ]
    },
    {
      id: "horizontalAlign",
      type: "toggle",
      disabled: true
    }
  ];
}

export function getItemsForMobile(v) {
  return [
    {
      id: "mobileToolbarSettings",
      type: "popover",
      icon: "nc-cog",
      title: t("Settings"),
      roles: ["admin"],
      position: 110,
      options: [
        {
          id: "mobileHeight",
          label: t("Height"),
          type: "slider",
          slider: {
            min: 10,
            max: 200
          },
          input: {
            show: true
          },
          suffix: {
            show: true,
            choices: [
              {
                title: "px",
                value: "px"
              }
            ]
          },
          value: {
            value: v.mobileHeight
          },
          onChange: ({ value: mobileHeight }) => {
            return {
              mobileHeight
            };
          }
        },
        {
          id: "mobileAdvancedSettings",
          type: "advancedSettings",
          disabled: true
        }
      ]
    },
    {
      id: "mobileHorizontalAlign",
      type: "toggle",
      disabled: true
    }
  ];
}
