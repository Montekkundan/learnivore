export const emojis = [
    "react",
    "chrome",
    "qwik",
  ] as const;
  
  export type Emoji = (typeof emojis)[number];