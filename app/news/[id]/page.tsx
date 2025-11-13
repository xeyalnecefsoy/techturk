import Image from "next/image";
import CategoryBadge from "@/components/CategoryBadge";
import { getArticleBySlug } from "@/lib/articles";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Tip tərifini əlavə edin
interface PageProps {
  params: Promise<{ id: string }>;
}

// generateMetadata-nı async edin və params-ı await edin
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleBySlug(id);

  if (!article) return { title: "Məqalə tapılmadı | TechTurk" };

  const title = `${article.title} | TechTurk`;
  const description = article.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: article.image }],
      type: "article",
    },
  };
}

// Page component-i async edin və params-ı await edin
export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = getArticleBySlug(id);

  if (!article) return notFound();

  return (
    <main className="container-responsive py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">
              Ana səhifə
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/news" className="hover:underline">
              Xəbərlər
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={{
                pathname: "/news",
                query: { category: article.category },
              }}
              className="hover:underline"
            >
              {article.category}
            </Link>
          </li>
          <li>/</li>
          <li className="truncate max-w-[40ch]" title={article.title}>
            {article.title}
          </li>
        </ol>
      </nav>
      <div className="max-w-3xl">
        <CategoryBadge name={article.category} />
        <h1 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {new Date(article.date).toLocaleDateString("az-AZ")}
        </p>
        <div className="mt-6 relative w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <article className="prose prose-slate dark:prose-invert mt-6 max-w-none">
          <p>
            Bu məqalə demo məqsədlidir. Burada mövzu barədə geniş izah, faktlar,
            sitatlar və şəkillər yerləşdirilə bilər. Real layihədə bu hissə CMS
            və ya API-dan gələn məzmunla əvəzlənəcək.
          </p>
          <h2>Əsas məqamlar</h2>
          <ul>
            <li>Konseptin qısa izahı və kontekst</li>
            <li>Texniki detallara baxış</li>
            <li>Gələcək perspektivlər və təsirlər</li>
          </ul>
        </article>
      </div>
    </main>
  );
}
