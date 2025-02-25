import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import LinkItem from "../(main)/login/LinkItem";


export default async function Navbar() {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()

  return (
    <header className="w-full py-4 flex shadow-md sticky bg-white">
      <div className="w-full md:w-10/12 mx-auto flex items-center justify-between gap-8 py-0 px-8 lg:px-16">
        <Link href="/"><h1 className="text-3xl font-bold text-primary">SCWS</h1></Link>
        <ul className="w-10/12 self-center items-center justify-self-center lg:flex p-4 px-8 hidden gap-12">
          <LinkItem name="Home" href="/" />
          <LinkItem name="About Us" href="/about-us" />
          <LinkItem name="Admission" href="/admission" />
          <LinkItem name="Programs" href="/programs" />
          {
            user ?
              <LinkItem name="Portals" href="/portals/dashboard" /> :
              <LinkItem name="Login" href="/login" />
          }
        </ul>
        <div></div>
      </div>
    </header>
  )
}
