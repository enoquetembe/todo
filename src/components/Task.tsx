import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { Trash } from "phosphor-react";

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask:(id: string) => void;
  onComplete:(id: string) => void;
}

export function Task({id, title, isCompleted = false, onDeleteTask, onComplete }: TaskProps) {

  function handleCompleteTask() {
    onComplete(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className="bg-todo-gray-500 flex items-start gap-3 p-4 rounded-lg">
      <Checkbox.Root
        className="flex items-center gap-3 group disabled:cursor-not-allowed"
        onCheckedChange={handleCompleteTask}
        
      >
        <div className="transition-colors flex items-center justify-center w-6 h-6 border-2 rounded-full bg-transparent border-todo-blue group-data-[state=checked]:bg-todo-purple-dark group-data-[state=checked]:border-todo-purple-dark group-data-[state=checked]:hover:bg-todo-purple group-data-[state=checked]:hover:border-todo-purple hover:border-todo-blue-dark">
          <Checkbox.Indicator>
            <Check width={20} className="text-white" />
          </Checkbox.Indicator>
        </div>
      </Checkbox.Root>

      <p className="text-todo-gray-100 text-sm leading-[140%]">{ isCompleted? <s className="text-todo-gray-300 ">{title}</s> : title}</p>

      <button
        title="delete"
        onClick={handleDeleteTask}
        className="text-todo-gray-300 rounded hover:p1 hover:bg-gray-600 hover:text-todo-danger transition-colors"
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
