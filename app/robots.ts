import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/private/'], // Descomenta si tienes rutas privadas que los bots no deban indexar
    },
    sitemap: 'https://litar.es/sitemap.xml',
  }
}