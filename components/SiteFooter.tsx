export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container-base py-8 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Tu Nombre. Desarrollo web orientado a resultados.</p>
      </div>
    </footer>
  );
}
