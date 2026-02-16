import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Preguntas frecuentes sobre tiempos, alcance y modalidad de trabajo.'
};

const faqs = [
  {
    q: '¿Trabajás por horas o por proyecto?',
    a: 'Priorizo trabajo por alcance para mantener foco en entregables y resultado.'
  },
  {
    q: '¿Podés trabajar con un equipo interno?',
    a: 'Sí, puedo integrarme con diseño, producto o marketing y adaptarme al flujo existente.'
  },
  {
    q: '¿Qué necesitás para comenzar?',
    a: 'Objetivo principal, contexto del negocio y acceso a los activos mínimos del proyecto.'
  }
];

export default function FaqPage() {
  return (
    <div>
      <SectionIntro
        title="FAQ"
        description="Respuestas rápidas para validar si este enfoque encaja con tu necesidad."
      />
      <div className="space-y-3">
        {faqs.map((item) => (
          <article key={item.q} className="card space-y-2">
            <h2 className="font-semibold text-slate-900">{item.q}</h2>
            <p className="text-slate-700">{item.a}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
