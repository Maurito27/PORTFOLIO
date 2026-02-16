import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Servicios fullstack para crecimiento comercial, claridad de propuesta y ejecución técnica.'
};

const servicios = [
  'Landing pages de conversión para campañas y tráfico orgánico.',
  'Sitios corporativos con arquitectura de contenido orientada a venta.',
  'Implementación fullstack en Next.js con foco en performance y mantenibilidad.',
  'Auditoría UX/UI + copy para mejorar claridad y confianza comercial.'
];

export default function ServiciosPage() {
  return (
    <div>
      <SectionIntro
        title="Servicios"
        description="Trabajo en formatos acotados y claros para que cada entrega tenga impacto directo en negocio."
      />
      <ul className="grid gap-3">
        {servicios.map((servicio) => (
          <li key={servicio} className="card text-slate-700">
            {servicio}
          </li>
        ))}
      </ul>
    </div>
  );
}
