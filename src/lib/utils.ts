import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedIndex(index: number): string {
  return index.toString().padStart(2, '0');
}

export const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "transparent"
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#f5f"
      },
      opacity: 1
    },
    enable: false
  },
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  detectRetina: true,
  // background: {
  //   color: {
  //     value: "transparent"
  //   }
  // },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#9e707c"
    },
    links: {
      color: "#d5a5a8",
      distance: 220,
      enable: true,
      opacity: 0.75,
      width: 1
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true
      },
      value: 180
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
}
