import { FC, useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

interface IProps {
  children: React.ReactNode;
  perspective?: number;
  scale?: number;
  className?: string;
}

const CustomTilt: FC<IProps> = ({
  children,
  perspective,
  scale,
  className,
}) => {
  const [isMobileView, setIsMobileView] = useState<boolean | null>(null);

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768;
    const handleResize = () => {
      setIsMobileView(isMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobileView ? (
        children
      ) : (
        <Tilt perspective={perspective} scale={scale} className={className}>
          {children}
        </Tilt>
      )}
    </>
  );
};

export default CustomTilt;
