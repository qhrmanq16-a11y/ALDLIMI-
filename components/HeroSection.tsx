const highlights = [
  { value: "100%", label: "تصميم متجاوب" },
  { value: "24/7", label: "دعم فني" },
  { value: "10K+", label: "مستخدم نشط" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
            منصة ALDLIMI المخصصة لك
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            ابتكر حضورك الرقمي
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              بثقة واحترافية
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            نقدم لك حلول تصميم وتطوير حديثة تركز على تجربة المستخدم، الأداء العالي، وقابلية التوسع في كل مرحلة من مراحل مشروعك.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#features" className="rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400">
              اكتشف المزايا
            </a>
            <a href="#contact" className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-violet-400 hover:text-white">
              تواصل معنا
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center shadow-lg shadow-slate-950/40">
                <div className="text-2xl font-black text-white">{item.value}</div>
                <div className="mt-1 text-xs text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-pink-500/20 blur-3xl" aria-hidden="true" />

          <div className="relative rounded-[32px] border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-violet-900/10">
            <div className="rounded-[24px] border border-slate-700 bg-slate-950 p-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <p className="text-xs text-slate-400">لوحة تحكم</p>
                  <h2 className="text-xl font-bold text-white">ALDLIMI Pro</h2>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
                  Active
                </span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-violet-500/10 p-4 ring-1 ring-violet-500/20">
                  <p className="text-sm text-violet-200">إيرادات الشهر</p>
                  <p className="mt-2 text-3xl font-black text-white">12.4K</p>
                </div>
                <div className="rounded-2xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-300">معدل التحويل</p>
                  <p className="mt-2 text-3xl font-black text-white">8.9%</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-slate-300">نمو المتابعين</span>
                  <span className="text-sm font-semibold text-emerald-300">+32.3%</span>
                </div>
                <div className="flex h-28 items-end gap-2">
                  {[40, 60, 52, 75, 68, 90, 96].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-500 to-fuchsia-400"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
