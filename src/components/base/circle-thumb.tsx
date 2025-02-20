import React from "react"
import { cn } from "@lib/utils"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type CircleThumbTypes = {
  className?: string;
  color?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  position?: "centerLeft" | "topLeft" | "bottomRight";
  bgImage?: IGatsbyImageData;
}

const CircleThumb: React.FC<CircleThumbTypes> = ({
  className,
  children,
  size = "md",
  position = "topLeft",
  color = "bg-pink-400",
  bgImage,
}) => {
  const sizeOptions = {
    sm: "w-[200px] h-[200px]",
    md: "w-[300px] h-[300px]",
    lg: "w-[450px] h-[450px]"
  }

  const positionOptions = {
    topLeft: "left-0 top-0",
    centerLeft: "left-[15%] top-[50%]",
    bottomRight: "right-0 bottom-0"
  }

  return (
    <div
      className={cn(`absolute overflow-hidden z-10 rounded-[62%_47%_82%_35%/45%_45%_80%_66%] animate-slider-shape`,
        sizeOptions[size], positionOptions[position], color, className)}
    >
      {bgImage ? (
        <GatsbyImage
          image={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={cn("w-full h-full", color)} />
      )}
      {children}
    </div >
  )
}

export default CircleThumb
