import React from 'react';
import './search.less';

class Search extends React.Component{
    constructor(...args){
        super(...args);
        this.state={keywords:"美女"}
    }
    search(){
        var str=this.refs.keywords.value;
        this.props.onkeywords(str)
    }
    render(){
        return(
            <div className="search">
                <input className="text" type="text" ref="keywords" />
                <input className="btn" type="button" onClick={this.search.bind(this)} value="搜索" />
            </div>
    );
    }
}

export default Search;