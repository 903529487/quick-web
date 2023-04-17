使用canvas来布局dom的框架，支持react 17以上的hook

## Install

``` bash
$ npm i lucky-web -S
```
## [demo](https://liangbairong.gitee.io/lucky-web/)


## 使用

```tsx
import React from 'react';
import {render, View, ScrollView} from 'lucky-web';

const style = {
    main: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(49, 24, 124, 1)'
    },
}
const App = () => {
    return (
        <ScrollView style = {style.main} > 
            <Text>HELLO WORLD < /Text>
        </ScrollView >
)
}
let height = document.body.clientHeight / (document.body.clientWidth / 750)

const app = render(<App />, document.getElementById('canvas')!, {devicePixelRatio: 1, width: 750, height});

window.addEventListener('resize', () => {
    requestAnimationFrame(() => {
        height = document.body.clientHeight / (document.body.clientWidth / 750)
        app.update({width: 750, height});
    });
});

```

## 组件

### View


#### ViewProps

| Property | Type | Description |
| -: | - | - |
| style | ViewStyle | Inline css|
| pointerEvents | `'auto' \| 'box-none' \| 'none'` | 点击事件接受类型 |
| onLayout | `(Frame): void` | 获取当前布局 |
| onTouchStart | `(RevasTouch): void` | 开始触碰回调 |
| onTouchMove | `(RevasTouch): void` | 触碰移动回调 |
| onTouchEnd | `(RevasTouch): void` | 结束触碰回调 |
| cache | `boolean \| string` | 开启离屏缓存 |
| forceCache | `boolean` | 不等待子组件加载完毕就缓存 |

```jsx
<View {...props} />
```

### Text

#### TextProps

> extends ViewProps

| Property | Type | Description |
| -: | - | - |
| style | `TextStyle` | Inline css|
| numberOfLines | `number` | 溢出隐藏，最多多少行 |

```jsx
<Text numberOfLines={1}>Hello World</Text>
```

## CSS

| Category | Styles |
| -: | - |
| Flexible Layout | **width**, minWidth, maxWidth, **height**, minHeight, maxHeight, **padding**, paddingLeft, **margin**, marginLeft, position, left, top, **flex**, flexDirection, justifyContent, alignItems |
| Box | borderRadius, borderWidth, borderColor, borderTopLeftRadius, shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur, backgroundColor, overflow, opacity |
| Text | fontFamily, fontSize, fontWeight, color, lineHeight, textAlign, wordBreak, fontStyle, textBaseline, textShadowBlur, textShadowColor, textShadowOffsetX, textShadowOffsetY |
| Image | resizeMode |
| Transform | translateX, translateY, rotate, scale, scaleX, scaleY |
| Other | animated, path |
