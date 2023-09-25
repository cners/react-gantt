import { Task, TaskType } from "./public-types";

export interface BarTask extends Task {
  index: number;
  typeInternal: TaskTypeInternal;
  x1: number;
  x2: number;
  y: number;
  height: number;
  progressX: number;
  progressWidth: number;
  /** 显示进度条 */
  // showProcess?: boolean;
  barCornerRadius: number;
  handleWidth: number;
  barChildren: BarTask[];
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    fontColor?:string;
    progressColor: string;
    progressSelectedColor: string;

    /** 头像字体颜色和背景色 */
    profileColor?:string;
    profileBackgroundColor?:string;
  };
}

export type TaskTypeInternal = TaskType | "smalltask";
