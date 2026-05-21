import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-[#0b0b0c]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-amber-500/60 text-amber-400">
            MS
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-stone-100">
              MIGUEL SECADES
            </p>
            <p className="text-xs tracking-[0.18em] text-amber-500/80">
              THRILLER AUTHOR
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/books" className="nav-link">Books</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        <Link
          href="/newsletter"
          className="hidden border border-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 transition hover:bg-amber-500 hover:text-black md:block"
        >
          Newsletter
        </Link>
      </nav>
    </header>
  );
}