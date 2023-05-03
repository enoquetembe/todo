import { Task } from "./Task";
import { ITask } from "../App";
import { ClipboardText } from "phosphor-react";

interface TasksProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: TasksProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

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
        {
          tasks.length > 0 ? tasks.map((task) => {
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
          }) : 
          <div className="flex flex-col items-center text-center gap-4 text-base">
            <ClipboardText size={56} className="text-todo-gray-400"/>
            <div>
              <p className="text-todo-gray-300 font-bold">
                You don't have tasks registered yet
              </p>

              <p className="text-todo-gray-300">
                Create tasks and organize your to-do items
              </p>
            </div>
          </div>
        }
      </div>
    </section>
  );
}
