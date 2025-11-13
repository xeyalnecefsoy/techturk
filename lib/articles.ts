export type Article = {
  id: string
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  date: string
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'ai-multimodal-rekord',
    title: 'AI tədqiqatında yeni rekord: multimodal modellər zirvədə',
    category: 'Süni İntellekt',
    excerpt: 'Yeni nəsil multimodal modellər səs, mətn və şəkil arasında əlaqəni daha effektiv qurur.',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1200&auto=format&fit=crop',
    date: '2025-11-10',
  },
  {
    id: '2',
    slug: '5g-6g-gelecek',
    title: '5G və 6G: Mobil şəbəkələrin gələcəyi necə formalaşır?',
    category: 'Mobil',
    excerpt: 'Operatorlar infrastruktur yatırımlarını artırır, gecikmə isə rekord səviyyədə azalır.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    date: '2025-11-08',
  },
  {
    id: '3',
    slug: 'kibertehlukesizlik-startaplari',
    title: 'Kibertəhlükəsizlik startapları yeni maliyyə raundları bağlayır',
    category: 'Kibertəhlükəsizlik',
    excerpt: 'Zero-trust yanaşması və SASE həllərinə tələbat sürətlə artır.',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop',
    date: '2025-11-06',
  },
  {
    id: '4',
    slug: 'finops-bulud-xercleri',
    title: 'Bulud xərclərinin optimallaşdırılması: FinOps yanaşması',
    category: 'Bulud',
    excerpt: 'Şirkətlər resurs idarəçiliyini avtomatlaşdırmaq üçün yeni alətlər tətbiq edir.',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop',
    date: '2025-11-02',
  },
]

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
