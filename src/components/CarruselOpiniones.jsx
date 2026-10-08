import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Sin bucle ni movimiento automático. Las diapositivas se agrupan según cuántas caben a la vista
// (una, dos o tres: lo decide el CSS de `Resenas.astro`). Con `prefers-reduced-motion: reduce`
// el cambio de diapositiva es instantáneo.
const OPCIONES = {
  align: 'start',
  container: '.embla__container',
  loop: false,
  slidesToScroll: 'auto',
  breakpoints: {
    '(prefers-reduced-motion: reduce)': { duration: 0 },
  },
};

const BOTON =
  'inline-flex size-11 items-center justify-center border border-outline text-on-surface transition-colors duration-150 hover:border-primary-container aria-disabled:cursor-default aria-disabled:border-surface-container-highest aria-disabled:text-placeholder aria-disabled:hover:border-surface-container-highest';

/**
 * Flecha de los botones de anterior y siguiente, como SVG en línea.
 *
 * @param {{ sentido: 'anterior' | 'siguiente' }} props
 */
function Flecha({ sentido }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d={sentido === 'anterior' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

/**
 * Carrusel de las opiniones de Google (RDA-015 y RDA-016): única isla de React del sitio.
 * Las diapositivas llegan ya renderizadas desde `Resenas.astro`, dentro de `.embla__container`,
 * de modo que las diez opiniones están completas en el HTML compilado. Sin JavaScript, la pista
 * se recorre con desplazamiento horizontal y los controles no se muestran.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children Pista `.embla__container` con las diapositivas.
 */
export default function CarruselOpiniones({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPCIONES);
  const [estado, setEstado] = useState({ grupos: 0, actual: 0, anterior: false, siguiente: false });

  useEffect(() => {
    if (!emblaApi) return;
    const leer = () =>
      setEstado({
        grupos: emblaApi.scrollSnapList().length,
        actual: emblaApi.selectedScrollSnap(),
        anterior: emblaApi.canScrollPrev(),
        siguiente: emblaApi.canScrollNext(),
      });
    leer();
    emblaApi.on('select', leer).on('reInit', leer);
    return () => {
      emblaApi.off('select', leer).off('reInit', leer);
    };
  }, [emblaApi]);

  const { grupos, actual, anterior, siguiente } = estado;
  const numeros = Array.from({ length: grupos }, (_, indice) => indice);

  return (
    <div
      className="embla space-y-space-md"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Opiniones de clientes"
    >
      {/* `relative`: así el recorte también alcanza a los textos `sr-only` de las tarjetas. */}
      <div
        className="embla__viewport relative overflow-hidden noscript:snap-x noscript:snap-mandatory noscript:overflow-x-auto"
        ref={emblaRef}
      >
        {children}
      </div>

      {/* El alto se reserva desde el servidor: los controles aparecen al hidratar sin mover la página. */}
      <div className="embla__controls flex min-h-35 flex-col gap-space-sm min-[22.5rem]:min-h-22 min-[22.5rem]:flex-row min-[22.5rem]:items-start min-[22.5rem]:justify-between md:min-h-11 noscript:hidden">
        {grupos > 1 && (
          <>
            <div className="embla__buttons flex gap-space-xs">
              <button
                type="button"
                className={BOTON}
                aria-label="Opinión anterior"
                aria-disabled={!anterior}
                onClick={() => anterior && emblaApi.scrollPrev()}
              >
                <Flecha sentido="anterior" />
              </button>
              <button
                type="button"
                className={BOTON}
                aria-label="Opinión siguiente"
                aria-disabled={!siguiente}
                onClick={() => siguiente && emblaApi.scrollNext()}
              >
                <Flecha sentido="siguiente" />
              </button>
            </div>

            <div className="embla__dots grid grid-cols-5 md:flex">
              {numeros.map((indice) => (
                <button
                  key={indice}
                  type="button"
                  className="group inline-flex size-11 items-center justify-center"
                  aria-label={`Ir al grupo ${indice + 1} de ${grupos}`}
                  aria-current={indice === actual ? 'true' : undefined}
                  onClick={() => emblaApi.scrollTo(indice)}
                >
                  <span className="size-3 border-2 border-outline transition-colors duration-150 group-hover:border-primary group-aria-[current]:border-primary-container group-aria-[current]:bg-primary-container" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
