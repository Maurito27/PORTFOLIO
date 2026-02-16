import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proof', label: 'Proof' },
  { href: '/como-trabajo', label: 'Cómo trabajo' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-base flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Tu Nombre · Fullstack
        </Link>
        <nav aria-label="Navegación principal" className="flex flex-wrap gap-3 text-sm text-slate-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-2 py-1 hover:bg-slate-100">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
