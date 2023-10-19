import Link from "next/link"
import { Doc, BYC } from "contentlayer/generated"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { bycConfig } from "@/config/beforeyoucode"

interface DocsPagerProps {
  doc: Doc | BYC;
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
export function getPagerForDoc(doc: Doc | BYC) {

  const isDocType = doc.type === 'Doc';
  const flattenedLinks = [null, ...flatten(isDocType ? docsConfig.sidebarNav : bycConfig.sidebarNav), null];
  const slugParts = doc.slug.split('/');
  const postLearnSlug = slugParts.length > 2 ? slugParts.slice(2).join('/') : '';
  const prefix = isDocType ? (postLearnSlug ? "/codebytes/" : "/codebytes") : (postLearnSlug ? "/beforeyoucode/" : "/beforeyoucode");
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

  return {
    prev,
    next,
  };
}



export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [])
}