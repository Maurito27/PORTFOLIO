import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Canales de contacto para iniciar una conversación sobre tu próximo proyecto web.'
};

export default function ContactoPage() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Contacto"
        description="Si tenés un objetivo comercial claro, te ayudo a convertirlo en una ejecución web concreta."
      />
      <div className="card space-y-3">
        <p className="text-slate-700">Escribime con contexto, objetivo y plazo estimado.</p>
        <ul className="space-y-2 text-slate-700">
          <li>
            Email: <a href="mailto:hola@tudominio.com" className="underline">hola@tudominio.com</a>
          </li>
          <li>
            LinkedIn: <Link href="https://www.linkedin.com" className="underline">Perfil profesional</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
