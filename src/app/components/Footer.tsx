import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-10/12 rounded-md mx-auto h-full p-16 shadow-xl">
      <Link href="/"><h1 className="text-3xl font-bold text-primary mb-4">SCWS</h1></Link>
      <div className="grid grid-cols-1 w-1/4 gap-8 lg:grid-cols-2">

        <ul className="flex flex-col gap-1">
          <Link href="/">Carrers</Link>
          <Link href="/">Contribution</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms and Condition</Link>
        </ul>

        <ul className="flex flex-col gap-1">
          <Link href="/">Carrers</Link>
          <Link href="/">Contribution</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms and Condition</Link>
        </ul>
      </div>

    </footer>
  )
}
