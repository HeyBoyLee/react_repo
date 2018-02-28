import React from 'react';

class Like extends React.Component{
  constructor(){
    super();
    this.state= {liked: false, ok:true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({liked: !this.state.liked});
  }

  render(){
    let text = this.state.liked?'喜欢':'不喜欢';
    return (
      <div>
      <p onClick={this.handleClick}>
        你<b>{text}</b>我。点我切换状态
      </p></div>
    )
  }
}

export default Like;