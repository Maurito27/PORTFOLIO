import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/content/case-studies';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Lista de proyectos con contexto, solución aplicada e impacto documentado.'
};

export default function CaseStudiesPage() {
  return (
    <div>
      <SectionIntro
        title="Case Studies"
        description="Una muestra de procesos y entregables aplicados para mejorar adquisición, activación y claridad comercial."
      />
      <div className="grid gap-4">
        {caseStudies.map((study) => (
          <article key={study.slug} className="card space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{study.titulo}</h2>
            <p className="text-slate-600">{study.contexto}</p>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  {tech}
                </span>
              ))}
            </div>
            <Link href={`/case-studies/${study.slug}`} className="text-sm font-semibold text-slate-900 underline">
              Ver detalle
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
