import { DocsConfig } from "@/types"

export const docsConfig: DocsConfig = {
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
          href: "/learn",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/learn/documentation",
        },
        {
          title: "Contentlayer",
          href: "/learn/in-progress",
          disabled: true,
        },
        {
          title: "Components",
          href: "/learn/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/learn/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/learn/documentation/style-guide",
        },
        {
          title: "Search",
          href: "/learn/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Introduction",
          href: "/learn/in-progress",
          disabled: true,
        },
        {
          title: "Build your own",
          href: "/learn/in-progress",
          disabled: true,
        },
        {
          title: "Writing Posts",
          href: "/learn/in-progress",
          disabled: true,
        },
      ],
    },
    
  ],
}