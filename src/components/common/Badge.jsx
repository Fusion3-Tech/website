const Badge = ({ children, className = "", center = false }) => {
  return (
    <span
      className={`${className} font-semibold text-xs leading-150 -tracking-32 text-white ${
        center ? "mx-auto block text-center" : ""
      }`}
    >
      {children}
    </span>
  );
};

export default Badge;
    