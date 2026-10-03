const infoBlocks = [
  { title: "العنوان", value: "الرياض، المملكة العربية السعودية" },
  { title: "البريد الإلكتروني", value: "hello@aldlimi.com" },
  { title: "الهاتف", value: "+966 55 000 0000" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <a href="#home" className="flex items-center gap-2 text-xl font-black tracking-widest text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white">
              AL
            </span>
            ALDLIMI
          </a>
          <p className="mt-4 max-w-lg text-slate-300">
            نساعدك على بناء متجر أو منصة رقمية متكاملة بأسلوب احترافي يناسب أهدافك التجارية ويبقى فعالاً على كل الأجهزة.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          {infoBlocks.map((item) => (
            <div key={item.title}>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.title}</p>
              <p className="mt-2 text-base text-slate-200">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © 2026 ALDLIMI. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
