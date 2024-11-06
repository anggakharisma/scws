import clsx from "clsx";
import Link from "next/link";

const LinkItem = ({ name, href }: { name: string, href: string }) => {
  return <li
  className={clsx(
    'text-sm text-black hover:cursor-pointer hover:text-primary'
  )}
  ><Link href={href}>{name}</Link></li>
}

export default function Navbar() {
  return (
    <header className="w-full py-4 flex shadow-md sticky">
      <div className="w-full md:w-10/12 mx-auto flex items-center justify-between gap-8 py-0 px-8 lg:px-16">
        <Link href="/"><h1 className="text-3xl font-bold text-primary">SCWS</h1></Link>
        <ul className="w-10/12 self-center items-center justify-self-center lg:flex p-4 px-8 hidden gap-10">
          <LinkItem name="Home" href="/" />
          <LinkItem name="Contact" href="/contact" />
          <LinkItem name="About Us" href="/about-us" />
          <LinkItem name="Admission" href="/about-us" />
          <LinkItem name="Programs" href="/about-us" />
          <LinkItem name="Teacher" href="/about-us" />
          <LinkItem name="Parent & Students" href="/about-us" />
        </ul>
        <div></div>
      </div>
    </header>
  )
}
