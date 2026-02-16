import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/content/case-studies';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Casos reales: problema, restricciones, solución, entregables e impacto (PROXY con método).'
};

type Categoria = 'ETL' | 'BI / Auditoría' | 'ERP / Migración' | 'Producto';

function inferirCategoria(slug: string): Categoria {
  if (slug.includes('etl') || slug.includes('checkpoints') || slug.includes('backfill')) return 'ETL';
  if (slug.includes('auditoria') || slug.includes('dashboard')) return 'BI / Auditoría';
  if (slug.includes('holded') || slug.includes('migracion') || slug.includes('ssot')) return 'ERP / Migración';
  return 'Producto';
}

function extracto(texto: string, max = 170) {
  const limpio = texto.replace(/\s+/g, ' ').trim();
  if (limpio.length <= max) return limpio;
  return `${limpio.slice(0, max).trimEnd()}…`;
}

const categoriasOrdenadas: Categoria[] = ['ETL', 'BI / Auditoría', 'ERP / Migración', 'Producto'];

export default function CaseStudiesPage() {
  // Filtro por querystring simple (sin estado ni client components)
  // Ej: /case-studies?cat=ETL
  // Nota: en App Router, para leer searchParams necesitas recibirlos como prop.
  // Para mantener este archivo como Server Component sin cambios mayores,
  // ofrecemos links de filtro que apuntan a anchors en vez de querystring.
  // Si querés filtro real por URL, lo hacemos en la siguiente iteración.
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Case Studies"
        description="Casos reales orientados a confiabilidad operativa: ETL, auditoría de métricas, migración a ERP y construcción incremental de producto. Impacto en formato PROXY (sin inventar métricas) + método de verificación."
      />

      {/* Filtros (anclas) */}
      <div className="flex flex-wrap gap-2">
        <a href="#todos" className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 hover:bg-slate-50">
          Todos
        </a>
        {categoriasOrdenadas.map((cat) => (
          <a
            key={cat}
            href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace('/', '').replace('--', '-')}`}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 hover:bg-slate-50"
          >
            {cat}
          </a>
        ))}
      </div>

      <div id="todos" className="grid gap-4">
        {caseStudies.map((study) => {
          const categoria = inferirCategoria(study.slug);

          return (
            <article key={study.slug} className="card space-y-3">
              {/* Header */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-slate-900">{study.titulo}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                      {categoria}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      Impacto: PROXY + método
                    </span>
                  </div>
                </div>

                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-sm font-semibold text-slate-900 underline underline-offset-4"
                >
                  Ver detalle
                </Link>
              </div>

              {/* Contexto */}
              <p className="text-slate-700">{study.contexto}</p>

              {/* Qué resolví (extracto del problema) */}
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Qué resolví</p>
                <p className="mt-1 text-sm text-slate-700">{extracto(study.problema)}</p>
              </div>

              {/* Stack (chips) */}
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Micro-CTA */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href={`/case-studies/${study.slug}`} className="text-sm font-semibold text-slate-900 hover:underline">
                  Ver solución, entregables e impacto →
                </Link>
                <Link href="/contacto" className="text-sm font-semibold text-slate-700 hover:underline">
                  Contactar
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Secciones ancla para “filtro” visual */}
      <section className="space-y-3 pt-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Navegación por categoría</h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {categoriasOrdenadas.map((cat) => {
            const id = cat.toLowerCase().replace(/\s+/g, '-').replace('/', '').replace('--', '-');
            const items = caseStudies.filter((s) => inferirCategoria(s.slug) === cat);

            return (
              <div key={cat} id={id} className="card space-y-2">
                <p className="text-sm font-semibold text-slate-900">{cat}</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/case-studies/${s.slug}`} className="hover:underline">
                        {s.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
