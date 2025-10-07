const baseClasses = "font-normal";

const variants = {
  small: "leading-[130%] -tracking-[0.32em] text-8xl",
  large: "leading-[110%] -tracking-[0.64em] text-9xl",
  white: "leading-[130%] -tracking-[0.32em] text-8xl text-gradient-white",
};

const Heading = (
  {
    children,
    variant = "large",
    className = "",
    headingVariant = "sub",
    gradientBlueText = "",
    blueText = "",
    whiteText = "",
    whiteSecondText = "",
    blueEndText = "",
    blueTextClass = "",
    ...props
  },
  ref
) => {
  const Tag = headingVariant === "main" ? "h1" : "h2";

  return (
    <Tag
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {whiteText && <span className="text-white">{whiteText} </span>}
      {gradientBlueText && (
        <span className="text-gradient-purple">{gradientBlueText}</span>
      )}
      {blueText && (
        <span className={`text-primary ${blueTextClass}`}>{blueText} </span>
      )}
      {whiteSecondText && (
        <span className="text-white">{whiteSecondText} </span>
      )}
      {blueEndText && <span className="text-primary">{blueEndText}</span>}
      {children}
    </Tag>
  );
};

export default Heading;
