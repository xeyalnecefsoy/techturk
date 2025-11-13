import ArticleCard from '@/components/ArticleCard'
import CategoryBadge from '@/components/CategoryBadge'
import NewsFilters from '@/components/NewsFilters'
import { articles as all } from '@/lib/articles'

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ category?: string; q?: string }> }) {
  const sp = await searchParams
  const activeCategory = sp?.category
  const q = (sp?.q || '').toLowerCase()
  let news = activeCategory ? all.filter(a => a.category === activeCategory) : all
  if (q) {
    news = news.filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
  }

  return (
    <main className="container-responsive py-10">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">Xəbərlər</h1>
        {activeCategory ? <CategoryBadge name={activeCategory} /> : null}
      </div>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {activeCategory ? `${activeCategory} kateqoriyasına aid məqalələr` : 'Son texnologiya xəbərləri və yeniliklər.'}
      </p>

      <div className="mt-6">
        <NewsFilters />
      </div>

      {news.length === 0 ? (
        <div className="mt-10 text-slate-500 dark:text-slate-400">Nəticə tapılmadı.</div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </main>
  )
}
