import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-[#090909] text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <h2 className="mb-4 text-lg font-bold tracking-[0.2em] text-stone-100">
            MIGUEL SECADES
          </h2>

          <p className="mb-6 text-sm leading-7 text-stone-400">
            Archaeological thriller author inspired by mystery,
            ancient history, secret societies, and forgotten truths.
          </p>

          <div className="flex gap-3">
            <div className="h-9 w-9 border border-stone-700"></div>
            <div className="h-9 w-9 border border-stone-700"></div>
            <div className="h-9 w-9 border border-stone-700"></div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Navigation
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/books">Books</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* BOOKS */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Books
          </h3>

          <ul className="space-y-3 text-sm">
            <li>The Ring of Solomon</li>
            <li>Upcoming Releases</li>
            <li>Reading Order</li>
            <li>Bonus Content</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Newsletter
          </h3>

          <p className="mb-4 text-sm leading-7 text-stone-400">
            Get exclusive updates, behind-the-scenes content,
            and early access to future releases.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-stone-700 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-amber-500"
            />

            <button
              className="border border-amber-500 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 transition hover:bg-amber-500 hover:text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs tracking-wide text-stone-500 md:flex-row">
          
          <p>
            © 2026 Miguel Secades. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}