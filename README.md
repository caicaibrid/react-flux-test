# react-flux-test

> * 用户访问 View
> * View 发出用户的 Action
> * Dispatcher 收到 Action，要求 Store 进行相应的更新
> * Store 更新后，发出一个"change"事件
> * View 收到"change"事件后，更新页面

![](img/dataflow.png)

