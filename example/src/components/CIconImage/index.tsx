//@ts-nocheck
import React from "react"
import classNames from "classnames"
import './index.less'

import Logo from './images/6fenyi_logo.svg'

import Icon1Task from "./images/icon1_task.svg"
import Icon2Bug from "./images/icon2_bug.svg"
import Icon3Fabuxuqiu from "./images/icon3_fabuxuqiu.svg"
import Icon4Note from "./images/icon4_note.svg"
import Icon5Link from "./images/icon5_link.svg"
import Icon6Tree from "./images/icon6_tree.svg"
import Icon7ArrowDown from './images/icon7_arrow_down.svg'
import Icon8Flag from './images/icon8_flag.svg'
import Icon9Drag from './images/icon9_drag.svg'
import Icon10EyeClosed from './images/icon10_eye2.svg'
import Icon11Sprint from './images/icon11_sprint.svg'
import Icon12SprintGray from './images/icon12_sprint_gray.svg'
import Icon13Date from './images/icon13_date.svg'

import Icon20Parent from './images/icon20_parent.svg'
import Icon21Children from './images/icon21_children.svg'
import Icon22Pre from './images/icon22_pre.svg'
import Icon23Next from './images/icon23_next.svg'
import Icon24Relation from './images/icon24_relation.svg'

interface CIconImageProps {
    style?: React.CSSProperties
    className?: string
    [key: string]: any
}

export const CIconImage_Task: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon1Task} />
    </span>

}

export const CIconImage_Bug: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon2Bug} />
    </span>

}

export const CIconImage_Fabuxuqiu: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon3Fabuxuqiu} />
    </span>

}

export const CIconImage_Note: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon4Note} />
    </span>
}


export const CIconImage_Link: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon5Link} />
    </span>
}


export const CIconImage_Tree: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon6Tree} />
    </span>
}

export const CIconImage_ArrowDown: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon7ArrowDown} />
    </span>
}

// 黑色小旗子
export const CIconImage_Flag: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon8Flag} />
    </span>
}

export const CIconImage_6FenyiLogo: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Logo} />
    </span>
}

// 拖拽
export const CIconImage_Drag: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon9Drag} />
    </span>
}


// 闭眼
export const CIconImage_EyeClosed: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon10EyeClosed} />
    </span>
}

// 冲刺跑的小人
export const CIconImage_Sprint: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon11Sprint} />
    </span>
}

// 灰色冲刺小人
export const CIconImage_SprintGray: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon12SprintGray} />
    </span>
}

// 日期
export const CIconImage_Date: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon13Date} />
    </span>
}

// 5个父任务、子任务、前置任务、后置任务、关联任务
export const CIconImage_Parent: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon20Parent} />
    </span>
}

export const CIconImage_Children: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon21Children} />
    </span>
}

export const CIconImage_Pre: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
    <img src={Icon22Pre} />
</span>
}

export const CIconImage_Next: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon23Next} />
    </span>
}
export const CIconImage_Relation: React.FC<CIconImageProps> = (props) => {
    const { style, className, ...restProps } = props
    return <span className={classNames('cicon-image-wrap', className)} style={style} {...restProps}>
        <img src={Icon24Relation} />
    </span>
}