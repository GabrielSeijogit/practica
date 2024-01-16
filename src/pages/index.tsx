import { Task } from "@/components/Task";
import { Tasks } from "@/helpers/consignas";
import { useState } from "react";

export default function Home() {
  const [isOpenTask, setIsOpenTask] = useState<boolean[]>(
    Array(Tasks.length).fill(false)
  );

  const handleOpenTask = (index: number) => {
    setIsOpenTask((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="p-5 min-w-72">
      <div className="flex flex-col space-y-2">
        <p className="text-4xl mb-2">Ejercicios</p>
        <p className="text-xl mb-2">
          Cada ejercicio tiene su propio componente donde vas a resolver la
          tarea
        </p>

        {Tasks.map((task, index) => (
          <Task
            key={task.numberTask}
            handleClick={() => handleOpenTask(index)}
            isOpen={isOpenTask[index]}
            numberTask={task.numberTask}
          >
            <div className="p-2">
              <p className="text-slate-700 font-semibold">Descripcion:</p>{" "}
              {task.description}
              <div className="w-full bg-gray-600 h-0.5" />
              <p className="text-slate-700 font-semibold">
                Resultado esperado:
              </p>{" "}
              {task.expectedResult}
              <div className="w-full bg-gray-600 h-0.5" />
              {task.exercise && task.exercise}
            </div>
          </Task>
        ))}
      </div>
    </div>
  );
}
