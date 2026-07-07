function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        px-4
        py-3
        rounded-xl
        border
        border-purple-300
        bg-white
        text-gray-800
        placeholder-gray-400
        outline-none
        focus:border-purple-600
        focus:ring-2
        focus:ring-purple-200
        transition-all
      "
    />
  );
}

export default Input;