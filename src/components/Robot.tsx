import React from 'react';
import { useMousePosition } from './hooks/useMousePosition';
import { Heart } from 'lucide-react';

interface RobotProps {
  isHovering: boolean;
}

export const Robot: React.FC<RobotProps> = ({ isHovering }) => {
  const { x, y } = useMousePosition();
  const robotRef = React.useRef<HTMLDivElement>(null);
  const [eyePosition, setEyePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!robotRef.current) return;
    const rect = robotRef.current.getBoundingClientRect();
    const robotCenterX = rect.left + rect.width / 2;
    const robotCenterY = rect.top + rect.height / 2;
    
    // Calculate angle between robot and cursor
    const angle = Math.atan2(y - robotCenterY, x - robotCenterX);
    
    // Maximum movement radius for eyes
    const radius = 5;
    
    // Calculate eye movement
    const eyeX = Math.cos(angle) * radius;
    const eyeY = Math.sin(angle) * radius;
    
    setEyePosition({ x: eyeX, y: eyeY });

    // Subtle robot body movement
    const deltaX = (x - robotCenterX) / 40;
    const deltaY = (y - robotCenterY) / 40;

    robotRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }, [x, y]);

  return (
    <div 
      ref={robotRef}
      className="transition-all duration-300 ease-out robot-float"
      style={{ willChange: 'transform' }}
    >
      <div className="w-48 h-48 bg-gradient-to-b from-white to-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 relative
                    before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-100/50 before:to-transparent 
                    before:rounded-3xl before:z-0">
        <div className="absolute top-6 left-0 right-0 flex justify-center space-x-8 z-10">
          <div 
            className={`transition-all duration-200 transform ${
              isHovering ? 'scale-125' : 'scale-100'
            }`}
            style={{
              transform: `translate(${eyePosition.x}px, ${eyePosition.y}px) ${isHovering ? 'scale(1.25)' : 'scale(1)'}`,
            }}
          >
            <Heart 
              className={`w-8 h-8 ${isHovering ? 'fill-red-500 stroke-red-600' : 'fill-red-400 stroke-red-500'}`}
              strokeWidth={1.5}
            />
          </div>
          <div 
            className={`transition-all duration-200 transform ${
              isHovering ? 'scale-125' : 'scale-100'
            }`}
            style={{
              transform: `translate(${eyePosition.x}px, ${eyePosition.y}px) ${isHovering ? 'scale(1.25)' : 'scale(1)'}`,
            }}
          >
            <Heart 
              className={`w-8 h-8 ${isHovering ? 'fill-red-500 stroke-red-600' : 'fill-red-400 stroke-red-500'}`}
              strokeWidth={1.5}
            />
          </div>
        </div>
        
        {/* Robot face details */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
          <div className="w-16 h-2 bg-gray-300 rounded-full" />
        </div>
        
        {/* 3D effect elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 rounded-3xl" />
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          <div className="w-4 h-4 bg-gradient-to-b from-white to-gray-100 rounded-full shadow-lg" />
          <div className="w-4 h-4 bg-gradient-to-b from-white to-gray-100 rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  );
};