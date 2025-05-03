import { useDroppable } from "@dnd-kit/core";
import { IColumn, ITask } from "../types/Task";
import TaskCard from "./TaskCard";

interface ColumnProps {
  column: IColumn;
  tasks: ITask[];
  key?: string;
}

const Column = (props: ColumnProps) => {
  const { column, tasks, key } = props;
  const { setNodeRef, over } = useDroppable({
    id: column.id,
  });
  return (
    <div
      key={key}
      className={`flex flex-1 w-80 flex-col rounded-lg bg-neutral-100 p-4 ${
        over?.id === column.id &&
        "bg-neutral-200 outline-blue-500 outline-dashed"
      }`}
    >
      <h2 className="mb-4 font-semibold text-neutral-700">{column.title}</h2>
      <div ref={setNodeRef} className=" flex flex-col gap-4  flex-1">
        {tasks.map((task, index) => (
          <TaskCard key={`${column.id}-${index}`} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
