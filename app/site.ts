// Edita aquí los datos de tu empresa.
export const site = {
  name: "LITA",
  email: "hola@lita.es",
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
  stack: string[];
}

// Pega este array en app/site.ts (o importa desde aquí).
// `horas` es el mínimo para empezar; el precio «desde» se calcula con TARIFA (app/precios.ts).
// Todas las horas son estimaciones de partida: ajústalas a tu experiencia real.
export const servicios = [
  // — Los cuatro que conviene destacar primero —
  {
    slug: "calculadora-presupuestos",
    nombre: "Calculadora de presupuestos",
    plazo: "4-6 semanas",
    horas: 30,
    headline: "Presupuestos desglosados en minutos, no en horas.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL"],
    problema: "Cada presupuesto se hace a mano sobre hojas de cálculo, con riesgo de errores y respuestas lentas.",
    incluye: ["Importación de tu catálogo y tarifas", "Cálculo automático con desglose", "Presupuesto en PDF para el cliente"],
    metricas: ["Minutos por presupuesto antes y después", "Presupuestos enviados por semana", "Porcentaje de presupuestos aceptados"],
  },
  {
    slug: "asistente-ia-ventas",
    nombre: "Asistente con IA para ventas y atención",
    plazo: "4-6 semanas",
    horas: 40,
    headline: "Atiende a tus clientes a cualquier hora, con tu información.",
    stack: ["Spring Boot", "RAG", "PostgreSQL"],
    problema: "Las mismas preguntas llegan una y otra vez, y las consultas fuera de horario se pierden.",
    incluye: ["Widget integrable en tu web", "Respuestas basadas en tus políticas y catálogo", "Consulta de pedidos y stock", "Historial de conversaciones"],
    metricas: ["Consultas resueltas sin intervención humana", "Conversaciones que acaban en compra", "Tiempo medio de respuesta"],
  },
  {
    slug: "extraccion-documentos",
    nombre: "Extracción de datos de documentos",
    plazo: "3-5 semanas",
    horas: 30,
    headline: "Facturas y albaranes que se registran solos.",
    stack: ["IA documental", "Spring Boot", "PostgreSQL"],
    problema: "Alguien teclea a mano datos de facturas, albaranes y pedidos en PDF o foto, con errores y mucho tiempo perdido.",
    incluye: ["Lectura de PDF e imágenes", "Validación y revisión de casos dudosos", "Volcado a tu sistema o a Excel"],
    metricas: ["Documentos procesados por hora", "Porcentaje de errores antes y después", "Horas de tecleo ahorradas al mes"],
  },
  {
    slug: "integraciones",
    nombre: "Integración entre sistemas",
    plazo: "2-4 semanas",
    horas: 16,
    headline: "Que tus datos viajen solos entre tus herramientas.",
    stack: ["Spring Boot", "APIs REST", "Docker"],
    problema: "Facturación, tienda, ERP y hojas de cálculo no se hablan entre sí, y los datos se copian a mano.",
    incluye: ["Análisis de tus sistemas actuales", "Conectores con control de errores", "Registro de lo sincronizado"],
    metricas: ["Tareas de copia manual eliminadas", "Errores de datos por mes", "Retraso entre un cambio y su reflejo en todos los sistemas"],
  },

  // — IA aplicada al día a día —
  {
    slug: "asistente-interno",
    nombre: "Asistente sobre tus documentos",
    plazo: "3-5 semanas",
    horas: 32,
    headline: "Pregunta a tus manuales, contratos y tarifas como si hablaras con un compañero.",
    stack: ["RAG", "Spring Boot", "Base de datos vectorial"],
    problema: "La información está repartida en carpetas y PDF, y encontrar una respuesta lleva más tiempo del que debería.",
    incluye: ["Ingesta de tus documentos", "Búsqueda conversacional con fuentes citadas", "Control de quién ve qué"],
    metricas: ["Tiempo para encontrar una respuesta", "Consultas resueltas sin preguntar a un compañero", "Uso semanal por el equipo"],
  },
  {
    slug: "atencion-whatsapp",
    nombre: "Atención por WhatsApp con IA",
    plazo: "3-5 semanas",
    horas: 24,
    headline: "Responde donde ya te escriben tus clientes.",
    stack: ["WhatsApp Business API", "Spring Boot", "LLM"],
    problema: "Los clientes escriben por WhatsApp a cualquier hora y las respuestas dependen de que alguien esté mirando el móvil.",
    incluye: ["Conexión con WhatsApp Business", "Respuestas con tu información", "Traspaso a una persona cuando hace falta"],
    metricas: ["Tiempo medio de primera respuesta", "Conversaciones atendidas fuera de horario", "Consultas que acaban en venta"],
  },
  {
    slug: "clasificacion-correos",
    nombre: "Clasificación y respuesta de correos",
    plazo: "3-4 semanas",
    horas: 24,
    headline: "Cada correo, en su sitio y con borrador de respuesta.",
    stack: ["LLM", "Spring Boot", "Integración de correo"],
    problema: "La bandeja de entrada mezcla pedidos, incidencias y presupuestos, y lo urgente se pierde entre lo demás.",
    incluye: ["Clasificación por tipo y urgencia", "Borradores de respuesta para revisar", "Reenvío automático a la persona adecuada"],
    metricas: ["Tiempo de respuesta por tipo de correo", "Correos urgentes atendidos a tiempo", "Horas semanales dedicadas al correo"],
  },
  {
    slug: "informes-lenguaje-natural",
    nombre: "Informes en lenguaje natural",
    plazo: "4-6 semanas",
    horas: 30,
    headline: "Pregunta a tus datos y obtén la respuesta al momento.",
    stack: ["LLM", "Spring Boot", "PostgreSQL"],
    problema: "Sacar un dato de ventas o stock exige pedir un informe o abrir varias hojas de cálculo.",
    incluye: ["Conexión segura con tus datos", "Preguntas en lenguaje natural", "Gráficos y tablas exportables"],
    metricas: ["Tiempo para obtener un dato", "Informes manuales eliminados", "Decisiones tomadas con datos actualizados"],
  },

  // — Ingeniería de software —
  {
    slug: "excel-a-aplicacion",
    nombre: "De Excel a aplicación",
    plazo: "6-10 semanas",
    horas: 60,
    headline: "Tu negocio en una aplicación, no en una hoja de cálculo frágil.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL"],
    problema: "Procesos críticos viven en hojas de cálculo que solo entiende una persona y que se rompen con cada cambio.",
    incluye: ["Análisis y migración de tus datos", "Usuarios, permisos e histórico de cambios", "Informes y exportación a Excel"],
    metricas: ["Errores por duplicados o fórmulas rotas", "Tiempo de las tareas habituales", "Personas que pueden trabajar a la vez"],
  },
  {
    slug: "portales-apps-internas",
    nombre: "Portales de cliente y apps internas",
    plazo: "8-12 semanas",
    horas: 80,
    headline: "Seguimiento, partes de trabajo e inventario en un solo lugar.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL"],
    problema: "Los clientes llaman para saber el estado de su pedido, y el equipo apunta partes e inventario en papel o mensajes.",
    incluye: ["Acceso para clientes y equipo", "Seguimiento de pedidos o reservas", "Avisos automáticos por email"],
    metricas: ["Llamadas de seguimiento evitadas", "Tiempo de gestión por pedido", "Satisfacción de los clientes"],
  },
  {
    slug: "tienda-online-pagos",
    nombre: "Tienda online y pasarelas de pago",
    plazo: "6-10 semanas",
    horas: 70,
    headline: "Vende online con pagos seguros y tu catálogo siempre actualizado.",
    stack: ["Next.js", "Spring Boot", "Pasarela de pago"],
    problema: "Vender por internet exige integrar catálogo, pagos y pedidos sin que se descuadren stock ni cobros.",
    incluye: ["Catálogo sincronizado", "Pago seguro", "Gestión de pedidos y stock"],
    metricas: ["Ventas online al mes", "Porcentaje de carritos completados", "Pedidos gestionados sin intervención manual"],
  },
  {
    slug: "facturacion-electronica",
    nombre: "Adaptación a facturación electrónica",
    plazo: "2-4 semanas",
    horas: 20,
    headline: "Tu facturación al día con la normativa.",
    stack: ["Spring Boot", "Integración con tu software", "APIs"],
    problema: "La normativa de facturación electrónica obliga a adaptar el software, y no todos los sistemas están preparados.",
    incluye: ["Revisión de tu sistema actual", "Adaptación a los requisitos vigentes", "Pruebas y documentación"],
    metricas: ["Facturas generadas conforme a la normativa", "Rechazos o errores de formato", "Tiempo de emisión de cada factura"],
  },
  {
    slug: "modernizacion-software",
    nombre: "Modernización de software antiguo",
    plazo: "8-16 semanas",
    horas: 80,
    headline: "Del programa que nadie se atreve a tocar a uno mantenible.",
    stack: ["Spring Boot", "Pruebas automáticas", "Docker"],
    problema: "Un software antiguo funciona, pero cada cambio es arriesgado y cada vez cuesta más mantenerlo.",
    incluye: ["Diagnóstico y plan por fases", "Migración sin perder datos", "Pruebas automáticas y documentación"],
    metricas: ["Tiempo para añadir una mejora", "Incidencias por mes", "Coste mensual de mantenimiento"],
  },

  // — Servicios técnicos recurrentes —
  {
    slug: "auditoria-tecnica",
    nombre: "Auditoría técnica",
    plazo: "1-2 semanas",
    horas: 16,
    headline: "Una radiografía honesta de tu software, con un plan para mejorarlo.",
    stack: ["Análisis de arquitectura", "Calidad de código", "Seguridad básica"],
    problema: "Ya tienes software, pero no sabes cuán sólido es ni qué te costará mantenerlo.",
    incluye: ["Revisión de arquitectura y código", "Informe con riesgos priorizados", "Plan de mejora con estimación"],
    metricas: ["Riesgos críticos identificados", "Deuda técnica estimada en horas", "Acciones completadas tras el informe"],
  },
  {
    slug: "devops-gestionado",
    nombre: "DevOps gestionado",
    plazo: "Mensual",
    horas: 24,
    headline: "Despliegues automáticos y copias de seguridad que funcionan.",
    stack: ["CI/CD", "Docker", "Monitorización"],
    problema: "Publicar cambios es manual y arriesgado, y nadie sabe si las copias de seguridad se restauran de verdad.",
    incluye: ["Pipeline de despliegue automático", "Copias de seguridad probadas", "Monitorización y alertas"],
    metricas: ["Tiempo para publicar un cambio", "Tiempo de caída al mes", "Tiempo de recuperación ante un fallo"],
  },
  {
    slug: "formacion-ia",
    nombre: "Formación práctica en IA",
    plazo: "1-2 jornadas",
    horas: 8,
    headline: "Tu equipo usando la IA con casos de su propio trabajo.",
    stack: ["Talleres presenciales", "Casos reales", "Guía de buenas prácticas"],
    problema: "El equipo oye hablar de IA pero no sabe por dónde empezar ni qué datos puede compartir con seguridad.",
    incluye: ["Taller con ejemplos de tu negocio", "Guía de uso seguro", "Plantillas de instrucciones listas para usar"],
    metricas: ["Personas que usan la IA cada semana", "Horas ahorradas en tareas habituales", "Casos de uso adoptados"],
  },
]


export const historias: Historia[] = [
  {
    slug: "cercados-orsal",
    client: "Cercados Orsal",
    sector: "Fabricación metálica y cerramientos · Navarra",
    year: "2026",
    headline: "Catálogo técnico digital y presupuestos a medida en tiempo real",
    context:
      "La gestión de presupuestos para cerramientos metálicos requería cálculos manuales repetitivos según metros lineales, alturas, acabados y accesorios, ralentizando la respuesta comercial.",
    solution:
      "Desarrollamos una plataforma web rápida con catálogo técnico estructurado y una calculadora interactiva de precios que permite configurar instalaciones completas al instante.",
    results: [
      "Reducción drástica del tiempo de elaboración de presupuestos comerciales",
      "Catálogo técnico accesible y claro para clientes particulares e industriales",
      "Arquitectura ligera y rápida optimizada para consulta desde obra o móvil",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
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
  },
];
