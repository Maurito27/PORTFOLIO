import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Project delivery, Scrum y automatización con IA para ejecutar proyectos con control y foco.'
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-500">PROJECT DELIVERY · SCRUM · AUTOMATIZACIÓN CON IA</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Hago que proyectos se ejecuten: planificación, Scrum y automatización con IA.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Trabajo como mano derecha del CEO en una empresa e-commerce europea. Ordeno el delivery (roadmap → sprints → entregables), coordino stakeholders y creo automatizaciones con IA para reducir trabajo manual y errores. Todo bajo enfoque NDA-first: evidencia sanitizada y demos privadas cuando corresponde.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/case-studies"
            className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Ver Case Studies
          </Link>
          <Link
            href="/contacto"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contactar
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            titulo: 'Delivery con control',
            descripcion: 'Backlog, sprint planning, seguimiento y criterios claros.'
          },
          {
            titulo: 'Automatización aplicada',
            descripcion: 'Flujos con IA para eliminar tareas repetitivas.'
          },
          {
            titulo: 'Reporting para decisiones',
            descripcion: 'Métricas simples, tableros y seguimiento ejecutivo.'
          }
        ].map((item) => (
          <article key={item.titulo} className="card space-y-1">
            <p className="font-semibold text-slate-900">{item.titulo}</p>
            <p className="text-slate-700">{item.descripcion}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
