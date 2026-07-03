import { useEffect, useRef, useState } from "react";

export function useInView(threshold: 0.2) {
    const ref = useRef<HTMLElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('isIntersecting:', entry.isIntersecting, 'boundingRect:', entry.boundingClientRect, 'rootBounds:', entry.rootBounds);

                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isInView };
}