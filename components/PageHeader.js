'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

/**
 * `sticky` (used on long reading pages such as chapters): once the big banner scrolls out of view,
 * a slim bar with the heading stays pinned right under the site navbar, so the reader always
 * knows which chapter they are in. The banner itself is unchanged, so nothing jumps.
 */
export default function PageHeader({ eyebrow, title, crumb, sticky = false }) {
  const { t } = useLang();
  const ref = useRef(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (!sticky || !ref.current || typeof IntersectionObserver === 'undefined') return;
    const navH = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 87;
    const io = new IntersectionObserver(
      ([e]) => setPinned(!e.isIntersecting && e.boundingClientRect.bottom <= navH() + 2),
      { rootMargin: `-${navH()}px 0px 0px 0px`, threshold: 0 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [sticky]);

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-gradient-to-r from-ink via-ink/95 to-banyan py-4">
        <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-saffron/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-banyan/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-left lg:px-8">
          <span className="section-eyebrow text-xs font-bold uppercase text-marigold">
            {t(eyebrow)}
          </span>

          <h1 className="mt-3 py-2 line-clamp-2 font-body text-4xl font-extrabold sm:text-4xl">
            <span className="title-shine py-1.5">{t(title).toUpperCase()}</span>
          </h1>

          <div className="mt-4 flex items-center justify-start gap-1.5 text-sm text-ivory/60">
            <Link href="/" className="hover:text-ivory">
              {t("Home")}
            </Link>

            <ChevronRight size={14} />

            <span className="text-marigold">{t(crumb)}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-tricolor-thread" />
      </section>

      {sticky && (
        <div
          aria-hidden={!pinned}
          style={{ top: 'var(--nav-h, 87px)' }}
          className={`fixed inset-x-0 z-40 border-b-2 border-saffron bg-gradient-to-r from-ink via-ink to-banyan shadow-card transition-all duration-200 ${
            pinned ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
            <span className="hidden shrink-0 rounded-full bg-saffron/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-marigold sm:inline">
              {t(eyebrow)}
            </span>
            <p className="line-clamp-2 flex-1 text-sm font-extrabold leading-snug text-ivory sm:text-base">
              {t(title)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
