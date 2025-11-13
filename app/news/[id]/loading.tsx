export default function LoadingArticle() {
  return (
    <main className="container-responsive py-10">
      <div className="animate-pulse space-y-4 max-w-3xl">
        <div className="h-5 w-40 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-8 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-64 w-full rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />
      </div>
    </main>
  )
}
