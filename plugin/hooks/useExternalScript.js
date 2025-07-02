// hooks/useExternalScript.js
import { useEffect, useState } from 'react';

export default function useExternalScript(src, options = { async: false }) {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!src) return;

    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = options.async || false;
      script.defer = options.defer || false;

      script.onload = () => setStatus('loaded');
      script.onerror = () => setStatus('error');

      document.body.appendChild(script);
    } else {
      setStatus('loaded'); // Already present
    }

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [src, options]);

  return status; // Can be used if you want to react to script status
}
