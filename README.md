# Part2 | 模块二

## 一、简答题

### 第一题

**Question**：Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

**Answer**：

Webpack 的构建流程：Webpack在启动后，会从 Entry 入口开始，递归解析 Entry 所依赖的所有 Module。每找到一个 Module，就会根据 Module.rules 里配置的 Loader 规则进行相应的转换处理，对Module进行转换后，再解析出当前 Module 依赖的 Module。这些 Module 会以 Entry 为单位进行分组，即为一个 Chunk。因此一个 Chunk，就是一个 Entry 及其所有依赖的 Module 合并的结果。最后 Webpack 会将所有的 Chunk 转换成文件输出 Output 。在整个构建流程中，Webpack 会在恰当的时机执行 Plugin 里定义的逻辑，从而完成Plugin插件的优化任务。

### 第二题

**Question**：Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

**Answer**：

区别：

- Loader（加载器）： Loader 用于对模块的源代码进行转换。Webpack本身只能加载处理 js 文件，如果要加载处理其它文件久需要另外安装 loader。loader是单纯的文件转换。
- Plugin（插件）：Plugin 是用来扩展 Webpack 功能的。通过 plugin，webpack 可以实现 loader 不能实现的复杂功能，plugin 可以作用于整个生命周期，实现对webpack 的自定义功能扩展。plugin基于事件机制工作，会监听 webpack 打包过程中的某些节点执行任务。

Loader 和 Plugin 的思路：

- Loader：一个 Loader 其实就是一个 Node.js 模块，这个模块需要导出一个函数。这个导出的函数的工作就是获得处理前的原内容，对原内容执行处理后，返回处理后的内容。
- Plugin：Plugin 需要导出一个类，类里面需要实现一个 apply 方法。在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack提供的 API 改变输出的结果。

## 二、编程题

### 第一题

**Question**：使用 Webpack 实现 Vue 项目打包任务

**Answer**：在代码以及视频中。