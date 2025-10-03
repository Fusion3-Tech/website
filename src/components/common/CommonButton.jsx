import Link from "next/link";

const CommonButton = ({
  children,
  variant = "light",
  onClick,
  className = "",
  disabled = false,
  href,
  target,
  ...props
}) => {
  const baseClasses =
    "common-btn text-xl font-funnel font-semibold text-center leading-150 text-white";
  const variantClasses =
    variant === "light" ? "common-btn-light" : "common-btn-dark";
  const disabledClasses = disabled ? "common-btn-disabled" : "";

  const buttonClasses =
    `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`.trim();

  // If href is provided and not disabled, render as link
  if (href && !disabled) {
    // Check if it's an external link
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      // Use regular anchor tag for external links
      return (
        <Link
          href={href}
          target={target || "_blank"}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={buttonClasses}
          onClick={onClick}
          {...props}
        >
          {children}
        </Link>
      );
    }

    // Use Next.js Link for internal navigation
    return (
      <Link href={href} className={buttonClasses} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  // Default button behavior
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonButton;
