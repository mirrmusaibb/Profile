import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found.</h1>
      <p className="mt-4 max-w-md text-muted">The page you are looking for is not available.</p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.16em] text-muted transition-colors duration-300 ease-calm hover:border-accent/60 hover:text-foreground"
      >
        Return home
      </Link>
    </main>
  );
}
