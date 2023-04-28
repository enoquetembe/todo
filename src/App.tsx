import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <div>
      <Header />

      <main className=" flex flex-col items-center max-md:p-5">
        <form className="flex gap-2 -mt-8 w-full max-w-[46rem] max-md:flex-col max-md:gap-4 max-md:mt-0">
          <input
            type="text"
            placeholder="Add new task"
            className="bg-todo-gray-500 p-4 w-full rounded-lg text-gray-100 placeholder:text-todo-gray-300 focus:outline-none focus:ring-2 focus:ring-todo-purple-dark"
          />

          <button className="flex justify-center items-center gap-2 bg-todo-blue-dark text-white text-sm p-4 rounded-lg hover:bg-todo-blue transition-colors max-md:text-xl">
            Create <PlusCircle />
          </button>
        </form>

        <Tasks />
      </main>
    </div>
  );
}
