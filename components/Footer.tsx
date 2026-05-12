export function Footer() {
  return (
    <footer className="border-t border-divider px-6 py-6 text-sm text-foreground/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Core</p>
        <p>A production-ready Next.js template. Fork and go.</p>
      </div>
    </footer>
  );
}
