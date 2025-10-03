const VisionBadge = ({ children, icon, className }) => {
  return (
    <div className={`${className} vision-badge font-normal text-xl text-white`}>
      <div className="icon-wrapper">
        {icon}
        <div className="icon-shadow"></div>
      </div>
      {children}
    </div>
  );
};

export default VisionBadge;
