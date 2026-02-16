export type CaseStudy = {
  titulo: string;
  slug: string;
  contexto: string;
  problema: string;
  restricciones: string;
  solucion: string;
  entregables: string[];
  impacto: string;
  assets_requeridos: string[];
  lecciones: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    titulo: 'Landing de captación B2B para SaaS legal',
    slug: 'landing-captacion-b2b-saas-legal',
    contexto:
      'Startup legaltech con tráfico orgánico estable, pero baja conversión de leads calificados.',
    problema:
      'La propuesta de valor estaba dispersa y el formulario no comunicaba confianza suficiente.',
    restricciones:
      'Sin rediseño completo de marca y con equipo interno limitado para producción de contenido.',
    solucion:
      'Se diseñó una arquitectura de mensajes por niveles, con secciones de objeciones, prueba social y CTA persistente.',
    entregables: [
      'Copy estratégico por bloque',
      'Diseño UI en Figma',
      'Implementación en Next.js + analítica de eventos',
      'Plan de test A/B inicial'
    ],
    impacto: 'PROXY: mejora percibida en claridad de oferta y calidad de lead.',
    assets_requeridos: [
      'Logo y lineamientos visuales básicos',
      'Testimonios de clientes',
      'Listado de objeciones comerciales frecuentes'
    ],
    lecciones: [
      'Reducir fricción en formularios impacta más que agregar campos de segmentación.',
      'La sección de garantías acelera decisiones en tickets medios-altos.'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Plausible']
  },
  {
    titulo: 'Optimización de onboarding para plataforma educativa',
    slug: 'optimizacion-onboarding-plataforma-educativa',
    contexto:
      'Producto edtech con alto registro inicial y baja activación en las primeras 48 horas.',
    problema:
      'Usuarios nuevos no entendían el siguiente paso tras crear la cuenta.',
    restricciones:
      'Roadmap de producto cerrado y sin capacidad para cambios profundos de backend.',
    solucion:
      'Se rediseñó el flujo inicial con foco en una sola acción de valor por pantalla y microcopys de guía.',
    entregables: [
      'Mapa de fricción del flujo actual',
      'Nuevo flujo UX de onboarding',
      'Componentes reutilizables para pasos',
      'Métricas proxy de activación'
    ],
    impacto: 'PROXY: mayor finalización del flujo y menor abandono en primer uso.',
    assets_requeridos: [
      'Acceso a analytics',
      'Grabaciones de sesión',
      'Listado de features prioritarias'
    ],
    lecciones: [
      'Un único CTA principal por pantalla mejora la toma de decisión.',
      'Las ayudas contextuales reducen tickets de soporte en etapas tempranas.'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Hotjar']
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
