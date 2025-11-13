"use client"
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Newspaper, Grid, Info, Mail } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800">
      <nav className="container-responsive flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-sky-100 grid place-items-center shadow-sm dark:bg-slate-800">
            <span className="text-2xl font-black text-sky-600 dark:text-sky-300">T</span>
          </div>
          <Link href="/" className="text-xl font-extrabold tracking-tight dark:text-white">TechTurk</Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-200"
          onClick={() => setOpen(!open)}
          aria-label="Menyu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="/news" className={`inline-flex items-center gap-2 hover:text-sky-700 ${isActive('/news') ? 'text-sky-700 dark:text-sky-300' : ''}`}><Newspaper className="h-4 w-4"/>Xəbərlər</Link>
          </li>
          <li>
            <Link href="/categories" className={`inline-flex items-center gap-2 hover:text-sky-700 ${isActive('/categories') ? 'text-sky-700 dark:text-sky-300' : ''}`}><Grid className="h-4 w-4"/>Kateqoriyalar</Link>
          </li>
          <li>
            <Link href="/about" className={`inline-flex items-center gap-2 hover:text-sky-700 ${isActive('/about') ? 'text-sky-700 dark:text-sky-300' : ''}`}><Info className="h-4 w-4"/>Haqqımızda</Link>
          </li>
          <li>
            <Link href="/contact" className={`btn-outline inline-flex items-center gap-2 ${isActive('/contact') ? 'ring-2 ring-sky-300 dark:ring-sky-700' : ''}`}><Mail className="h-4 w-4"/>Əlaqə</Link>
          </li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
          <ul className="container-responsive py-3 space-y-2 text-sm">
            <li><Link href="/news" className="block py-2" onClick={() => setOpen(false)}>Xəbərlər</Link></li>
            <li><Link href="/categories" className="block py-2" onClick={() => setOpen(false)}>Kateqoriyalar</Link></li>
            <li><Link href="/about" className="block py-2" onClick={() => setOpen(false)}>Haqqımızda</Link></li>
            <li><Link href="/contact" className="block py-2" onClick={() => setOpen(false)}>Əlaqə</Link></li>
            <li><ThemeToggle /></li>
          </ul>
        </div>
      )}
    </header>
  )
}
