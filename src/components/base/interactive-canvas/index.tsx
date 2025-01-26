import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { particlesOptions } from "@/components/base/interactive-canvas/particlesConfig";

const InteractiveCanvas: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        setIsInitialized(true);
      } catch (error) {
        console.error("Error initializing particles engine:", error);
      }
    };

    initializeParticles();
  }, []);

  return isInitialized ? (
    <Particles id="tsparticles" options={particlesOptions} />
  ) : null;
}

export default InteractiveCanvas;
