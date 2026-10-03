const features = [
  {
    title: "تصميم احترافي",
    description: "واجهات جذابة ومتسقة تعكس هوية علامتك التجارية وتناسب كل الأجهزة.",
    emoji: "🎨",
  },
  {
    title: "أداء فائق",
    description: "تجربة سريعة ومهيأة للتحميل السريع وتحسين محركات البحث.",
    emoji: "⚡",
  },
  {
    title: "تحليلات ذكية",
    description: "مؤشرات قوية تساعدك على اتخاذ قرارات مبنية على البيانات في الوقت المناسب.",
    emoji: "📊",
  },
  {
    title: "قابلية الوصول",
    description: "محتوى يلتزم بمعايير الوصول، مع تجربة مريحة للمستخدمين كافة.",
    emoji: "♿",
  },
  {
    title: "إدارة المحتوى",
    description: "نظام مرن يسمح لك بإدارة الصفحات والمنتجات والمحتوى، بشكل سهل وفعال.",
    emoji: "🧩",
  },
  {
    title: "دعم مستمر",
    description: "فريق متخصص يرافقك في التنفيذ، التشغيل، والتحديثات اللاحقة.",
    emoji: "🤝",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="section-shell py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">Why ALDLIMI</p>
        <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">مزايا موقعك من أول خطوة إلى النتيجة</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-slate-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl">{feature.emoji}</div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
