# TechTurk – Next.js + TypeScript + Tailwind

Müasir, sadə və mobilə tam uyğun texnologiya xəbərləri saytının frontend layihəsi.

## Xüsusiyyətlər
- Next.js 15+ App Router
- TypeScript
- Tailwind CSS (mavi palitra: sky blue + navy)
- Responsiv dizayn (Azerbaycan auditoriyası üçün lokallaşdırılmış mətnlər)

## Başlama
1. Asılılıqları quraşdırın:
   ```bash
   npm install
   ```
2. İnkişaf serverini işə salın:
   ```bash
   npm run dev
   ```
3. Brauzerdə açın: http://localhost:3000

## Layihə strukturu
- `app/` – App Router, `layout.tsx`, `page.tsx`, qlobal stillər
- `components/` – UI komponentləri: Navbar, Hero, ArticleCard, Footer
- `tailwind.config.ts` – Tailwind konfiqurasiyası

## Qeydlər
- Real xəbərlər üçün `app/page.tsx` daxilindəki `articles` massivini API ilə əvəz edin.
- Rəng palitrası Tailwind-in sky və navy tonlarına söykənir.
