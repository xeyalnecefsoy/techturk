export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
      <div className="container-responsive py-8 text-sm text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} TechTurk. Bütün hüquqlar qorunur.</p>
        <p>
          Hazırlayan: <span className="text-sky-700 dark:text-sky-300 font-semibold">TechTurk</span>
        </p>
      </div>
    </footer>
  )
}
