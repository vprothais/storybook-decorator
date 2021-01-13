
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme context',
    defaultValue: 'light',
    toolbar: {
      items: ['light', 'dark'],
    },
  },
};

export const decorators = [
  (storyFunc, context) => {
    const story = storyFunc();
    const decorated = {
      ...story,
      template: `<div class="${context.globals.theme}-theme">${story.template}</div>`,
    };
    console.log("template", decorated.template);
    return decorated;
  },
];