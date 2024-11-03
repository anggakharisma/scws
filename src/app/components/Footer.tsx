import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full rounded-md mx-auto h-full p-16 shadow-2xl">
      <div className="w-10/12 mx-auto">
        <Link href="/"><h1 className="text-3xl font-bold text-primary mb-4">SCWS</h1></Link>
        <div className="grid grid-cols-1 w-1/4 gap-8 lg:grid-cols-2">

          <div>
            <h2 className="text-xl font-bold mb-2">Site</h2>
            <ul className="flex flex-col gap-2">
              <Link href="/">Contact</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Admission</Link>
              <Link href="/">Programs</Link>
              <Link href="/">Career</Link>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Help</h2>
            <ul className="flex flex-col gap-2">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Cookie Policy</Link>
              <Link href="/">Help</Link>
              <Link href="/">Terms and Condition</Link>
              <Link href="/">Safety Center</Link>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
