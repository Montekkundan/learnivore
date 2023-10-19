import { BYCConfig } from "@/types"

export const bycConfig: BYCConfig = {
  mainNav: [
    {
      title: "Learn",
      href: "/learn",
    },
    {
      title: "Grow",
      href: "/grow",
    },
    {
      title: "Share",
      href: "/share",
    },
    {
      title: "Guides",
      href: "/guides",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/learn/beforeyoucode",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/learn/beforeyoucode/documentation",
        },
        {
          title: "Contentlayer",
          href: "/learn/beforeyoucode/in-progress",
          disabled: true,
        },
        {
          title: "Components",
          href: "/learn/beforeyoucode/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/learn/beforeyoucode/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/learn/beforeyoucode/documentation/style-guide",
        },
        {
          title: "Search",
          href: "/learn/beforeyoucode/in-progress",
          disabled: true,
        },
      ],
    },
    
  ],
}