import { useEffect } from 'react';

/**
 * Hook to monitor Core Web Vitals performance metrics
 */
export const useWebVitals = () => {
  useEffect(() => {
    // Monitor Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          
          // LCP should be under 2.5s
          if (lastEntry.renderTime || lastEntry.loadTime) {
            const lcp = lastEntry.renderTime || lastEntry.loadTime;
            if (lcp > 2500) {
              console.warn(`LCP is ${lcp}ms (target: <2500ms)`);
            }
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // Monitor First Input Delay / Interaction to Next Paint (INP)
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            // INP should be under 200ms
            if (entry.processingStart - entry.startTime > 200) {
              console.warn(`INP is ${entry.processingStart - entry.startTime}ms (target: <200ms)`);
            }
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              // CLS should be under 0.1
              if (clsValue > 0.1) {
                console.warn(`CLS is ${clsValue.toFixed(3)} (target: <0.1)`);
              }
            }
          });
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (e) {
        // Silently fail if Performance API not supported
      }
    }
  }, []);
};
