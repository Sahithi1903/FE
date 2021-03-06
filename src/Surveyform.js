import React,{Component} from 'react';
import Login from './Login.js'

class Surveyform extends Component
{
    constructor(props){
        super(props);
        this.state={
           name:"",
           description:"",
            state:"",
            
            json : [] ,
         }

         this.handleSubmit=this.handleSubmit.bind(this);
         this.handleNameChange=this.handleNameChange.bind(this);
         this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
         this.handleStateChange=this.handleStateChange.bind(this);
        }
        handleSubmit(event) {

            
            event.preventDefault();
            this.setState({
                value:event.target.value,
            });
            var name = document.getElementById('name').value;
            var description = document.getElementById('description').value;
            var state = document.getElementById('state').value;
            var Login=require('./Login.js');
            var accessToken = localStorage.getItem("accessToken");
            var id=7;
            //var str=Login.data;
            //var accesstoken=JSON.stringify(str);
            console.log(Login.accessToken);            
            var form1 = JSON.stringify({name : name,description : description,state : state,});
            console.log(id);
            fetch ("http://10.10.200.39:9000/surveys/:id", 
            {
                
                method: "POST" ,
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
       console.log(accessToken);
        console.log(form1);
        //console.log(id);
    
        }
        handleNameChange(event) {
            this.setState({
                name:event.target.value,
            })
        }
    
        handleDescriptionChange(event) {
            this.setState({
                description:event.target.value,
            })
        }
        handleStateChange(event) {
            this.setState({
                state:event.target.value,
            })
        }    
    render(){
     return(
         <div className="chartBox">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    
       <div className="container">
      <form onSubmit={this.handleSubmit}>

      <p><font color="black">Name</font></p>
        <input type="text" 
        id="name" 
        placeholder="Your survey name.."
        onChange={this.handleNameChange} 
        value={this.state.name}/>
    

        <p><font color="black">Description</font></p>
        <input className="" 
        type="text" id="description" 
        placeholder="Your description"
        onChange={this.handleDescriptionChange} 
        value={this.state.description}/>

        
        <p><font color="black">State</font></p>
        <input type="text" 
        id="state" 
        placeholder="Your location....."
        onChange={this.handleStateChange} 
        value={this.state.state}/><br/><br/><br/>
        <br/><br/>
       
        <input type="submit" 
        value="Add"
        />
      </form>
    </div>
    </div>
     );

    }
}
export default Surveyform;