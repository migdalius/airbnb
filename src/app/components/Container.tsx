"use client";

interface ContainerProps {
  children: React.ReactNode;
}
// React.ReactNode is a type that represents the possible types that can be
//  rendered as children within a React component. It is a union type that
//  includes various types such as JSX elements, strings, numbers, booleans,
//  null, and undefined.
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
