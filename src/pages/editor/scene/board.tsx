import { useState } from "react";
import { DroppableArea } from "./droppable";

const SceneBoard = ({
  size,
  children,
}: {
  size: { width: number; height: number };
  children: React.ReactNode;
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  return (
    <DroppableArea
      id="artboard"
      onDragStateChange={setIsDraggingOver}
      style={{
        width: size.width,
        height: size.height,
        backgroundImage: `
          linear-gradient(to right, rgba(100,100,100,0.1) 5px, transparent 5px),
          linear-gradient(to bottom, rgba(100,100,100,0.1) 5px, transparent 5px)
        `,
        backgroundSize: "60px 60px",
      }}
      className="designcombo_scene pointer-events-auto mt-3.5 bg-gray-800"
    >
      <div
        style={{
          width: size.width,
          height: size.height,
        }}
        className={`pointer-events-none absolute z-50 transition-colors duration-200 ease-in-out ${isDraggingOver ? "border-4 border-dashed border-white bg-white/[0.075]" : "bg-transparent"} shadow-[0_0_0_5000px_#1D1D1F]`}
      />
      {children}
    </DroppableArea>
  );
};

export default SceneBoard;
