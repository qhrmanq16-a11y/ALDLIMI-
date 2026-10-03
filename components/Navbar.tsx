const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "الميزات", href: "#features" },
  { label: "التسعير", href: "#pricing" },
  { label: "تواصل معنا", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-widest text-white" aria-label="ALDLIMI home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white shadow-lg shadow-violet-500/30">
            AL
          </span>
          <span>ALDLIMI</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-400 hover:text-white">
            تسجيل الدخول
          </button>
          <button className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400">
            ابدأ الآن
          </button>
        </div>

        <button className="rounded-full border border-slate-700 p-2 text-slate-200 md:hidden" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
}
