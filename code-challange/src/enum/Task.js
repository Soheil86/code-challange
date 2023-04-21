interface Task {
  id: number;
  effort: number;
  name: string;
  description: string;
}

interface TaskList {
  tasks: Task[];
}

export { Task, TaskList }
