import { Task } from "./Task";

export function Tasks() {
  return (
    <section className=" w-full max-w-[46rem] mt-24">
      <header className="flex justify-between items-center pb-6">
        <div className="flex items-center gap-2">
          <p className="text-todo-blue font-bold">Tasks created</p>
          <span className="bg-todo-gray-400 px-2 rounded-full py-[2px] text-todo-gray-200 font-bold">
            10
          </span>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-todo-blue font-bold">Completed</p>
          <span className="bg-todo-gray-400 px-2 rounded-full py-[2px] text-todo-gray-200 font-bold">
            3 of 10
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        <Task/>
        <Task/>
      </div>
    </section>
  );
}
