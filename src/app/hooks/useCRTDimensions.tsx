import { useState, useEffect, RefObject } from 'react';

const useCRTDimensions = (containerRef: RefObject<HTMLDivElement>) => {
  const aspectRatio = 4 / 3;
  const MINIMUM_WIDTH = 180;
  const MINIMUM_HEIGHT = 135;

  // Define settings for various device widths.
  // Adjust these values as needed.
  const deviceSettings = [
    { maxWidth: 359, width: 200, icon: 22 },   // Extra small mobile
    { maxWidth: 380, width: 310, icon: 24 },   // Small mobile
    { maxWidth: 639, width: 330, icon: 26 },   // Medium mobile
    { maxWidth: 767, width: 310, icon: 28 },   // Large mobile/small tablet
    { maxWidth: 1023, width: 300, icon: 30 },  // Tablets
    { maxWidth: 1439, width: 300, icon: 25 },  // Laptops
    { maxWidth: Infinity, width: 355, icon: 35 } // Desktops and larger
  ];

  const [screenDimensions, setScreenDimensions] = useState({ width: 450, height: 337.5 });
  const [iconSize, setIconSize] = useState({ width: 40, height: 40 });

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current ? containerRef.current.offsetWidth : window.innerWidth;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Pick a device setting based on the current window width.
      const setting = deviceSettings.find((s) => windowWidth <= s.maxWidth) || deviceSettings[deviceSettings.length - 1];

      // Use the defined width from the setting.
      let newWidth = setting.width;
      newWidth = Math.max(newWidth, MINIMUM_WIDTH);
      const newHeight = Math.max(newWidth / aspectRatio, MINIMUM_HEIGHT);

      setScreenDimensions({ width: newWidth, height: newHeight });
      setIconSize({ width: setting.icon, height: setting.icon });

      console.log(`Screen dimensions: ${newWidth}x${newHeight}, window: ${windowWidth}x${windowHeight}`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [containerRef]);

  return { screenDimensions, iconSize };
};

export default useCRTDimensions;
