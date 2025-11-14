import Image from "next/image";
import { Rocket, Shield, Globe2, Users, Newspaper, Brain } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-56 sm:h-72 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Texnologiya fonu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30" />
        <div className="container-responsive relative h-full flex items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Haqqımızda
            </h1>
            <p className="mt-2 text-slate-200 max-w-2xl">
              TechTurk – Azərbaycan auditoriyası üçün texnologiya xəbərləri və
              təhlillər.
            </p>
          </div>
        </div>
      </section>

      <main className="container-responsive py-10">
        {/* Intro */}
        <p className="text-slate-700 dark:text-slate-300 max-w-3xl">
          Məqsədimiz ən vacib texnoloji yenilikləri aydın, qərəzsiz və yerli
          kontekstə uyğun dildə çatdırmaqdır. Biz AI, startaplar,
          kibertəhlükəsizlik, mobil və bulud texnologiyaları üzrə gündəmi
          izləyir, oxucuya qısa və anlaşılan formatda təqdim edirik.
        </p>

        {/* Values */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-5">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-sky-600 dark:text-sky-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Dəqiqlik və etibarlılıq
              </h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Məlumatları dəqiqliklə yoxlayırıq və mənbələri göstəririk.
            </p>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-3">
              <Rocket className="h-5 w-5 text-sky-600 dark:text-sky-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Sürət və aktuallıq
              </h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Ən son yenilikləri vaxtında çatdırırıq.
            </p>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-sky-600 dark:text-sky-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Qlobal baxış
              </h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Beynəlxalq trendləri yerli kontekstə uyğun təqdim edirik.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Newspaper className="h-5 w-5 text-sky-600 dark:text-sky-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Məzmun
              </h3>
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
              Xəbərlər, şərhlər, bələdçilər və müsahibələr.
            </p>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-sky-600 dark:text-sky-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                İcma
              </h3>
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
              Oxucularımızla qarşılıqlı əlaqə və geri bildirimlər.
            </p>
          </div>
          <div className="card overflow-hidden">
            <div className="relative h-40 w-full">
              <Image
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <Brain className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Fokus
                </h3>
              </div>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                Süni intellekt və innovasiya istiqamətləri.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
