import React from 'react';
import axios from 'axios';

class App extends React.Component {
    //데이터를 render에 넣어주려면 constructor가 있어야 된다.
    constructor(){
        super();
    
        this.state = {
            title:'초기제목',
            name: '초기이름'
        }
    }
    
    getCompany(){
          //axios
        axios.get('http://localhost:4000/company')
            /*.then(function(response){})
            .catch(function(error){});*/
            .then(response=>{
             this.setState({
                 title : response.data.title,
                 name : response.data.name 
             })
            console.log(response.data);
        })
            .catch(error=>{
            console.log(error);

        });
     }
    
  
    render(){
		return(
            <div>
			<div>백엔드 통신해보기</div>
            <button onClick={this.getCompany.bind(this)}>통신시작</button>
            <div>{this.state.title}</div>
            <div>{this.state.name}</div>
            </div>
			)
		}
}

export default App;