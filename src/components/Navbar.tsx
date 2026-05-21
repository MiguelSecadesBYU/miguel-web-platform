import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-[#111111]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="group">
          <span className="font-serif text-2xl font-light tracking-[0.22em] text-stone-100 transition group-hover:text-amber-400">
            MIGUEL SECADES
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/books" className="nav-link">
            Books
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        <Link
          href="/newsletter"
          className="hidden border border-amber-500/80 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-amber-400 transition hover:bg-amber-500 hover:text-black md:block"
        >
          Newsletter
        </Link>
      </nav>
    </header>
  );
}