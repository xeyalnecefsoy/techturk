export default function ContactPage() {
  return (
    <main className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Əlaqə</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">Fikir, təklif və əməkdaşlıq üçün aşağıdakı formadan istifadə edin.</p>

      <form className="mt-6 max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Ad</label>
          <input className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">E-poçt</label>
          <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Mesaj</label>
          <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" required />
        </div>
        <button className="btn-primary" type="submit">Göndər</button>
      </form>
    </main>
  )
}
