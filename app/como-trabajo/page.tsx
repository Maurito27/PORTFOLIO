import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Cómo trabajo',
  description: 'Proceso de trabajo claro, iterativo y centrado en objetivos de negocio.'
};

const pasos = [
  {
    titulo: '1. Descubrimiento',
    descripcion: 'Alineamos objetivo comercial, audiencia y restricciones reales del proyecto.'
  },
  {
    titulo: '2. Estrategia',
    descripcion: 'Defino hipótesis de conversión, arquitectura de contenido y prioridades técnicas.'
  },
  {
    titulo: '3. Ejecución',
    descripcion: 'Diseño e implementación en iteraciones cortas con revisiones semanales.'
  },
  {
    titulo: '4. Validación',
    descripcion: 'Documentamos resultados, próximos experimentos y backlog recomendado.'
  }
];

export default function ComoTrabajoPage() {
  return (
    <div>
      <SectionIntro
        title="Cómo trabajo"
        description="Un proceso simple y trazable para avanzar rápido sin perder foco en resultado."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {pasos.map((paso) => (
          <article key={paso.titulo} className="card space-y-2">
            <h2 className="text-lg font-semibold">{paso.titulo}</h2>
            <p className="text-slate-700">{paso.descripcion}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
