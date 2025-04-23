import { useEffect, useState } from 'react';

export const useResponsiveColumns = (ref: React.RefObject<HTMLElement>) => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;

      if (width < 500) setColumns(1);
      else if (width < 600) setColumns(2);
      else setColumns(3);
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, [ref]);

  return columns;
};
