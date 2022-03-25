export const Button = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className={`  hover:bg-blue-800 border text-white font-bold py-2 px-4 rounded ${className} `}
      {...props}
    ></button>
  );
};
