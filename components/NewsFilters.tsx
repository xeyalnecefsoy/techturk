"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { categories } from '@/lib/categories'

export default function NewsFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const sp = useSearchParams()

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(sp?.toString())
      if (value && value.length > 0) params.set(key, value)
      else params.delete(key)
      const qs = params.toString()
      const url = qs ? `${pathname}?${qs}` : pathname
      router.replace(url as any)
    },
    [router, pathname, sp]
  )

  const q = sp?.get('q') ?? ''
  const category = sp?.get('category') ?? ''

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <input
        type="search"
        placeholder="Axtarış..."
        defaultValue={q}
        onChange={(e) => setParam('q', e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
      />
      <select
        defaultValue={category}
        onChange={(e) => setParam('category', e.target.value || null)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      >
        <option value="">Bütün kateqoriyalar</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button
        onClick={() => { setParam('q', null); setParam('category', null); }}
        className="btn-outline text-sm"
        type="button"
      >
        Təmizlə
      </button>
    </div>
  )
}
