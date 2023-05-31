# 移动端问题大全

## 关于移动端顶部适配问题修复

> 一种是使用安全区域的CSS样式
```
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

> 如果有些不兼容的情况，就要使用媒体查询进行单独适配
```
/*iOS刘海屏兼容代码*/
@media only screen and (min-height: 812px) and (-webkit-device-pixel-ratio: 3) {}
/*iOS iPhone XR刘海屏兼容代码*/
@media only screen and (min-height: 812px) and (-webkit-device-pixel-ratio: 2) {}
```