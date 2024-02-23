const Input = ({ type, placeholder, value, handleChange, ...props }) => {
  return (
    <>
      <input
        required
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className="outline-none border-b-2 py-4 px-2 border-slate-200 focus:border-sky-300"
        {...props}
      />
    </>
  );
};

export default Input;
