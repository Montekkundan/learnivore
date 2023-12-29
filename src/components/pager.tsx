import Link from "next/link"
import { Doc, BYC, Dash } from "contentlayer/generated"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { bycConfig } from "@/config/beforeyoucode"
import { dashConfig } from "@/config/devdash"

interface DocsPagerProps {
  doc: Doc | BYC | Dash;
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "secondary" }), "ml-auto")}
        >
          {pager.next.title}
          <Icons.chevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
export function getPagerForDoc(doc: Doc | BYC | Dash) {

  const isDocType = doc.type === 'Doc';
  const isBYCType = doc.type === 'BYC'; // Added for clarity
  // Determine the configuration based on the doc type
  const config = isDocType ? docsConfig : isBYCType ? bycConfig : dashConfig;
  const flattenedLinks = [null, ...flatten(config.sidebarNav), null];
  const slugParts = doc.slug.split('/');
  const postLearnSlug = slugParts.length > 2 ? slugParts.slice(2).join('/') : '';
  // Determine the prefix based on the doc type
  const prefix = isDocType ? "/codebytes" : isBYCType ? "/beforeyoucode" : "/devdash";
  const activeDocHref = "/learn" + prefix + postLearnSlug;
  let prev = null;
  let next = null;

  for (let i = 0; i < flattenedLinks.length; i++) {
    const link = flattenedLinks[i];
    if (link?.href === activeDocHref) {
      prev = flattenedLinks[i - 1] || null;
      next = flattenedLinks[i + 1] || null;
      break;
    }
  }

  return { prev, next };
}




export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [])
}