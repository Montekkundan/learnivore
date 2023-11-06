"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "@/types"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Icons } from "./icons"

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState({});
  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  useEffect(() => {
    const newOpenSections = {};
  
    // We find if a section contains the active item
    let activeSectionTitle = '';
    items.forEach((section) => {
      const isActive = section.items.some(item => pathname === item.href);
      if (isActive) {
        activeSectionTitle = section.title;
      }
      newOpenSections[section.title] = isActive;
    });
  
    // Ensuring only one section is open, the one that matches the active item
    Object.keys(newOpenSections).forEach((title) => {
      newOpenSections[title] = title === activeSectionTitle;
    });
  
    setOpenSections(newOpenSections);
  }, [pathname, items]);
  

  return items.length ? (
    <div className="w-full">
    {items.map((item, index) => (
      <div key={index} className="pb-8">
        <div  className={`mb-1 flex justify-between rounded-md px-2 py-1 text-sm font-medium cursor-pointer ${
            openSections[item.title] ? 'bg-[#2b2f30]' : ''
          }`}  onClick={() => toggleSection(item.title)} >
        <h4>
           
          {item.title}
          
        </h4>
        <Icons.chevronRight
        className={`mr-2 h-4 w-4 transition-transform duration-300 ${openSections[item.title] ? 'transform rotate-90' : ''}`}
      />
            </div>
        {openSections[item.title] ? (
          // Add padding to the container for indentation
          <div className="pl-4"> 
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          </div>
        ) : null}
      </div>
    ))}
  </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex w-full items-center rounded-md p-2 hover:underline",
              {
                "bg-muted text-black": pathname === item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
        <span key={index} className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
            {item.title}
        </span>
        )
      )}
    </div>
  ) : null
}