import { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate (newProps, newState) { // 컴포넌트가 바뀌었는지 ? = 상태가 바뀔때마다.
        console.log("==> TOC의 컴포넌트가 수정되어 랜더링됨", 
        newProps.data,
        this.props.data // 현재 갖고 있는 값
        );
        if(newProps.data === this.props.data) { // 클릭만 했을 뿐 바뀌지 않았다면
            return false;
        }
        // return false; // false를 했기 떄문에 아래 render()가 실행되지 않는다.
        return true;
    }
    render() {
        console.log('TOC이 랜더링됨');
        var lists = [];
        var data = this.props.data;
        var i=0;
        while(i < data.length) {
            lists.push(<li key={data[i].id}><a
            // data-iddd={data[i].id} // i와 a태그를 구분하기 위해 data[i].id 값을 갖는 변수를 생성 
            // 아래 dataset에 의해 연결될 예정 ↓*4
            onClick={function(id, event) {
                // debugger;
                event.preventDefault();
                this.props.onChangePage(id);
                // this.props.onChangePage(event.target.dataset.iddd);
                    // dataset은 data- 로 시작하는 접두사 객체 속성을 접근
            }.bind(this, data[i].id)}
            href={"/content/" + data[i].id}>{data[i].title}</a></li>);
            i++;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;