
import { Task } from "../../dist/types/public-types";

// const renderTaskName = (id:string,name: string,extras:any) =>
//   <Space>
//     <CIconImage_Task style={{ width: '20px' }} />
//     <div className="gantt-task-name-custome">{name}</div>
//   </Space>

// 三种任务条颜色
// const taskColor = {
//   todo: { color: '#152E43', backgroundColor: '#B3BCC4', profile: { color: '#FFF', backgroundColor: '#479F99' } },
//   doing: { color: '#FFFFF', backgroundColor: '#374557', profile: { color: '#FFF', backgroundColor: '#479F99' } },
//   done: { color: '#FFF', backgroundColor: '#479F99', profile: { color: '#479F99', backgroundColor: '#FFF' } },
// }

export function initTasks() {
  // const currentDate = new Date();
  const tasks: Task[] = [
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.908Z"),
        "end":  new Date("2023-10-17T14:26:33.908Z"),
        "name": "任务列表选择不了负责人",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23353694746",
        "progress": 100,
        "type": "task",
        "displayOrder": 2,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.908Z"),
        "end":  new Date("2023-11-29T16:00:00.000Z"),
        "name": "客户管理",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 20
        },
        "id": "23347624386",
        "progress": 100,
        "type": "task",
        "displayOrder": 3,
        "styles": {
            "backgroundColor": "#374557",
            "backgroundSelectedColor": "#374557",
            "fontColor": "#FFFFF",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.909Z"),
        "end":  new Date("2023-10-17T14:26:33.909Z"),
        "name": "订单管理",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 20
        },
        "id": "23348576322",
        "progress": 100,
        "type": "task",
        "displayOrder": 4,
        "styles": {
            "backgroundColor": "#374557",
            "backgroundSelectedColor": "#374557",
            "fontColor": "#FFFFF",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.909Z"),
        "end":  new Date("2023-10-17T14:26:33.909Z"),
        "name": "商机管理",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 20
        },
        "id": "23348510942",
        "progress": 100,
        "type": "task",
        "displayOrder": 5,
        "styles": {
            "backgroundColor": "#374557",
            "backgroundSelectedColor": "#374557",
            "fontColor": "#FFFFF",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.909Z"),
        "end":  new Date("2023-10-17T14:26:33.909Z"),
        "name": "任务详情左侧不对",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23351940626",
        "progress": 100,
        "type": "task",
        "displayOrder": 6,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.909Z"),
        "end":  new Date("2023-10-15T16:00:00.000Z"),
        "name": "给任务增加默认详情模版",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23881826450",
        "progress": 100,
        "type": "task",
        "displayOrder": 7,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.910Z"),
        "end":  new Date("2023-10-17T14:26:33.910Z"),
        "name": "制作员工手册",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23546917874",
        "progress": 100,
        "type": "task",
        "displayOrder": 8,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.910Z"),
        "end":  new Date("2023-10-17T14:26:33.910Z"),
        "name": "任务管理",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23626575326",
        "progress": 100,
        "type": "project",
        "hideChildren": false,
        "displayOrder": 9,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.910Z"),
        "end":  new Date("2023-10-17T14:26:33.910Z"),
        "name": "任务列表",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23627141830",
        "progress": 100,
        "type": "task",
        "displayOrder": 10,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 2,
        "project": "23626575326",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.910Z"),
        "end":  new Date("2023-10-17T14:26:33.910Z"),
        "name": "产品管理",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23348664126",
        "progress": 100,
        "type": "task",
        "displayOrder": 11,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start":  new Date("2023-10-17T14:26:33.910Z"),
        "end":  new Date("2023-10-17T14:26:33.910Z"),
        "name": "项目管理",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23626604382",
        "progress": 100,
        "type": "project",
        "hideChildren": false,
        "displayOrder": 12,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 1,
        "project": "0",
        "dependencies": []
    },
    {
        "hidden": true,
        "start": new Date("2023-10-17T14:26:33.910Z"),
        "end": new Date("2023-10-17T14:26:33.910Z"),
        "name": "项目列表展示",
        "hideNameOnBar": true,
        "renderNameExtrasParams": {
            "type": 10
        },
        "id": "23938819726",
        "progress": 100,
        "type": "task",
        "displayOrder": 13,
        "styles": {
            "backgroundColor": "#B3BCC4",
            "backgroundSelectedColor": "#B3BCC4",
            "fontColor": "#152E43",
            "profileBackgroundColor": "#479F99",
            "profileColor": "#FFF"
        },
        "isDisabled": true,
        "user": "无",
        "depth": 2,
        "project": "23626604382",
        "dependencies": []
    }
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
