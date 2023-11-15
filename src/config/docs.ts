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
        {
          title: "Printining to console",
          href: "/learn/codebytes/python/printing-to-console",
        },
        {
          title: "Comments",
          href: "/learn/codebytes/python/comments",
        },
        {
          title: "Variables",
          href: "/learn/codebytes/python/variables",
        },
        {
          title: "Inputs",
          href: "/learn/codebytes/python/inputs",
        },
      ],
    },
    
  ],
}