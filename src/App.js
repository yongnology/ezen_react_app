// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: {title: '웹카페(webCafe)!!', sub: '웹표준에 대해서 알아봅시다.!'},
      welcome: {title: '환영합니다.', desc: '리엑트 수업을 환영합니다.'},
      contents: [
        {id:1, title:'HTML', desc:'html이란 마크업 언어로 홈페이지를 뼈대를 말한다.'},
        {id:2, title:'CSS', desc:'css란 홈페이지 꾸미고 레이아웃을 설정 기능'},
        {id:3, title:'JavaScript', desc: '정적인 홈페이지를 동적으로 변환'}
      ]
    };
  }
  render () {
    console.log('웹앱이 랜더링됨');
    var _title, _desc = null, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;  // _title = '환영합니다.'
      _desc = this.state.welcome.desc;  // _desc = '리엑트 수업을 환영합니다.'
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      var i = 0;
      while (i<this.state.contents.length){
        var data=this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    } else if (this.state.mode ===  'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id +1;
        // push 방법
        /*
        this.state.contents.push({
          id:this.max_content_id,
          title:_title,
          desc: _desc
        });
        this.setState({
          contents:this.state.contents
        });
        */

        // concat 방법
       var _contents = this.state.contents.concat({
         id:this.max_content_id,
         title:_title,
         desc: _desc
        });
        this.setState({
          contents:_contents
        });
      }.bind(this)}> </CreateContent>
    };
    
    console.log("런더링중...", this);
      return (
        <div className='app'>
          <Subject title={
            this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage={function() {
              // alert("컴포넌트 페이지가 바뀌었다.");
              this.setState({mode: 'welcome'});
            }.bind(this)}></Subject>
            
          <TOC onChangePage={function(id) {
             // debugger;
            // alert('TOC 컴포넌트 클릭');
            this.setState({ // setState = State 값을 수정
              mode : "read",
              selected_content_id : Number(id)}
              );
          }.bind(this)}
          data={this.state.contents}></TOC>  {/* data는 배열 객체를 갖는다. */}
          <Control onChangeMode={function (_mode) {
            this.setState({
              mode : _mode,
            });
          }.bind(this)}></Control>
          {_article}
        </div>
      );
    }
}


export default App;
