const Input = (props) => {
  return (
    <input
      className="w-full max-w-lg py-1 pl-5 dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400 caret-alura-200 dark:caret-alura-100"
      {...props}
    />
  );
};

export default Input;
