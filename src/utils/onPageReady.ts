/**
 * Ejecuta init al cargar y tras cada navegación con ClientRouter.
 * Devuelve cleanup opcional; se llama de nuevo en astro:after-swap.
 */
export function onPageReady(
  init: () => void | (() => void),
  options?: { root?: string },
): void {
  let cleanup: void | (() => void);

  const mount = () => {
    if (options?.root && !document.querySelector(options.root)) {
      cleanup?.();
      cleanup = undefined;
      return;
    }

    cleanup?.();
    cleanup = init();
  };

  mount();
  document.addEventListener('astro:after-swap', mount);
}
