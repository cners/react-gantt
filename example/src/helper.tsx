
import React from "react";
import { Task } from "../../dist/types/public-types";
import { CIconImage_Task } from "./components/CIconImage";
import { Space } from "antd";

const renderTaskName = (name: string) =>
  <Space>
    <CIconImage_Task style={{ width: '20px' }} />
    <div className="gantt-task-name-custome">{name}</div>
  </Space>

// 三种任务条颜色
const taskColor = {
  todo: { color: '#152E43', backgroundColor: '#B3BCC4', profile: { color: '#FFF', backgroundColor: '#479F99' } },
  doing: { color: '#FFFFF', backgroundColor: '#374557', profile: { color: '#FFF', backgroundColor: '#479F99' } },
  done: { color: '#FFF', backgroundColor: '#479F99', profile: { color: '#479F99', backgroundColor: '#FFF' } },
}

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "task1",
      renderName: renderTaskName,
      id: "task1",
      progress: 100,
      type: "project",
      hideChildren: false,
      hideNameOnBar: true,
      displayOrder: 1,
      styles: {
        backgroundColor: taskColor.done.backgroundColor,
        backgroundSelectedColor: taskColor.done.backgroundColor,
        fontColor: taskColor.done.color,
        profileBackgroundColor: taskColor.done.profile.backgroundColor,
        profileColor: taskColor.done.profile.color,
      },
      // 禁止拖拽、修改进度，纯展示
      isDisabled: true,
      user: 'Job',
      depth: 1,
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
      renderName: renderTaskName,
      hideNameOnBar: true,
      id: "task1-1",
      progress: 100,
      showProcess: false,

      styles: {
        backgroundColor: '#F7F8FA',
        backgroundSelectedColor: '#F7F8FA',
      },
      type: "task",
      project: "task1",
      displayOrder: 2,
      isDisabled: true,
      user: '李佳思',
      depth: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "task1-2",
      renderName: renderTaskName,
      hideNameOnBar: true,
      id: "task1-2",
      progress: 25,
      dependencies: ["task1-1"],
      type: "project",
      project: "task1",
      hideChildren: false,
      displayOrder: 3,
      isDisabled: true,
      user: '丈非',
      styles: {
        backgroundColor: taskColor.done.backgroundColor,
        backgroundSelectedColor: taskColor.done.backgroundColor,
        fontColor: taskColor.done.color,
        profileBackgroundColor: taskColor.done.profile.backgroundColor,
        profileColor: taskColor.done.profile.color,
      },
      depth: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "task1-3",
      renderName: renderTaskName,
      hideNameOnBar: true,
      id: "task1-3",
      progress: 10,
      dependencies: ["task1-1"],
      type: "task",
      project: "task1-2",
      displayOrder: 4,
      isDisabled: true,
      depth: 3,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "task1-4",
      renderName: renderTaskName,
      hideNameOnBar: true,
      id: "task1-4",
      progress: 2,
      // dependencies: ["task1-3"],
      type: "task",
      project: "task1",
      displayOrder: 5,
      isDisabled: true,
      depth: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "task1-5",
      renderName: renderTaskName,
      hideNameOnBar: true,
      id: "task1-5",
      type: "task",
      progress: 70,
      dependencies: ["task1-3"],
      project: "task1",
      displayOrder: 6,
      isDisabled: true,
      depth: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "task1-7",
      renderName: renderTaskName,
      hideNameOnBar: true,
      id: "task1-7",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["task1-5"],
      project: "task1",
      displayOrder: 7,
      isDisabled: true,
      depth: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "task2",
      renderName: renderTaskName,
      hideNameOnBar: true,
      id: "task2",
      progress: 0,
      isDisabled: true,
      type: "task",
      depth: 1,
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
