import { Brain, Rocket, Smartphone, Shield, Cloud, Gamepad2 } from 'lucide-react'
import type { ComponentType } from 'react'

export type CategoryKey =
  | 'Süni İntellekt'
  | 'Startuplar'
  | 'Mobil'
  | 'Kibertəhlükəsizlik'
  | 'Bulud'
  | 'Oyun'

export const categoryIconMap: Record<CategoryKey, ComponentType<{ className?: string }>> = {
  'Süni İntellekt': Brain,
  'Startuplar': Rocket,
  'Mobil': Smartphone,
  'Kibertəhlükəsizlik': Shield,
  'Bulud': Cloud,
  'Oyun': Gamepad2,
}

export const categories: CategoryKey[] = [
  'Süni İntellekt',
  'Startuplar',
  'Mobil',
  'Kibertəhlükəsizlik',
  'Bulud',
  'Oyun',
]

export function getCategoryIcon(name: string): ComponentType<{ className?: string }> | null {
  return (categoryIconMap as Record<string, ComponentType<{ className?: string }>>)[name] ?? null
}
