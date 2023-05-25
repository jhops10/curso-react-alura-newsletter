import Input from '../Input';

const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };
  return (
    <form
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5"
      onSubmit={safeSubmit}
    >
      <Input type="text" required placeholder="Insira seu nome" />
      <Input type="email" required placeholder="Insira seu e-mail" />
      <button
        className="w-full max-w-sm py-1 px-5 bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 dark:text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black hover:-translate-y-1 hover:delay-200"
        type="submit"
      >
        Seguir
      </button>
    </form>
  );
};

export default Form;
