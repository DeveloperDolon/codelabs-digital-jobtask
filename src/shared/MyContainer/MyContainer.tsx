import { ReactNode } from "react";

interface TMyContainer {
  children: ReactNode;
  className?: string;
}

const MyContainer = ({ children, className }: TMyContainer) => {
  return (
    <div className={`${className} max-w-7xl mx-auto md:px-5 px-4`}>
      {children}
    </div>
  );
};

export default MyContainer;
