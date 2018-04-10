/*import React,{Component} from 'react';
import Login from './Login.js'

class Surveyform2 extends Component
{
    constructor(props){
        super(props);
        this.state={
           name:"",
            
            json : [] ,
         }

         this.handleSubmit=this.handleSubmit.bind(this);
         this.handleNameChange=this.handleNameChange.bind(this);
         //this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
         //this.handleStateChange=this.handleStateChange.bind(this);
        }
        handleSubmit(event) {

            
            event.preventDefault();
            this.setState({
                value:event.target.value,
            });
            var name = document.getElementById('name').value;
            //var description = document.getElementById('description').value;
            //var state = document.getElementById('state').value;
            var Login=require('./Login.js');
            var accessToken = localStorage.getItem("accessToken");
            //var id=7;
            //var str=Login.data;
            //var accesstoken=JSON.stringify(str);
            console.log(Login.accessToken);            
            var form1 = JSON.stringify({name : name,});
            //console.log(id);
            fetch ("http://10.10.200.39:9000/surveys", 
            {
                
                method: "DELETE" ,
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
    
        /*handleDescriptionChange(event) {
            this.setState({
                description:event.target.value,
            })
        }
        handleStateChange(event) {
            this.setState({
                state:event.target.value,
            })*/
            
    /*render(){
        console.log("in sf2");
     return(
         <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    
       <div className="container">
      <form onSubmit={this.handleSubmit}>

      <p>Name</p>
        <input type="text" 
        id="name" 
        placeholder="Your survey name.."
        onChange={this.handleNameChange} 
        value={this.state.name}/>
    
       
        <input type="submit" 
        value="Delete"
        />
      </form>
    </div>
    </div>
     );

    }
}
export default Surveyform2;*/