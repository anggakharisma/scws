"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({ name, href }: { name: string, href: string }) => {
  const pathname = usePathname()

  return <li
    className={clsx(
      {
        'border-primary border-b-2': href === pathname
      },
      'text-sm font-medium tracking-wide uppercase text-stone-700 hover:cursor-pointer hover:text-primary pb-1'
    )}
  ><Link href={href}>{name}</Link></li>
}

export default LinkItem;
