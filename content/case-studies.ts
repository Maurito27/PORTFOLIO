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
      'Operación de vending con necesidad de consolidar ventas históricas y recientes para reporting y decisiones operativas. La extracción dependía de una API con limitaciones temporales por consulta.',
    problema:
      'Los datos no eran confiables para análisis: faltantes por ventanas temporales, riesgo de duplicados y dificultad para reanudar procesos sin rehacer exportaciones completas.',
    restricciones:
      'API con límites de ventana (histórico no accesible en una sola consulta), necesidad de correr incremental frecuente, y obligación de mantener outputs estables para consumo en BI/reportes.',
    solucion:
      'Diseñé un pipeline con dos modos: (1) backfill por ventanas temporales para reconstruir histórico, y (2) incremental con checkpoint persistente para traer solo lo nuevo. Se definieron reglas de deduplicación, validaciones básicas (conteos, rangos de fechas, duplicados) y un contrato de salida estable para no romper el consumo aguas abajo.',
    entregables: [
      'Modo backfill por ventanas (histórico) + modo incremental (día a día)',
      'Checkpoint persistente (estado de última venta procesada)',
      'Validaciones de calidad (conteos, duplicados, cobertura temporal)',
      'Documentación breve de operación (cómo correr, cómo reanudar, cómo recalcular)'
    ],
    impacto:
      'PROXY: mayor confiabilidad y continuidad del dato.\n' +
      'Método de cálculo: (a) comparar conteos por período entre fuente/API vs dataset final, (b) medir duplicados (deben ser 0) y gaps de fechas, (c) medir tiempo de recuperación ante interrupción: reanudar desde checkpoint vs rehacer exportación completa.',
    assets_requeridos: [
      'Diagrama simple del flujo: API → raw → processed → BI',
      'Ejemplo anonimizando del checkpoint (JSON) y/o logs de ejecución',
      'Muestra de output (20–50 filas) con columnas clave anonimizadas'
    ],
    lecciones: [
      'Si el histórico requiere ventanas, el checkpoint y la deduplicación son obligatorios para evitar drift y duplicados.',
      'Validaciones simples (conteos/fechas/duplicados) evitan semanas de desconfianza en BI.'
    ],
    stack: [
      'API REST (extracción)',
      'Procesamiento (scripts/ETL)',
      'JSON/CSV (outputs intermedios)',
      'BI / reporting (consumo)'
    ]
  },
  {
    titulo: 'Auditoría de dashboard: conteos inconsistentes (fuente vs BI)',
    slug: 'auditoria-dashboard-conteos',
    contexto:
      'Dashboard operativo consumido por el equipo para decisiones diarias. Se detectaron inconsistencias entre el número mostrado y el conteo manual de registros.',
    problema:
      'El tablero reportaba un conteo incorrecto (ej.: “online/activos”), generando pérdida de confianza y riesgo de decisiones equivocadas. El origen del error no era evidente (filtros, estados, dataset o transformación).',
    restricciones:
      'No se aceptaba “maquillar” el dashboard: el ajuste debía hacerse en la fuente/dataset. Además, cualquier cambio debía ser compatible con reportes existentes o versionado para no romper integraciones.',
    solucion:
      'Apliqué un enfoque de auditoría: (1) reproduje la discrepancia con evidencia concreta, (2) definí la métrica por escrito (qué estados cuentan y cuáles no), (3) rastreé el origen al dataset/fuente, y (4) propuse corrección aguas arriba con validaciones para evitar regresiones. El foco fue recuperar credibilidad: definición + evidencia + control.',
    entregables: [
      'Definición operativa de la métrica (qué cuenta / qué no cuenta)',
      'Checklist de validación (conteos, duplicados, estados, muestras)',
      'Recomendación de corrección en la fuente (ETL/dataset) con compatibilidad o versionado',
      'Evidencia reproducible del fallo y del criterio de verificación'
    ],
    impacto:
      'PROXY: reducción de discrepancias y aumento de confianza en el tablero.\n' +
      'Método de cálculo: muestreo periódico (N=20/50) comparando conteo manual vs conteo del dashboard; registrar tasa de error y su tendencia. Complemento: medir duplicados y registros “fuera de definición” (estados mal mapeados).',
    assets_requeridos: [
      'Captura del dashboard con el conteo incorrecto',
      'Evidencia del conteo manual (tabla/lista) y fecha/hora',
      'Extracto anonimizando del dataset con filas que expliquen el desvío'
    ],
    lecciones: [
      'Si el dato está mal en la fuente, arreglar solo el BI destruye credibilidad.',
      'Una métrica sin definición escrita deriva en drift y discusiones eternas.'
    ],
    stack: [
      'Dataset/ETL (fuente)',
      'Google Sheets / BI (visualización)',
      'Validaciones (conteos/muestras)'
    ]
  },
  {
    titulo: 'Plan de migración a ERP Holded como fuente única de verdad',
    slug: 'migracion-holded-ssot',
    contexto:
      'Decisión ejecutiva: centralizar la operación en un ERP (Holded) como “fuente única de verdad” para consolidar datos y reporting, reduciendo sistemas paralelos.',
    problema:
      'Los datos vivían dispersos entre pipelines, reportes y fuentes operativas. Sin un mapeo claro, la migración podía introducir inconsistencias (entidades duplicadas, campos mal transformados, totales que no cierran).',
    restricciones:
      'Dependencia de capacidades reales del ERP y sus módulos. La migración debía hacerse con discovery previo, mapeo explícito, reconciliación por períodos y estrategia de rollback para evitar cargar datos erróneos.',
    solucion:
      'Propuse un enfoque por fases: discovery de módulos, mapeo entidad/campo (origen → Holded) con reglas de transformación y validación, plan de carga inicial (backfill) + incremental, y reconciliación (totales por período) antes de declarar el ERP como SSOT. El objetivo fue controlar riesgo: migrar con pruebas, no “a ciegas”.',
    entregables: [
      'Documento de discovery: módulos relevantes y decisión de encaje',
      'Tabla de mapping (origen → Holded) con transformaciones y validaciones',
      'Plan de migración por etapas (backfill + incremental) con reconciliación',
      'Checklist de go-live y rollback (criterios de aceptación)'
    ],
    impacto:
      'PROXY: reducción de fuentes paralelas y mejora de consistencia de reporting.\n' +
      'Método de cálculo: (a) contar fuentes activas antes/después, (b) reconciliar totales (ventas por período) entre sistema previo vs Holded, (c) medir % de registros mapeados sin errores por lote.',
    assets_requeridos: [
      'Tabla de mapping (10–20 filas reales anonimizadas)',
      'Diagrama target: origen → integración → Holded → reporting',
      'Ejemplo de reconciliación por período (aunque sea parcial)'
    ],
    lecciones: [
      'Migrar a ERP es un problema de contratos de datos y reconciliación, no de “copiar/pegar”.',
      'El discovery temprano evita retrabajo y datos “basura” dentro del ERP.'
    ],
    stack: [
      'Holded (ERP)',
      'Staging (CSV/Sheets) para mapping y control',
      'Integración (ETL/API según disponibilidad)'
    ]
  },
  {
    titulo: 'Finhub: portal financiero personal (MVP)',
    slug: 'finhub-portal-financiero',
    contexto:
      'Proyecto personal en desarrollo: un portal para seguimiento financiero (ingresos, gastos, cuentas, previsión mensual) con un dashboard central y reglas para evitar datos duplicados o inconsistentes.',
    problema:
      'La información financiera estaba fragmentada entre tarjetas, banco y registros manuales, haciendo difícil proyectar el mes siguiente y tomar decisiones con rapidez.',
    restricciones:
      'Construcción incremental (sin “big bang”): primero base funcional y data model sólido, luego automatizaciones (imports) con controles. Prioridad en no hardcodear secretos y dejar auditoría de imports (fuente/fecha/hash).',
    solucion:
      'Definí un MVP por etapas: (1) modelo de datos y UI mínima, (2) carga manual/CSV para validar categorías y vistas, (3) pipeline de importación con deduplicación y trazabilidad, (4) métricas básicas de cobertura (qué % está clasificado) y previsión mensual. La idea: producto útil rápido y evolutivo.',
    entregables: [
      'Modelo de datos inicial (cuentas, transacciones, categorías, previsiones)',
      'Pantallas MVP (dashboard + listado + carga/importación)',
      'Reglas de deduplicación y trazabilidad de import (fuente/fecha/hash)',
      'Backlog priorizado MVP → V1'
    ],
    impacto:
      'PROXY: menor fricción para cierre mensual y mejor visibilidad de previsión.\n' +
      'Método de cálculo: (a) medir tiempo de cierre mensual antes vs después, (b) medir cobertura: % de transacciones clasificadas, (c) medir consistencia: duplicados detectados/evitados por import.',
    assets_requeridos: [
      'Wireframe/capturas UI del MVP',
      'Diagrama ER simple del modelo de datos',
      'Backlog MVP (10–15 items) con prioridades'
    ],
    lecciones: [
      'Un buen modelo de datos y reglas de import valen más que “integrar todo” desde el día 1.',
      'MVP primero con carga controlada reduce riesgo y acelera aprendizaje.'
    ],
    stack: [
      'Web app (frontend + API)',
      'Base de datos (modelo transaccional)',
      'Importación (CSV/manual → automatización futura)'
    ]
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
