import { useDraggable } from "@dnd-kit/core";
import { ITask } from "../../types/Task";
import { HiDotsHorizontal } from "react-icons/hi";
import { useState } from "react";
import { ISelectedTask } from "../../types/Task";

interface TaskCardProps {
  task: ITask;
  key?: string;
  setSelectedTask: ({ activity, task }: ISelectedTask) => void;
}

const TaskCard = (props: TaskCardProps) => {
  const { task, key, setSelectedTask } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const [showDropDown, setShowDropDown] = useState(false);

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      key={key}
      style={style}
      className="flex justify-between cursor-grab rounded-lg bg-neutral-50 p-4 shadow-sm hover:shadow-md "
    >
      <div className="flex flex-col max-w-full ">
        <h3 className="font-medium text-neutral-700 break-words max-w-full ">
          {task.title}
        </h3>
        <p className="mt-2 text-sm text-neutral-500 break-words max-w-full">
          {task.description}
        </p>
      </div>
      <div
        className="cursor-pointer relative h-fit "
        onMouseEnter={() => setShowDropDown(true)}
        onMouseLeave={() => setShowDropDown(false)}
      >
        <HiDotsHorizontal className="" />
        <div
          className={`absolute right-0 top-0 p-2 w-48  rounded-lg bg-white shadow-md transition-all duration-200 ${
            showDropDown ? "flex flex-col" : "hidden"
          }`}
        >
          <div
            className="cursor-pointer p-2 rounded-md hover:bg-neutral-100"
            onMouseDown={() => setSelectedTask({ activity: "update", task })}
          >
            Update
          </div>
          <div
            className=" text-red-500 cursor-pointer p-2 rounded-md hover:bg-neutral-100"
            onMouseDown={() => setSelectedTask({ activity: "delete", task })}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
