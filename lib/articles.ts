export type Article = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "ai-multimodal-rekord",
    title: "AI tədqiqatında yeni rekord: multimodal modellər zirvədə",
    category: "Süni İntellekt",
    excerpt:
      "Yeni nəsil multimodal modellər səs, mətn və şəkil arasında əlaqəni daha effektiv qurur.",
    image:
      "https://images.unsplash.com/photo-1716637644831-e046c73be197?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-11-10",
  },
  {
    id: "2",
    slug: "5g-6g-gelecek",
    title: "5G və 6G: Mobil şəbəkələrin gələcəyi necə formalaşır?",
    category: "Mobil",
    excerpt:
      "Operatorlar infrastruktur yatırımlarını artırır, gecikmə isə rekord səviyyədə azalır.",
    image:
      "https://images.unsplash.com/photo-1619834035779-57f2f0e0cea8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-11-08",
  },
  {
    id: "3",
    slug: "kibertehlukesizlik-startaplari",
    title: "Kibertəhlükəsizlik startapları yeni maliyyə raundları bağlayır",
    category: "Kibertəhlükəsizlik",
    excerpt: "Zero-trust yanaşması və SASE həllərinə tələbat sürətlə artır.",
    image:
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-11-06",
  },
  {
    id: "4",
    slug: "finops-bulud-xercleri",
    title: "Bulud xərclərinin optimallaşdırılması: FinOps yanaşması",
    category: "Bulud",
    excerpt:
      "Şirkətlər resurs idarəçiliyini avtomatlaşdırmaq üçün yeni alətlər tətbiq edir.",
    image:
      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-11-02",
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
