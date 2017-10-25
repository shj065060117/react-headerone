import React from 'react';
import {render} from 'react-dom';
import Header from './components/header';//引用头部组件
import Content from './components/content';//引用中间组件
import './index.less';//引用CSS样式文件

render(
    <div>
        <Header></Header>
        <Content></Content>
    </div>,

    document.getElementById("App")
);

