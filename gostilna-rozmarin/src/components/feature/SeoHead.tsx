import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoMeta, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { getJsonLdForPath } from '@/lib/jsonLd';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(attr: 'name' | 'property', key: string) {
  const el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (el) el.remove();
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(data: object | null) {
  const existing = document.getElementById('route-jsonld');
  if (existing) existing.remove();
  if (!data) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'route-jsonld';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

// Centralized route-aware head manager. Re-applies every managed value on each
// route change so metadata from a previous route can never leak into the next.
export default function SeoHead() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const meta = getSeoMeta(path);
    const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    if (meta.keywords) {
      upsertMeta('name', 'keywords', meta.keywords);
    } else {
      removeMeta('name', 'keywords');
    }
    upsertCanonical(canonical);

    if (meta.robots) {
      upsertMeta('name', 'robots', meta.robots);
    } else {
      removeMeta('name', 'robots');
    }

    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);

    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);

    upsertJsonLd(getJsonLdForPath(path));
  }, [location.pathname]);

  return null;
}