import React from "react";
import style from "./bar.module.css";
import useMeasure from 'react-use-measure'

type BarDisplayProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  isSelected: boolean;
  /* progress start point */
  progressX: number;
  progressWidth: number;
  showProcess?: boolean;
  barCornerRadius: number;
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    progressColor: string;
    progressSelectedColor: string;
  };
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  extendValues?: Partial<{
    suffix?: string
    prefix?: string
  }>
};
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  width,
  height,
  isSelected,
  progressX,
  progressWidth,
  showProcess,
  barCornerRadius,
  styles,
  onMouseDown,
  extendValues
}) => {
  const getProcessColor = () => {
    return isSelected ? styles.progressSelectedColor : styles.progressColor;
  };

  const getBarColor = () => {
    return isSelected ? styles.backgroundSelectedColor : styles.backgroundColor;
  };
  const RenderDateText:React.FC = () => {
    const { prefix, suffix } = extendValues || {}
    const [ref, { width: textWidth }] = useMeasure()
    return <g>
      <text ref={ref} x={x-(textWidth + 10)} y={y + 20} color={'#374557'}>{prefix}</text>
      <text x={x + width + 10} y={y+20} color={'#374557'}>{suffix}</text>
    </g>
  }
  return (
    <g onMouseDown={onMouseDown}>
      {/* 时间范围展示的背景条 */}
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getBarColor()}
        className={style.barBackground}

      />
      {/* 进度条 */}
      {showProcess && <rect
        x={progressX}
        width={progressWidth}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getProcessColor()}
      />}
      {/* 显示开始时间和结束时间 */}
      <RenderDateText />
    </g>
  );
};
