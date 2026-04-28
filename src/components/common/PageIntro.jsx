function PageIntro({ title, description }) {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-slate-600">{description}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <article className="rounded-xl bg-emerald-50 p-4">
          <h3 className="font-semibold text-emerald-800">What this page will support</h3>
          <p className="mt-2 text-sm text-emerald-900">
            This is a placeholder section for future tools, forms, and feature modules.
          </p>
        </article>
        <article className="rounded-xl bg-amber-50 p-4">
          <h3 className="font-semibold text-amber-800">Next implementation phase</h3>
          <p className="mt-2 text-sm text-amber-900">
            Content blocks and workflows will be expanded in future task phases.
          </p>
        </article>
      </div>
    </section>
  );
}

export default PageIntro;
