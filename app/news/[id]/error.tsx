"use client"

export default function ErrorArticle({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="container-responsive py-10">
      <h1 className="text-2xl font-bold">Bir xəta baş verdi</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{error.message || 'Zəhmət olmasa yenidən cəhd edin.'}</p>
      <button className="btn-primary mt-4" onClick={reset}>Yenilə</button>
    </main>
  )
}
