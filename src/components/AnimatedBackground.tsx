/**
 * Decorative background: a few blurred gradient blobs that slowly drift.
 * Pure CSS (`transform` only, GPU-composited) — no JS, no canvas, no
 * external animation library, so it stays cheap on the static export.
 * `fixed` + `-z-10` keeps it behind all page content, pointer-events-none
 * so it never blocks clicks/links.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="animate-blob absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-700/30" />
      <div className="animate-blob animation-delay-4000 absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-800/25" />
      <div className="animate-blob animation-delay-8000 absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-800/25" />
    </div>
  );
}
