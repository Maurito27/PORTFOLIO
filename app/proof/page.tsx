import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Proof',
  description: 'Checklist de evidencias para documentar impacto sin inventar métricas.'
};

const evidencias = [
  'Capturas de antes/después de pantallas clave.',
  'Extractos de analytics con periodos comparables.',
  'Testimonios breves del cliente con contexto.',
  'Eventos instrumentados y definición de cada uno.',
  'Hipótesis inicial y resultados observados (incluyendo PROXY cuando aplique).',
  'Lecciones y decisiones descartadas durante el proyecto.'
];

export default function ProofPage() {
  return (
    <div>
      <SectionIntro
        title="Proof"
        description="Checklist sugerido para construir evidencia confiable en cada caso de estudio."
      />
      <ul className="space-y-3">
        {evidencias.map((item) => (
          <li key={item} className="card flex items-start gap-3 text-slate-700">
            <span aria-hidden className="mt-0.5 rounded border border-slate-400 px-2 text-xs font-semibold">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
