import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="bg-todo-gray-700 h-[200px] flex justify-center items-center">
      <img src={Logo} alt="Todo" />
    </header>
  );
}
