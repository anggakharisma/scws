"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({ name, href }: { name: string, href: string }) => {
  const pathname = usePathname()

  return <Link href={href}
    className={clsx(
      {
        'border-primary border-b-2': href === pathname
      },
      'text-sm font-medium tracking-wide uppercase text-stone-700 hover:cursor-pointer hover:text-primary pb-1'
    )}
  >{name}</Link>
}

export default LinkItem;
