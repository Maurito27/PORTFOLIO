import type { Metadata } from 'next';
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

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{study.titulo}</h1>
        <p className="text-slate-600">{study.contexto}</p>
      </header>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold">Problema</h2>
        <p className="text-slate-700">{study.problema}</p>
      </section>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold">Restricciones</h2>
        <p className="text-slate-700">{study.restricciones}</p>
      </section>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold">Solución</h2>
        <p className="text-slate-700">{study.solucion}</p>
      </section>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold">Entregables</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          {study.entregables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card space-y-2">
        <h2 className="text-lg font-semibold">Impacto</h2>
        <p className="text-slate-700">{study.impacto}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card space-y-2">
          <h2 className="text-lg font-semibold">Assets requeridos</h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {study.assets_requeridos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card space-y-2">
          <h2 className="text-lg font-semibold">Lecciones</h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {study.lecciones.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
