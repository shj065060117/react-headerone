import React from 'react';
import Search from './search';//引用中间组件
import './content.less';

let iNum=0;
class Content extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            title:"美女",
            num:0,
            indexList:[],//当前渲染的页面数据
            totalData:[],
            current: 1, //当前页码
            pageSize:8, //每页显示的条数
            goValue:0,  //要去的条数index
            totalPage:0//总页数
        }
    }
    componentDidMount(){
        this.ajax(this.state.title);
    }
    ajax(str){
        var This=this;
        $.ajax({
            type:"get",
            url:"http://www.toutiao.com/search_content/?offset=40&format=json&keyword="+str+"&autoload=true&count=40&cur_tab=1",
            dataType:"jsonp",
            success:function(data){
                var nData=data.data;
                console.log(nData);
                for(var i=0;i<nData.length;i++){
                    if(nData[i].image_url==undefined){
                        nData[i].image_url="/images/1.jpg"
                        console.log(nData[i].image_url);
                    }
                }
                let leng=Math.ceil( This.state.totalData.length/This.state.pageSize);
                This.setState({
                    totalData: nData
                });
                This.setState({
                    totalPage:Math.ceil( This.state.totalData.length/This.state.pageSize)
                });
                console.log(This.state.totalPage);
                This.pageNext(This.state.goValue);

            }
        })
    }
    setPage(num){
        this.setState({
            indexList:this.state.totalData.slice(num,num+this.state.pageSize)
        })
    }
    pageNext (num) {
         this.setPage(num)
    }
    //下一页
    setNext(){

        if(this.state.current < this.state.totalPage){
            this.setState({
                current:this.state.current + 1
            });
            iNum+= this.state.pageSize
            console.log(iNum);
            this.pageNext(iNum);

        }
    }

    //上一页
    setUp(){

        if(this.state.current > 1){
            this.setState({
                current:this.state.current - 1
            })
            iNum=iNum- this.state.pageSize
            this.pageNext(iNum);
        }
    }
    setkeywords(str){
        this.ajax(str);
        this.setState({
            title:str
        });

    }
    render(){
        let listEle=this.state.indexList.map(function(Item){
                return(
                    <li> <a href={Item.url}><img src={Item.image_url} /><span>{Item.title}</span></a> </li>
                )
        });
        return(
            <div>
                <Search onkeywords={this.setkeywords.bind(this)}></Search>
                <ul className="list">{listEle}</ul>
                <div className="change_page">
                    <span onClick={ this.setUp.bind(this)} >上一页</span>
                    <span>{ this.state.current }页/ { this.state.totalPage }页</span>
                    <span onClick={this.setNext.bind(this)}>下一页</span>
                </div>
            </div>
        )
    }
}


export default Content;