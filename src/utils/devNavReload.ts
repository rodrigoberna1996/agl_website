/**
 * En desarrollo: tras un cambio HMR, la siguiente navegación interna
 * hace recarga completa para evitar HTML en caché del ClientRouter.
 */
const FLAG = 'agl-force-reload-nav';

if (import.meta.env.DEV && import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    sessionStorage.setItem(FLAG, '1');
  });

  document.addEventListener(
    'click',
    (event) => {
      if (sessionStorage.getItem(FLAG) !== '1') return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest('a[href]');
      if (!link || link.hasAttribute('data-astro-reload')) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      sessionStorage.removeItem(FLAG);
      window.location.href = url.pathname + url.search + url.hash;
    },
    true,
  );
}
