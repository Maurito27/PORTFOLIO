import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Fullstack Senior para construir experiencias web claras, rápidas y orientadas a conversión.'
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-500">Fullstack Senior</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Construyo productos web que convierten tráfico en oportunidades de negocio.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Diseño y desarrollo soluciones web minimalistas, rápidas y enfocadas en objetivos de venta.
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
          'Estrategia de conversión desde el día 1.',
          'Implementación en stack moderno y mantenible.',
          'Comunicación clara para equipos no técnicos.'
        ].map((item) => (
          <article key={item} className="card">
            <p className="text-slate-700">{item}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
