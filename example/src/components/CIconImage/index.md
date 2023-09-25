---
group: 基础组件
title: 图标--图片
---
# CIconImage

这里是自定义的图片图标。建议统一使用svg文件


<code src='./demo/demo1.tsx'></code>

```tsx
/**
 * title: 修改尺寸
 * 
 */
import {CIconImage_Note} from 'csix'

export default ()=>{
    return <div>
        <CIconImage_Note style={{width:'20px'}} />
        <br/>
        <br/>
        <CIconImage_Note style={{width:'40px'}} />
    </div>
}
```