import { useEffect, useState, useRef } from 'react';
import { debounce } from 'lodash';

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const resizeObserverRef = useRef(null);

    useEffect(() => {
        const observerCallback = (entries) => {
            if (entries && entries[0]) {
                const { width, height } = entries[0].contentRect;
                setDimensions({ width, height });
            }
        };

        const debouncedObserverCallback = debounce(observerCallback, 100); // 100ms 디바운스 설정

        if (ref.current) {
            resizeObserverRef.current = new ResizeObserver(debouncedObserverCallback);
            resizeObserverRef.current.observe(ref.current);
        }

        return () => {
            if (resizeObserverRef.current) {
                resizeObserverRef.current.disconnect();
            }
        };
    }, [ref]);

    return dimensions;
};

export default useResizeObserver;
