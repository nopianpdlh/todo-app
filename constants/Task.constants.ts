import { IColumn, ITask } from "@/types/Task";

const COLUMNS: IColumn[] = [
  {
    id: "TODO",
    title: " To Do",
  },
  {
    id: "IN_PROGRESS",
    title: "In Progress",
  },
  {
    id: "DONE",
    title: "Done",
  },
];

const INITIAL_TASKS: ITask[] = [
  {
    id: "1",
    status: "TODO",
    title: "TUGAS DATA MINING",
    description: "Jurnal menggunakan algoritma C45 ",
  },
  {
    id: "2",
    status: "IN_PROGRESS",
    title: "TUGAS METODELOGI",
    description: "Membuat kutipan ",
  },
  {
    id: "3",
    status: "DONE",
    title: "TUGAS ENTERPRISE ARCHITECTURE",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

export { COLUMNS, INITIAL_TASKS };
