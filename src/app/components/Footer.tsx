import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full rounded-md mx-auto h-full p-8 shadow-2xl bg-white">
      <div className="w-10/12 mx-auto">
        <Link href="/"><h1 className="text-3xl font-bold text-primary mb-4">SCWS</h1></Link>
        <div className="grid grid-cols-1 w-1/4 gap-8 lg:grid-cols-2">

          <div>
            <h2 className="text-xl font-bold mb-2">Site</h2>
            <ul className="flex flex-col gap-2 text-md">
              <Link className="text-sm" href="/">Contact</Link>
              <Link className="text-sm" href="/">About Us</Link>
              <Link className="text-sm" href="/">Admission</Link>
              <Link className="text-sm" href="/">Programs</Link>
              <Link className="text-sm" href="/">Career</Link>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Help</h2>
            <ul className="flex flex-col gap-2">
              <Link className="text-sm" href="/">Privacy Policy</Link>
              <Link className="text-sm" href="/">Cookie Policy</Link>
              <Link className="text-sm" href="/">Help</Link>
              <Link className="text-sm" href="/">Terms and Condition</Link>
              <Link className="text-sm" href="/">Safety Center</Link>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
