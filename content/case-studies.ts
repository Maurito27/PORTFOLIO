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
    titulo: 'ETL de ventas con checkpoints y backfill (operación vending)',
    slug: 'etl-ventas-checkpoints-backfill',
    contexto:
      'Operación de vending con múltiples puntos de venta y fuentes heterogéneas (POS, ERP y archivos operativos), con necesidad de consolidación diaria para análisis comercial.',
    problema:
      'El pipeline de ventas fallaba de forma intermitente, generaba duplicados en reprocesos y no tenía trazabilidad clara para recuperar ventanas históricas.',
    restricciones:
      'Sin detener la operación diaria, con ventanas acotadas de procesamiento nocturno y dependencia de sistemas legados sin contratos de datos formales.',
    solucion:
      'Se implementó un flujo ETL incremental con checkpoints por partición temporal, estrategia de idempotencia por claves de negocio y mecanismo de backfill parametrizable para rehacer periodos específicos sin duplicar registros.',
    entregables: [
      'Diseño de modelo canónico de ventas',
      'Pipeline incremental con checkpoints persistentes',
      'Script de backfill por rango de fechas',
      'Runbook operativo con alertas y validaciones de calidad'
    ],
    impacto:
      'PROXY: estabilidad de carga diaria y confiabilidad de históricos. Método de cálculo: % de ejecuciones exitosas sin intervención manual por semana + diferencia absoluta entre total de ventas en fuente operativa y tabla consolidada por día.',
    assets_requeridos: [
      'Diccionario de campos por sistema origen',
      'Acceso de solo lectura a tablas/fuentes operativas',
      'Reglas de negocio para conciliación de ventas'
    ],
    lecciones: [
      'Sin idempotencia explícita, cualquier reproceso escala inconsistencias aguas abajo.',
      'Definir checkpoints por dominio de negocio simplifica soporte y auditoría.'
    ],
    stack: ['Python', 'SQL', 'Airflow', 'PostgreSQL']
  },
  {
    titulo: 'Auditoría de dashboard: conteos inconsistentes (fuente vs BI)',
    slug: 'auditoria-dashboard-conteos',
    contexto:
      'Equipo de gestión trabajaba con dashboards para decisiones semanales, pero surgían discrepancias recurrentes entre reportes del BI y los conteos observados en sistemas fuente.',
    problema:
      'Métricas con definiciones ambiguas, joins con cardinalidad no controlada y filtros temporales inconsistentes entre modelos analíticos.',
    restricciones:
      'Sin reemplazar la herramienta de BI existente y con necesidad de corregir sin interrumpir la lectura diaria de tableros.',
    solucion:
      'Se ejecutó una auditoría de punta a punta (origen-transformación-visualización), se normalizaron definiciones de KPI en una capa semántica y se agregaron pruebas de reconciliación automáticas entre fuente y mart analítico.',
    entregables: [
      'Matriz de trazabilidad KPI → consulta → fuente',
      'Inventario de discrepancias priorizadas por impacto operativo',
      'Reglas de modelado y documentación semántica',
      'Suite de pruebas de reconciliación diaria'
    ],
    impacto:
      'PROXY: confianza operativa en reporting. Método de cálculo: variación porcentual de conteos clave (fuente vs BI) por corte diario + cantidad de incidencias de datos reportadas por stakeholders por sprint.',
    assets_requeridos: [
      'Acceso a consultas/modelos del BI actual',
      'Extractos de datos fuente para periodos representativos',
      'Definiciones de negocio validadas por áreas usuarias'
    ],
    lecciones: [
      'La mayoría de discrepancias persisten por definiciones no versionadas, no por la visualización en sí.',
      'Las pruebas de reconciliación deben vivir junto al modelo, no como chequeos manuales ad hoc.'
    ],
    stack: ['SQL', 'dbt', 'BigQuery', 'Looker Studio']
  },
  {
    titulo: 'Plan de migración a ERP Holded como fuente única de verdad',
    slug: 'migracion-holded-ssot',
    contexto:
      'Empresa en crecimiento con información financiera y operativa fragmentada entre planillas, sistema contable previo y herramientas comerciales desconectadas.',
    problema:
      'No existía una fuente única confiable para facturación, cobros y estado de clientes, lo que dificultaba cierres mensuales y seguimiento de caja.',
    restricciones:
      'Migración por etapas para no interrumpir procesos administrativos críticos, con recursos internos limitados para limpieza histórica.',
    solucion:
      'Se definió un plan de migración incremental hacia Holded como SSOT, incluyendo mapeo de entidades, estrategia de saneamiento de maestros, criterios de corte por módulo y plan de convivencia temporal con sistemas legados.',
    entregables: [
      'Mapa de datos maestro y dependencias entre sistemas',
      'Plan de migración por fases con hitos y riesgos',
      'Checklist de calidad previa a carga inicial',
      'Guía operativa para periodo de coexistencia'
    ],
    impacto:
      'PROXY: reducción de fricción operativa en cierres y consultas transversales. Método de cálculo: tiempo total invertido en cierre administrativo mensual + número de ajustes manuales posteriores al cierre + % de registros maestros completos en Holded.',
    assets_requeridos: [
      'Exportes históricos de clientes, productos y facturas',
      'Reglas fiscales/contables vigentes del negocio',
      'Responsables funcionales por área para validación'
    ],
    lecciones: [
      'La calidad del dato maestro define el éxito de la migración más que la herramienta elegida.',
      'Un periodo de convivencia controlado reduce riesgo sin perder trazabilidad.'
    ],
    stack: ['Holded', 'CSV', 'SQL', 'Google Sheets']
  },
  {
    titulo: 'Finhub: portal financiero personal (MVP)',
    slug: 'finhub-portal-financiero',
    contexto:
      'Iniciativa de producto digital para centralizar seguimiento financiero personal en una interfaz simple, priorizando velocidad de validación con usuarios tempranos.',
    problema:
      'Las personas usuarias necesitaban una vista unificada de ingresos, gastos y metas, pero los flujos iniciales eran dispersos y sin jerarquía clara de información.',
    restricciones:
      'Alcance acotado de MVP, sin integraciones bancarias complejas en fase inicial y con foco en aprendizaje rápido de uso real.',
    solucion:
      'Se construyó un MVP con arquitectura modular, dashboard base de salud financiera, carga manual asistida de movimientos y sistema de categorías/metas para validar hipótesis de valor antes de ampliar integraciones.',
    entregables: [
      'Definición de alcance funcional de MVP',
      'Flujos UX de registro de movimientos y metas',
      'Dashboard inicial con indicadores personales',
      'Instrumentación analítica para aprendizaje de uso'
    ],
    impacto:
      'PROXY: adopción y recurrencia temprana del MVP. Método de cálculo: usuarios activos semanales sobre usuarios registrados + frecuencia media de registro de movimientos por usuario activo + tasa de retorno a 7 días.',
    assets_requeridos: [
      'Entrevistas con usuarios objetivo',
      'Taxonomía inicial de categorías financieras',
      'Lineamientos básicos de identidad visual del producto'
    ],
    lecciones: [
      'En etapa MVP, priorizar claridad de flujo supera la cobertura de funcionalidades avanzadas.',
      'Medir recurrencia temprano guía mejor el roadmap que medir solo altas iniciales.'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL']
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
