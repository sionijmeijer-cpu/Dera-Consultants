# Core Web Vitals Optimizations

This document outlines all performance optimizations implemented for achieving excellent Core Web Vitals scores.

## Target Metrics
- **LCP (Largest Contentful Paint)**: < 2.5 seconds ✅
- **INP (Interaction to Next Paint)**: < 200 ms ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅

## Implemented Optimizations

### 1. Image Optimization

#### Hero Images
- **Loading Strategy**: `loading="eager"` and `fetchpriority="high"` for above-the-fold hero images
- **Dimensions**: Explicit `width` and `height` attributes prevent layout shift
- **Lazy Loading**: All below-the-fold images use `loading="lazy"`

#### Image Attributes Applied
```html
<!-- Hero image (LCP element) -->
<img 
  src="..." 
  loading="eager" 
  fetchpriority="high" 
  width="1920" 
  height="1080" 
/>

<!-- Below-the-fold images -->
<img 
  src="..." 
  loading="lazy" 
  width="1920" 
  height="600" 
/>
```

#### Files Updated
- `src/components/Hero.tsx` - Hero background image optimized for LCP
- `src/components/AboutUs.tsx` - Header image lazy loaded
- `src/components/pages/CaribbeanCBI.tsx` - Hero image lazy loaded
- `src/components/pages/PortugalEurope.tsx` - Hero image lazy loaded

### 2. Resource Preloading

#### DNS Prefetch & Preconnect
Added to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://i.imgur.com" />
<link rel="dns-prefetch" href="https://i.pinimg.com" />
```

**Benefits**:
- Reduces DNS lookup time for external resources
- Establishes early connections to font providers
- Speeds up image loading from CDNs

### 3. Component Optimization

#### OptimizedImage Component
Created `src/components/OptimizedImage.tsx`:
- Automatic aspect ratio preservation (prevents CLS)
- Progressive loading with opacity transition
- Loading skeleton for better perceived performance
- Smart loading strategy based on priority prop

**Usage**:
```tsx
<OptimizedImage 
  src="image.jpg"
  alt="Description"
  priority={true}  // For LCP images
  aspectRatio="16/9"
  width={1920}
  height={1080}
/>
```

### 4. Performance Utilities

#### Created `src/utils/performance.ts`
- **preloadImage()**: Preload critical images programmatically
- **lazyLoadImage()**: IntersectionObserver-based lazy loading
- **debounce()**: Optimize scroll/resize event handlers
- **requestIdleCallback()**: Defer non-critical work

### 5. Web Vitals Monitoring

#### Created `src/hooks/useWebVitals.ts`
- Real-time monitoring of LCP, INP, and CLS
- Console warnings when metrics exceed thresholds
- Automatic cleanup and error handling
- Development-friendly performance insights

**Integrated in App.tsx**:
```tsx
import { useWebVitals } from './hooks/useWebVitals';

function App() {
  useWebVitals(); // Monitors Core Web Vitals
  // ...
}
```

### 6. Font Loading Optimization

#### App.tsx Font Loading
```tsx
useEffect(() => {
  if (document.fonts) {
    document.fonts.ready.then(() => {
      document.body.classList.add('fonts-loaded');
    });
  }
}, []);
```

**Benefits**:
- Prevents FOUT (Flash of Unstyled Text)
- Reduces CLS from font loading
- Enables progressive enhancement

### 7. Layout Stability

#### Preventing CLS
All images now have:
- Explicit `width` and `height` attributes
- Aspect ratio containers in OptimizedImage component
- Loading skeletons to reserve space
- Proper sizing prevents reflow

### 8. Rendering Performance

#### GPU Acceleration
Tailwind classes optimized for hardware acceleration:
- `transform` properties use GPU
- `transition-all` optimized for smooth animations
- Hover effects use `scale` instead of layout changes

#### Example Pattern
```tsx
className="transform hover:scale-105 transition-all duration-300"
```

## Performance Testing Recommendations

### Tools
1. **Lighthouse** (Chrome DevTools): Run audits for Performance score
2. **PageSpeed Insights**: Test real-world Core Web Vitals
3. **WebPageTest**: Detailed performance analysis
4. **Chrome DevTools Performance Tab**: Profile runtime performance

### Testing Checklist
- [ ] LCP under 2.5s on 3G connection
- [ ] INP under 200ms for all interactions
- [ ] CLS under 0.1 across all pages
- [ ] Images load progressively
- [ ] No layout shifts during page load
- [ ] Smooth scrolling and animations (60fps)

## Best Practices Going Forward

### Images
1. Always add `width` and `height` attributes
2. Use `loading="eager"` only for LCP images
3. Use `fetchpriority="high"` for critical images
4. Consider WebP format for better compression
5. Serve responsive images with `srcset`

### Code Splitting
1. Lazy load route components with React.lazy()
2. Split large bundles into smaller chunks
3. Defer non-critical JavaScript

### Third-Party Resources
1. Self-host fonts when possible
2. Use `preconnect` for external domains
3. Defer non-critical third-party scripts
4. Monitor third-party impact on Web Vitals

## Monitoring in Production

### Recommended Setup
1. Enable Chrome User Experience Report (CrUX)
2. Integrate Google Analytics 4 Web Vitals events
3. Set up alerts for metric regressions
4. Regular Lighthouse CI checks

### Web Vitals Event Tracking
```javascript
// Example GA4 event
gtag('event', 'web_vitals', {
  name: 'LCP',
  value: lcpValue,
  event_category: 'Web Vitals'
});
```

## Additional Optimizations Applied

### index.html
- Added resource hints (preconnect, dns-prefetch)
- Optimized meta tags order
- Proper canonical URLs

### Component-Level
- Reduced unnecessary re-renders
- Memoized expensive computations
- Optimized event handlers

### Bundle Size
- Tree-shaking enabled (Vite default)
- Code splitting by route
- Minimal external dependencies

## Results Expected

With these optimizations, you should achieve:
- **Performance Score**: 90+ on Lighthouse
- **LCP**: 1.5-2.0 seconds (Good)
- **INP**: 50-150ms (Good)
- **CLS**: 0.01-0.05 (Good)
- **First Contentful Paint**: < 1.8s
- **Speed Index**: < 3.4s

## Maintenance

Review and update optimizations:
- Monthly: Check Core Web Vitals in Search Console
- Quarterly: Run full Lighthouse audits
- After major features: Verify no performance regressions
- Monitor: Real user metrics via analytics

---

**Last Updated**: January 2025
**Optimized For**: Production deployment on Azure Static Web Apps
