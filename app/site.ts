// Edita aquí los datos de tu empresa.
export const site = {
  name: "LiTAR",
  email: "hola@litar.es",
  city: "Pamplona",
  description:
    "Software a medida e inteligencia artificial para negocios locales, con ingeniería rigurosa y trato cercano.",
};

export interface Historia {
  slug: string;
  client: string;
  sector: string;
  year: string;
  headline: string;
  context: string;
  solution: string;
  results: string[];
  video: string;
}

export const servicios = [
  {
    slug: "centralizacion-sistemas",
    nombre: "Centralización de sistemas",
    plazo: "Según alcance del proyecto",
    headline: "Menos herramientas desconectadas. Más control sobre tu negocio.",
    problema:
      "La información y los procesos de la empresa están repartidos entre hojas de cálculo, correos y programas que no se comunican entre sí. Esto genera trabajo duplicado, errores y dependencia de tareas manuales.",
    incluye: [
      "Conexión de las herramientas y sistemas existentes",
      "Automatización de tareas y flujos de trabajo",
      "Centralización de información en un único entorno",
      "Desarrollo de aplicaciones internas cuando sea necesario",
    ],
    metricas: [
      "Horas de trabajo manual eliminadas",
      "Errores y duplicidades reducidos",
      "Tiempo necesario para completar tareas habituales",
    ],
  },
  {
    slug: "inteligencia-negocio",
    nombre: "Implementación de inteligencia de negocio (BI)",
    plazo: "Según alcance del proyecto",
    headline: "Convierte los datos de tu empresa en mejores decisiones.",
    problema:
      "La empresa genera información constantemente, pero esta permanece dispersa en Excel, programas de gestión y bases de datos. Obtener una visión clara del negocio requiere recopilar y preparar información manualmente.",
    incluye: [
      "Conexión e integración de fuentes de datos",
      "Automatización de la recopilación y actualización de datos",
      "Creación de estadísticas e indicadores de negocio",
      "Dashboards e informes visuales",
    ],
    metricas: [
      "Tiempo necesario para generar informes",
      "Visibilidad sobre ventas, costes y operaciones",
      "Frecuencia de actualización de indicadores",
    ],
  },
  {
    slug: "automatización-a-medida",
    nombre: "Automatización de procesos a medida",
    plazo: "Según alcance del proyecto",
    headline: "Ahórrate el tiempo de los procesos más repetitivos y aumenta la fiabilidad de tus resultados",
    problema:
      "Hay procesos repetitivos en el día a día que consumen tiempo y acaparan más de lo debido. Reserva tu claridad mental para las decisiones importantes, y minimiza el error diario con automatizaciones de datos.",
    incluye: [
      "Ingestión de datos",
      "Definición de parámetros y resultados",
      "Expresión del problema en un algoritmo/ecuación",
      "Resultado en forma de acción",
    ],
    metricas: [
      "Tiempo recortado en la toma de decisiones repetitivas",
      "Reducción en número de errores manuales",
      "Aumento en decisiones tomadas por ciclo",
    ],
  },
];



export const historias: Historia[] = [
  {
    slug: "cercados-orsal",
    client: "Cercados Orsal",
    sector: "Fabricación metálica y cerramientos · Navarra",
    year: "2026",
    headline: "Coordinando pedido, inventario, taller y montaje de forma sistemática",
    context:
      "El proceso requiere seguimiento del pedido y cálculos manuales repetitivos, ralentizando la respuesta comercial e introduciendo errores humanos en el proceso.",
    solution:
      "Desarrollamos una solución web rápida con catálogo técnico estructurado y una calculadora interactiva de precios que permite configurar instalaciones completas al instante.",
    results: [
      "Reducción drástica del tiempo total del pedido al montaje",
      "Reducción de errores humanos en trámites y cálculos",
      "Catálogo técnico accesible y claro para clientes particulares e industriales",
      "Solución optimizada para consulta desde ordenador o móvil",
    ],
    video: "/videos/orsal.mp4", // <--- Añadido aquí
  },
  /* {
    slug: "frenkit",
    client: "Frenkit",
    sector: "Automoción y componentes de freno · Navarra",
    year: "2026",
    headline: "Optimización de sistemas y flujos de datos técnicos",
    context:
      "En un entorno industrial con miles de referencias cruzadas y especificaciones técnicas estrictas, la fiabilidad y rapidez en la consulta e integración de datos es crítica.",
    solution:
      "Implementamos mejoras en la arquitectura de software e integración de sistemas para garantizar consistencia de datos, tiempos de respuesta mínimos y procesos internos sin fricción.",
    results: [
      "Mayor fiabilidad y trazabilidad en el manejo de referencias técnicas",
      "Automatización de procesos operativos propensos a error manual",
      "Base tecnológica preparada para escalar sin degradar el rendimiento",
    ],
    stack: ["Arquitectura Backend", "Integración de Sistemas", "SQL"],
    video: ""
  }, */
];
