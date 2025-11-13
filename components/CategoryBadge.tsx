import { getCategoryIcon } from '@/lib/categories'

export default function CategoryBadge({ name }: { name: string }) {
  const Icon = getCategoryIcon(name)
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-sky-300">
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {name}
    </span>
  )
}
