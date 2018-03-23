import React,{Component} from 'react';
import Login from './Login.js'

class RoleUp extends Component
{
    constructor(props){
        super(props);
        this.state={
           username:"",  
            json : [] ,
         }

         this.handleSubmit=this.handleSubmit.bind(this);
         this.handleNameChange=this.handleNameChange.bind(this);
         
        }
        handleSubmit(event) {

            
            event.preventDefault();
            this.setState({
                value:event.target.value,
            });
            var username = document.getElementById('username').value;
            var Login=require('./Login.js');
            var accessToken = localStorage.getItem("accessToken");
            //var str=Login.data;
            //var accesstoken=JSON.stringify(str);
            console.log(Login.accessToken);            
            var form1 = JSON.stringify({username : username,});
            fetch ( "http://10.10.200.39:9000/users/role" , 
            {
                
                method: "PUT" ,
                headers: {
                    "Content-Type": "application/json",
                    "Accept"    :   "application,json",
                    "Authorization":'Bearer'+ accessToken,
                  },
    
                body:form1 , 
        }).then(result=>result.json())
        .then(function(result){
            console.log(result);
        })
        .catch(function(error){
            console.log(error);
       });
        console.log(form1);
    
        }
        handleNameChange(event) {
            this.setState({
                username:event.target.value,
            })
        }
    render(){
     return(
         <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    
       <div className="container">
      <form onSubmit={this.handleSubmit}>

      <p>Username</p>
        <input type="text" 
        id="username" 
        placeholder="Enter username.."
        onChange={this.handleNameChange} 
        value={this.state.username}/>
       
        <input type="submit" 
        value="Make him admin"
        />
      </form>
    </div>
    </div>
     );

    }
}
export default RoleUp;