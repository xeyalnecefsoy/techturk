import Image from 'next/image'
import Link from 'next/link'
import CategoryBadge from '@/components/CategoryBadge'
import type { Route } from 'next'
import type { Article } from '@/lib/articles'

export default function ArticleCard({ article }: { article: Article }) {
  const href = (`/news/${article.slug}`) as Route
  return (
    <article className="card overflow-hidden dark:bg-slate-900 dark:border-slate-800">
      <div className="relative h-44 w-full">
        <Image src={article.image} alt={article.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <CategoryBadge name={article.category} />
        <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
          <Link href={href}>{article.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{new Date(article.date).toLocaleDateString('az-AZ')}</span>
          <Link href={href} className="text-sky-700 hover:underline dark:text-sky-300">Daha çox →</Link>
        </div>
      </div>
    </article>
  )
}
