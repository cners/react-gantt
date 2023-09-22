
import React from "react";
import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "task1",
      id: "task1",
      progress: 100,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
      icon: <span style={{color: 'red'}}>🚀</span>
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: "task1-1task1-1task1-1task1-1task1-1task1-1task1-1我超出了就会出来",
      id: "task1-1",
      progress: 100,
      showProcess: false,
      
      styles:{
        backgroundColor: '#F7F8FA',
        backgroundSelectedColor: '#F7F8FA',
      },
      type: "task",
      project: "task1",
      displayOrder: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "task1-2",
      id: "task1-2",
      progress: 25,
      dependencies: ["task1-1"],
      type: "task",
      project: "task1",
      displayOrder: 3,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "task1-3",
      id: "task1-3",
      progress: 10,
      dependencies: ["task1-1"],
      type: "task",
      project: "task1",
      displayOrder: 4,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "task1-4",
      id: "task1-4",
      progress: 2,
      dependencies: ["task1-3"],
      type: "task",
      project: "task1",
      displayOrder: 5,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "task1-5",
      id: "task1-5",
      type: "task",
      progress: 70,
      dependencies: ["task1-3"],
      project: "task1",
      displayOrder: 6,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "task1-7",
      id: "task1-7",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["task1-5"],
      project: "task1",
      displayOrder: 7,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "task2",
      id: "task2",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
