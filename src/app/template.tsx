"use client";

import { usePathname } from "next/navigation";

/**
 * Runs on every navigation (unlike layout.tsx, which persists). In theory
 * remounting this wrapper alone retriggers the CSS fade-in animation, but
 * Next's router cache can restore a previously-rendered segment (e.g. on
 * back/forward navigation) without a real remount, silently skipping the
 * animation. Keying the wrapper on the pathname forces React to treat it
 * as a new element every time, guaranteeing the animation always replays.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="animate-page-fade-in">
      {children}
    </div>
  );
}
