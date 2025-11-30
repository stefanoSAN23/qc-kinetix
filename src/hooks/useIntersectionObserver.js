import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook para observar elementos y aplicar clases de animación
 * cuando entran en el viewport.
 * 
 * @param {Object} options - Opciones del IntersectionObserver
 * @param {number} options.threshold - Porcentaje visible para disparar (default: 0.2)
 * @param {string} options.rootMargin - Margen del root (default: '0px 0px -100px 0px')
 * @param {string} options.activeClass - Clase a agregar cuando es visible (default: 'animated-active')
 * @param {boolean} options.triggerOnce - Si solo debe disparar una vez (default: true)
 * @returns {Function} Función ref callback para aplicar a elementos
 */
const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.2,
    rootMargin = '0px 0px -100px 0px',
    activeClass = 'animated-active',
    triggerOnce = true
  } = options;

  const elementsRef = useRef(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(activeClass);
          if (triggerOnce) {
            observerRef.current?.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          entry.target.classList.remove(activeClass);
        }
      });
    }, observerOptions);

    // Observar todos los elementos registrados
    elementsRef.current.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, activeClass, triggerOnce]);

  // Callback ref para registrar elementos
  const ref = useCallback((element) => {
    if (element) {
      elementsRef.current.add(element);
      observerRef.current?.observe(element);
    }
  }, []);

  return ref;
};

/**
 * Hook simplificado para un solo elemento
 * @param {Object} options - Opciones del observer
 * @returns {Object} { ref, isVisible }
 */
export const useSingleIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const {
      threshold = 0.2,
      rootMargin = '0px 0px -100px 0px',
      activeClass = 'animated-active'
    } = options;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(activeClass);
        }
      });
    }, { threshold, rootMargin });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return elementRef;
};

export default useIntersectionObserver;

