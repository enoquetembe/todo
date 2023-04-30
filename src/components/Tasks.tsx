import { Task } from "./Task";
import { ITask } from "../App";

interface TasksProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: TasksProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  console.log(completedTasks);

  return (
    <section className=" w-full max-w-[46rem] mt-24">
      <header className="flex justify-between items-center pb-6">
        <div className="flex items-center gap-2">
          <p className="text-todo-blue font-bold">Tasks created</p>
          <span className="bg-todo-gray-400 px-2 rounded-full py-[2px] text-todo-gray-200 font-bold">
            {tasks.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-todo-blue font-bold">Completed</p>
          <span className="bg-todo-gray-400 px-2 rounded-full py-[2px] text-todo-gray-200 font-bold">
            {completedTasks} of {totalTasks}
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              onComplete={() => onCompleteTask(task.id)}
              onDeleteTask={() => onDeleteTask(task.id)}
            />
          );
        })}
      </div>
    </section>
  );
}
