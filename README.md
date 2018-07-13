#### 怎么禁用黄色警告？直接在 React Native 的代码中添加下面的代码：
```
   console.disableYellowBox = true;
```


#### 爱尖子平台采用RN主要是内嵌到现有的原生应用当中，涉及到代码集成
```
   需要App端安装React Native，且React Native相关依赖：。而web端给app端的代码就是bundle文件，是我们npm start生产的。内嵌的时候需要app端配置运行环境，
```

#### React Native 热更新的原理是返回我们编译的bundle文件路径，然后每次更新去替换它，
```
  它的步骤是：判断是否热更新，下载zip包，解压，完事。
  搭建自己的codepush服务器  https://blog.csdn.net/dounine/article/details/78529106
``` 

#### 生成离线bundle包.离线包打包命令:离线包就是把 ReactNative 和你写的 js文件、图片等资源都打包放入 App ，不需要走网络下载。要确保有assets这个文件夹,如果没有请先新建这个文件夹.成功之后会生成index.android.bundle文件.
```
  react-native bundle --entry-file index.js --platform android --dev false --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res/

```