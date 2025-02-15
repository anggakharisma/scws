"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const LinkItem = ({ name, href }: { name: string, href: string }) => {
  const pathname = usePathname()

  return <li
    className={clsx(
      {
        'border-primary border-b-2': href === pathname
      },
      'text-md text-black hover:cursor-pointer hover:text-primary pb-1'
    )}
  ><Link href={href}>{name}</Link></li>
}

export default function Navbar() {
  return (
    <header className="w-full py-4 flex shadow-md sticky">
      <div className="w-full md:w-10/12 mx-auto flex items-center justify-between gap-8 py-0 px-8 lg:px-16">
        <Link href="/"><h1 className="text-3xl font-bold text-primary">SCWS</h1></Link>
        <ul className="w-10/12 self-center items-center justify-self-center lg:flex p-4 px-8 hidden gap-16">
          <LinkItem name="Home" href="/" />
          <LinkItem name="Contact" href="/contact" />
          <LinkItem name="About Us" href="/about-us" />
          <LinkItem name="Admission" href="/admission" />
          <LinkItem name="Programs" href="/programs" />
          <LinkItem name="Account" href="/login" />
        </ul>
        <div></div>
      </div>
    </header>
  )
}
