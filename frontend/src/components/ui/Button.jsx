export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        px-5
        py-3
        rounded-xl
        transition-all
        duration-300
        shadow-lg
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </button>
  );
}