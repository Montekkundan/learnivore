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
          href: "/learn/codebytes",
        },
      ],
    },
    {
      title: "Python",
      items: [
        {
          title: "What is Python",
          href: "/learn/codebytes/python",
        },
        {
          title: "Roadmap",
          href: "/learn/codebytes/python/roadmap",
        },
      ],
    },
    
  ],
}