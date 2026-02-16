import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/content/case-studies';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return { title: 'Case Study no encontrado' };
  }

  return {
    title: study.titulo,
    description: study.contexto
  };
}

function getPrevNext(slug: string) {
  const index = caseStudies.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? caseStudies[index - 1] : null;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null;

  return { prev, next };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const { prev, next } = getPrevNext(study.slug);

  return (
    <article className="space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <Link href="/case-studies" className="hover:underline">
          Case Studies
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">{study.titulo}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{study.titulo}</h1>
          <p className="max-w-3xl text-slate-600">{study.contexto}</p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Contactar para un diagnóstico
          </Link>
          <Link
            href="/proof"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Ver Proof Pack
          </Link>
        </div>
      </header>

      {/* Core sections */}
      <section className="card space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Problema</h2>
        <p className="text-slate-700">{study.problema}</p>
      </section>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Restricciones</h2>
        <p className="text-slate-700">{study.restricciones}</p>
      </section>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Solución</h2>
        <p className="text-slate-700">{study.solucion}</p>
      </section>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Entregables</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          {study.entregables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">Impacto</h2>
        {/* Preserva saltos de línea (PROXY + método) */}
        <p className="whitespace-pre-line text-slate-700">{study.impacto}</p>
      </section>

      {/* Evidence + Learnings + Stack */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="card space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Assets requeridos</h2>
          <p className="text-sm text-slate-600">
            Evidencia mínima para respaldar claims (público o demo privada).
          </p>
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {study.assets_requeridos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">Lecciones</h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {study.lecciones.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {study.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Prev/Next */}
      <section className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          {prev ? (
            <Link href={`/case-studies/${prev.slug}`} className="text-slate-700 hover:underline">
              ← {prev.titulo}
            </Link>
          ) : (
            <span className="text-slate-400">← Anterior</span>
          )}
        </div>
        <div className="text-sm">
          {next ? (
            <Link href={`/case-studies/${next.slug}`} className="text-slate-700 hover:underline">
              {next.titulo} →
            </Link>
          ) : (
            <span className="text-slate-400">Siguiente →</span>
          )}
        </div>
      </section>
    </article>
  );
}
