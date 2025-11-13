import Hero from '@/components/Hero'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/lib/articles'
import { getCategoryIcon } from '@/lib/categories'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Hero />

      <main id="news" className="container-responsive py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">Son Xəbərlər</h2>
          <a href="/news" className="text-sm text-sky-700 hover:underline">Hamısına bax</a>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>

        <section id="categories" className="mt-16">
          <h3 className="text-xl font-semibold">Kateqoriyalar</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Süni İntellekt', 'Startuplar', 'Mobil', 'Kibertəhlükəsizlik', 'Bulud', 'Oyun'].map((c) => {
              const Icon = getCategoryIcon(c)
              return (
                <Link
                  key={c}
                  href={{ pathname: '/news', query: { category: c } }}
                  className="card p-5 hover:border-sky-300/70"
                >
                  <div className="flex items-center gap-3">
                    {Icon ? <Icon className="h-5 w-5 text-sky-600 dark:text-sky-300" /> : null}
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">{c}</h4>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Bu kateqoriyadakı son xəbərlərə keçid.</p>
                </Link>
              )
            })}
          </div>
        </section>

        <section id="newsletter" className="mt-16 card p-6">
          <h3 className="text-xl font-semibold">Bülletenə qoşul</h3>
          <p className="mt-2 text-slate-600 text-sm">Həftəlik ən önəmli xəbərləri e-poçtunuza göndərək.</p>
          <form className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="E-poçt ünvanı"
              className="flex-1 rounded-lg bg-white border border-slate-300 px-4 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button className="btn-primary" type="submit">Abunə ol</button>
          </form>
        </section>
      </main>
    </>
  )
}
