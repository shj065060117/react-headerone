import React from 'react';
import './header.less';

class Header extends React.Component{
    constructor(...args){
        super(...args);
    }
    render(){
        return(
            <div className="headers">
                <a href="">Home</a>
                <a href="">DivCss</a>
                <a href="">H5Css3</a>
                <a href="">Js</a>
                <a href="">Php</a>
                <a href="">MySql</a>
                <a href="">CMS</a>
                <a href="">WampS</a>
             </div>
        );
    }
}

export default Header;