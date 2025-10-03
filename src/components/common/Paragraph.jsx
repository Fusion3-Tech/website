const baseClasses = "font-normal text-white-60";

const variants = {
  small: "text-2xl font-medium leading-150",
  large: "text-3xl leading-150 font-normal",
  extraLarge: "text-4xl leading-145 font-medium",
};

const Paragraph = (
  { children, variant = "small", className = "", ...props },
  ref
) => {
  return (
    <p
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
