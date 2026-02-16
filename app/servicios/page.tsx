import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios de sistemas, datos y automatización: ETL confiable, auditoría de métricas, migración a ERP y portales internos.'
};

const servicios = [
  {
    titulo: 'Data/ETL Reliability Sprint (1–2 semanas)',
    descripcion:
      'Diagnóstico y estabilización de pipelines: contratos de datos, checkpoints/backfills, deduplicación y validaciones para que los números vuelvan a ser confiables.',
    entregables: [
      'Contrato de datos (schema + invariantes)',
      'Validaciones (conteos, duplicados, rangos)',
      'Plan de backfill / incremental con checkpoint',
      'Checklist de verificación + rollback'
    ]
  },
  {
    titulo: 'Auditoría de métricas y dashboards (1–2 semanas)',
    descripcion:
      'Cuando el tablero no coincide con la realidad: defino la métrica por escrito, reproduzco el desvío con evidencia y corrijo en la fuente (no maquillaje en BI).',
    entregables: [
      'Definición operativa de métricas (qué cuenta / qué no)',
      'Evidencia reproducible del fallo',
      'Recomendación de fix en dataset/ETL (compatible o versionada)',
      'Checklist anti-regresión'
    ]
  },
  {
    titulo: 'Migración a ERP como SSOT (2–4 semanas)',
    descripcion:
      'Discovery + mapping + reconciliación para centralizar operación en ERP (ej. Holded) con riesgo controlado.',
    entregables: [
      'Discovery de módulos y encaje',
      'Tabla mapping origen → ERP (transformaciones + validaciones)',
      'Plan de migración por etapas + reconciliación por período',
      'Criterios de aceptación y rollback'
    ]
  },
  {
    titulo: 'Portal interno / producto operativo (3–6 semanas)',
    descripcion:
      'Web app para operación o finanzas: UI + API + DB + logging + controles para evitar datos duplicados e inconsistentes.',
    entregables: [
      'Modelo de datos y endpoints core',
      'Pantallas MVP (dashboard + listados + cargas/imports)',
      'Reglas de deduplicación y trazabilidad de imports',
      'Roadmap MVP → V1'
    ]
  }
];

export default function ServiciosPage() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Servicios"
        description="Trabajo en entregas acotadas y verificables. Si falta evidencia, lo marco como PROXY y dejo método de medición."
      />

      <div className="grid gap-4">
        {servicios.map((s) => (
          <section key={s.titulo} className="card space-y-3">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{s.titulo}</h2>
              <p className="mt-1 text-slate-700">{s.descripcion}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">Entregables típicos</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                {s.entregables.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-slate-900 hover:underline"
              >
                Ver casos reales →
              </Link>
              <Link href="/contacto" className="text-sm font-semibold text-slate-700 hover:underline">
                Contactar
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
