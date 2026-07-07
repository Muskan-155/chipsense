function Button({
  text,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-xl font-semibold text-white
      bg-purple-600 hover:bg-purple-700
      transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;