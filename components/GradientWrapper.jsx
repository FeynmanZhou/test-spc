const GradientWrapper = ({ children, wrapperClassName, ...props }) => (
  <div {...props} className={`relative ${props.className || ""}`}>
    <div
      className={`absolute m-auto blur-[160px] ${wrapperClassName || ""}`}
      style={{
        background: "linear-gradient(180deg, #1E3A8A 0%, #3B82F6 100%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
