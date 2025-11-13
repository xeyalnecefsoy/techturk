import { getCategoryIcon } from '@/lib/categories'
import Link from 'next/link'

export default function CategoriesPage() {
  const categories = ['Süni İntellekt', 'Startuplar', 'Mobil', 'Kibertəhlükəsizlik', 'Bulud', 'Oyun']
  return (
    <main className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Kateqoriyalar</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Marağınıza uyğun mövzunu seçin.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const Icon = getCategoryIcon(c)
          return (
            <Link
              key={c}
              href={{ pathname: '/news', query: { category: c } }}
              className="card p-5 hover:border-sky-300/70"
            >
              <div className="flex items-center gap-3">
                {Icon ? <Icon className="h-5 w-5 text-sky-600 dark:text-sky-300" /> : null}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{c}</h3>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Bu kateqoriyada dərc olunan məqalələrə baxın.</p>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
