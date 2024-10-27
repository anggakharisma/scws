import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full py-4 flex shadow-md">
      <div className="w-full md:w-10/12 mx-auto flex items-center justify-between gap-8 py-0 px-8 lg:px-16">
        <Link href="/"><h1 className="text-3xl font-bold text-primary">SCWS</h1></Link>
        <ul className="w-1/2 self-center items-center justify-self-center lg:flex justify-between p-4 px-8 hidden">
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Admission</Link>
          <Link href="/">Program</Link>
        </ul>
        <div></div>
      </div>
    </header>
  )
}
