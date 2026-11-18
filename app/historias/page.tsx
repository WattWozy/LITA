// app/historias/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site, historias } from "../site";

export const metadata: Metadata = {
  title: `Historias · ${site.name}`,
  description: "Implementaciones reales y casos de desarrollo y sistemas con empresas.",
};

export default function HistoriasPage() {
  return (
    <>
      <main>
        <section className="section">
          <p className="eyebrow">Casos reales</p>
          <h1>Historias de sistemas que funcionan.</h1>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Proyectos reales construidos junto a empresas industriales y negocios locales para eliminar trabajo manual, ordenar datos y ganar velocidad.
          </p>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="stories-list">
            {historias.map((item) => (
              <article key={item.slug} id={item.slug} className="story-card">
                <header className="story-header">
                  <div>
                    <span className="story-meta">
                      {item.sector} · {item.year}
                    </span>
                    <h2>{item.client}</h2>
                  </div>
                </header>

                <h3 className="story-headline">{item.headline}</h3>

                {/* Renderizado condicional basado en si el objeto tiene vídeo */}
                {item.video && (
                  <div style={{ marginTop: "1.5rem", borderRadius: "8px", overflow: "hidden", background: "#111" }}>
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                )}

                <div className="two-col" style={{ marginTop: "1.5rem" }}>
                  <div className="panel">
                    <h4>El reto</h4>
                    <p>{item.context}</p>
                    <h4 style={{ marginTop: "1.25rem" }}>La solución</h4>
                    <p>{item.solution}</p>
                  </div>

                  <div className="panel">
                    <h4>Impacto y resultados</h4>
                    <ul>
                      {item.results.map((res, idx) => (
                        <li key={idx}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section band">
          <div className="contact">
            <h2>¿Tienes un proceso que necesita orden o software a medida?</h2>
            <p className="lead">
              Cuéntanos qué frena tu operativa diaria y te diremos con claridad cómo resolverlo.
            </p>
            <div className="actions">
              <Link href="/#contacto" className="btn">
                Iniciar conversación
              </Link>
              <Link href="/" className="link">
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}