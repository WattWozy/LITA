// app/servicios/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site, servicios } from "../site";

export const metadata: Metadata = {
  title: `Servicios · ${site.name}`,
  description: "Qué hacemos, para quién y cómo medimos el resultado: software a medida e IA para negocios locales.",
};

export default function ServiciosPage() {
  return (
    <>
      <header className="nav">
        <Link href="/" className="brand">
          {site.name}
        </Link>
        <nav>
          <Link href="/servicios" aria-current="page">
            Servicios
          </Link>
          <Link href="/#proceso">Proceso</Link>
          <Link href="/historias">Historias</Link>
          <Link href="/#contacto" className="btn btn-small">
            Hablemos
          </Link>
        </nav>
      </header>

      <main>
        <section className="section">
          <p className="eyebrow">Servicios</p>
          <h1>Soluciones que se pagan solas.</h1>
          <p className="lead" style={{ marginTop: "1.25rem" }}>
            Cada servicio parte de un problema concreto de tu negocio y de una métrica para saber si ha funcionado.
          </p>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="stories-list">
            {servicios.map((item) => (
              <article key={item.slug} id={item.slug} className="story-card">
                <header className="story-header">
                  <div>
                    <span className="story-meta">{item.plazo}</span>
                    <h2>{item.nombre}</h2>
                  </div>
                  {/* <div className="story-tags">
                    {item.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </header>

                <h3 className="story-headline">{item.headline}</h3>

                <div className="two-col" style={{ marginTop: "1.5rem" }}>
                  <div className="panel">
                    <h4>El problema</h4>
                    <p>{item.problema}</p>
                    <h4 style={{ marginTop: "1.25rem" }}>Qué incluye</h4>
                    <ul>
                      {item.incluye.map((x, idx) => (
                        <li key={idx}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="panel">
                    <h4>Cómo medimos el resultado</h4>
                    <ul>
                      {item.metricas.map((m, idx) => (
                        <li key={idx}>{m}</li>
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
            <h2>¿No sabes por dónde empezar?</h2>
            <p className="lead">
              Cuéntanos cómo trabajas hoy y te diremos qué servicio tiene más sentido y cuánto tardaría en compensar.
            </p>
            <div className="actions">
              <Link href="/#presupuesto" className="btn">
                Calcular presupuesto
              </Link>
              <Link href="/#contacto" className="link">
                Hablar con nosotros
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
