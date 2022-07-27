import { Component } from 'react';

class Control extends Component {
    render() {
      console.log('Control이 랜더링됨');
      return (
        <ul>
            <li><a href="/create" onClick={function(event) {
                event.preventDefault(); // 기본 이벤트 제거
                this.props.onChangeMode('create');
            }.bind(this)} >create</a></li>
            <li><a href="/update" onClick={function(event) {
                event.preventDefault(); // 기본 이벤트 제거
                this.props.onChangeMode('update');
                }.bind(this)} >update</a></li>
            <li><input onClick={function(event) {
                event.preventDefault(); // 기본 이벤트
                this.props.onChangeMode('delete');
                }.bind(this)} type='button' value="delete"></input></li> 
        </ul>
      );
    }
}

export default Control;