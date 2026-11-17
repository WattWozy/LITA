import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Aquí puedes añadir tus rutas estáticas principales
  const baseUrl = 'https://litar.es'

  const routes = [
    '',
    // Añade aquí tus otras rutas públicas, ej: '/servicios', '/contacto', etc.
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return [...routes]
}