import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todo:tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }


  useEffect(() => {
    loadSavedTasks();
  }, []);


  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasksAndSave([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isCompleted: false,
      },
    ]);

    setNewTask("");
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    setTasksAndSave(tasksWithoutDeletedOne);
  }

  function handleToggleTask(id: string) {
    const taskWithCompletedOne = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setTasks(taskWithCompletedOne);
  }

  return (
    <div>
      <Header />

      <main className=" flex flex-col items-center max-md:p-5">
        <form
          onSubmit={handleCreateNewTask}
          className="flex gap-2 -mt-8 w-full max-w-[46rem] max-md:flex-col max-md:gap-4 max-md:mt-0"
        >
          <input
            type="text"
            placeholder="Add new task"
            value={newTask}
            onChange={handleTaskChange}
            required
            className="bg-todo-gray-500 p-4 w-full rounded-lg text-gray-100 placeholder:text-todo-gray-300 focus:outline-none focus:ring-2 focus:ring-todo-purple-dark"
          />

          <button 
            disabled={newTask.length===0}
            className={`flex justify-center items-center gap-2 bg-todo-blue-dark text-white text-sm p-4 rounded-lg hover:bg-todo-blue transition-colors max-md:text-xl disabled:bg-todo-blue-dark disabled:hover:bg-todo-blue-dark disabled:cursor-not-allowed disabled:opacity-70`}
          >
            Create <PlusCircle />
          </button>
        </form>

        <Tasks
          tasks={tasks}
          onDeleteTask={deleteTask}
          onCompleteTask={handleToggleTask}
        />
      </main>
    </div>
  );
}
