const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Learn new course" },
    "task-4": { id: "task-4", content: "Dinner time" },
    "task-5": { id: "task-5", content: "Cooking" },
    "task-6": { id: "task-6", content: "Breakfast" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-5"]
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-6"]
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

export default initialData;
