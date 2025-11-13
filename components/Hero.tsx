import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200 blur-3xl opacity-60 dark:bg-sky-900" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-300 blur-3xl opacity-50 dark:bg-blue-900" />

      <div className="container-responsive py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            M&uuml;asir texnologiya xəbərləri sadə və aydın dildə
          </h1>
          <p className="mt-4 text-slate-600 text-lg dark:text-slate-300">
            Azərbaycan auditoriyası üçün AI, startaplar, mobil texnologiyalar və daha çoxu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/news" className="btn-primary">Son Xəbərlər</Link>
            <Link href="/categories" className="btn-outline">Kateqoriyalar</Link>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl ring-1 ring-slate-200/60 backdrop-blur dark:ring-slate-800/60">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
            alt="Texnologiya ill&uuml;strasiyası"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent mix-blend-overlay dark:from-slate-900/30" />
        </div>
      </div>
    </section>
  )
}
