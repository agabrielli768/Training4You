import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    state: {
      options: ["accueil", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Button",
    state: "accueil",
    className: {},
  },
};
