function PageContainer({ children }) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-4xl space-y-8">{children}</div>
    </main>
  );
}

export default PageContainer;
