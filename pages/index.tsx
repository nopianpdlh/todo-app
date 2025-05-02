import Button from "@/pages/components/Button";
import { COLUMNS, INITIAL_TASKS } from "./constants/Task.constants";
import Column from "./components/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { ITask } from "./types/Task";
const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([...INITIAL_TASKS]);

  useEffect(() => {
    const storeTasks = localStorage.getItem("tasks");
    if (storeTasks) {
      setTasks(JSON.parse(storeTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
    const taskId = active.id as string;
    const newStatus = over.id as ITask["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };
  return (
    <main className="min-h-screen p-4">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-700">
          {" "}
          Task Management
        </h1>
        <Button>Add Task</Button>
      </div>
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
        </DndContext>
      </div>
    </main>
  );
};
export default App;
