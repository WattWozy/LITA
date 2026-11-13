import Image from "next/image";
import { site } from "./site";

const servicios = [
  {
    titulo: "Ingeniería de software a medida",
    texto:
      "Aplicaciones web, integraciones y plataformas construidas para durar. Arquitectura limpia, pruebas desde el primer día y despliegues automatizados.",
    ejemplos: [
      "Aplicaciones y servicios web",
      "Integración con tus sistemas actuales",
      "Modernización de software existente",
    ],
  },
  {
    titulo: "IA que trabaja para tu negocio",
    texto:
      "Agentes, automatización de tareas repetitivas y análisis de tus propios datos. Soluciones pensadas para una pyme, no para una multinacional: sencillas de usar y con un retorno que se puede medir.",
    ejemplos: [
      "Análisis de patrones e inteligencia de negocio",
      "Generación y/o procesamiento de información no estructurada",
      "RAG-bots conectados a tu catálogo y tus políticas",
      "Automatización controladad de decisiones",
    ],
  },
];

const metodo = [
  [
    "Escuchamos",
    "Pasamos tiempo en tu negocio antes de proponer nada. Entender cómo trabajas es la mitad del proyecto.",
  ],
  [
    "Diseñamos",
    "Acordamos un alcance claro, un precio cerrado y qué significa que el proyecto salga bien.",
  ],
  [
    "Construimos",
    "Entregas cada semana. Ves avances reales, opinas y corregimos el rumbo a tiempo.",
  ],
  [
    "Acompañamos",
    "Tras el lanzamiento seguimos contigo: mantenimiento, formación y mejoras.",
  ],
];

const rigor = [
  [
    "Pruebas automáticas",
    "Cada funcionalidad nace con sus tests. Cambiar el software mañana no da miedo.",
  ],
  [
    "Arquitectura limpia",
    "El negocio en el centro, la tecnología en los bordes. Fácil de entender y de cambiar.",
  ],
  [
    "Despliegue continuo",
    "Cada cambio se valida y se publica de forma automática y reversible.",
  ],
  [
    "Código que es tuyo",
    "Repositorio, documentación y accesos a tu nombre. Sin dependencias ocultas.",
  ],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand" aria-label={site.name}>
          <Image
            src="/favicon.png"
            alt={`${site.name} - Desarrollo y Sistemas`}
            width={40}
            height={40}
            priority
            className="brand-logo"
          />
          <span className="brand-name">LITA</span>
        </a>
        <nav aria-label="Principal">
          <a href="/calculadora">Servicios</a>
          <a href="#metodo">Cómo trabajamos</a>
          <a href="#ingenieria">Ingeniería</a>
          <a href="#contacto" className="btn btn-small">
            Hablemos
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <h1>
              Tecnología con la cercanía de quien te conoce por tu
              nombre.
            </h1>
            <p className="lead">
              Ayudamos a los negocios de nuestra tierra a ganar tiempo construyendo
              cada producto con la disciplina de la mejor ingeniería de software.
            </p>
            <div className="actions">
              <a href="#contacto" className="btn">
                Cuéntanos tu proyecto
              </a>
              <a href="#servicios" className="link">
                Ver qué hacemos
              </a>
            </div>
          </div>
          <figure
            className="thread"
            aria-label="Ejemplo de conversación con un cliente"
          >
            <p className="msg them">
              Hola, ¿podemos automatizar los pedidos que ahora apuntamos a mano?
            </p>
            <p className="msg us">
              Claro. El martes pasamos por la tienda, vemos cómo lo hacéis y os
              traemos una propuesta con precio cerrado.
            </p>
            <p className="msg them">Perfecto. Aquí os esperamos.</p>
            <figcaption>Una persona de contacto. Un canal directo.</figcaption>
          </figure>
        </section>

        <section id="servicios" className="section">
          <h2>Dos formas de hacer crecer tu negocio</h2>
          <div className="two-col">
            {servicios.map((s) => (
              <article key={s.titulo} className="panel">
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
                <ul>
                  {s.ejemplos.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="metodo" className="section">
          <h2>Cómo trabajamos</h2>
          <ol className="steps">
            {metodo.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="ingenieria" className="section band">
          <h2>Rigor en cada línea de código</h2>
          <p className="lead narrow">
            La IA llama la atención; la ingeniería es lo que hace que funcione
            dentro de un año. Estos son nuestros mínimos en todos los proyectos.
          </p>
          <dl className="rigor">
            {rigor.map(([t, d]) => (
              <div key={t}>
                <dt>{t}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contacto" className="section contact">
          <h2>¿Hablamos?</h2>
          <p className="lead narrow">
            Escríbenos dos líneas sobre tu negocio y lo que te gustaría
            mejorar. Te respondemos en un día laborable.
          </p>
          <a
            className="btn"
            href={`mailto:${site.email}?subject=Quiero%20hablar%20de%20un%20proyecto`}
          >
            {site.email}
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <Image
            src="/logo.jpeg"
            alt={site.name}
            width={130}
            height={38}
            className="brand-logo"
          />
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
        </div>
        <span>{site.city}, España</span>
      </footer>
    </>
  );
}