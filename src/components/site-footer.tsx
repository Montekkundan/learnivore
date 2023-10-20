import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "./mode-toggle"

interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  showModeToggle?: boolean;
}


export function SiteFooter({ className, showModeToggle = true }: SiteFooterProps) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://github.com/montekkundan"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Montek
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            .The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">Twitter</a>
          <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={siteConfig.links.discord} target="_blank" rel="noreferrer">Discord</a>
        </div>
        {showModeToggle && <ModeToggle />}
      </div>
    </footer>
  )
}