import React,{Component} from 'react';
import Login from './Login.js'

class Edform1 extends Component
{
    constructor(props){
        super(props);
        this.state={
           templename:"",
           place:"",
            timings:"",
            visitors:"",
            file:"",
            feature:"",
        
            json : [] ,
         }

         this.handleSubmit=this.handleSubmit.bind(this);
         this.handlePlaceChange=this.handlePlaceChange.bind(this);
         this.handleTemplenameChange=this.handleTemplenameChange.bind(this);
         this.handleTimingsChange=this.handleTimingsChange.bind(this);
         this.handleVisitorsChange=this.handleVisitorsChange.bind(this);
         this.handleFileChange=this.handleFileChange.bind(this);
         this.handleFeatureChange=this.handleFeatureChange.bind(this);
        }
        handleSubmit(event) {

            
            event.preventDefault();
            this.setState({
                value:event.target.value,
            });
            var templenam = document.getElementById('templename1').value;
            var plac = document.getElementById('place1').value;
            var timing = document.getElementById('timings1').value;
            var visitor = document.getElementById('visitors1').value;
            var file = document.getElementById('file').value;
            var feature = document.getElementById('feature').value;
            var Login=require('./Login.js');
            var accessToken = localStorage.getItem("accessToken");
            //var str=Login.data;
            //var accesstoken=JSON.stringify(str);
            console.log(Login.accessToken);
            
            
            
            
            var form1 = JSON.stringify({templename : templenam,place : plac,timings : timing,visitors : visitor,file : file,feature :feature});
            fetch ( "http://10.10.200.39:9000/Form" , 
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
        console.log(form1);
    
        }
        handlePlaceChange(event) {
            this.setState({
                place:event.target.value,
            })
        }
    
        handleTemplenameChange(event) {
            this.setState({
                templename:event.target.value,
            })
        }
        handleTimingsChange(event) {
            this.setState({
                timings:event.target.value,
            })
        }
    
        handleVisitorsChange(event) {
            this.setState({
                visitors:event.target.value,
            })
        }
        handleFileChange(event) {
            this.setState({
                file:event.target.value,
            })
        }
        handleFeatureChange(event) {
            this.setState({
                feature:event.target.value,
            })
        }
        
        
        
    render(){
     return(
    
    <div className="container">
      <form onSubmit={this.handleSubmit}>

      <p>Templename</p>
        <input type="text" 
        id="templename1" 
        placeholder="Your place population.."
        onChange={this.handleTemplenameChange} 
        value={this.state.templename}/>
    

        <p>Place</p>
        <input className="" 
        type="text" id="place1" 
        placeholder="Your place name.."
        onChange={this.handlePlaceChange} 
        value={this.state.place}/>

        
        <p>Timings</p>
        <input type="text" 
        id="timings1" 
        placeholder="Your place literate population.."
        onChange={this.handleTimingsChange} 
        value={this.state.timings}/>
    
        <p>Number of Visitors Per Day</p>
        <input type="text" 
        id="visitors1" 
        placeholder="Your place literate population.."
        onChange={this.handleVisitorsChange} 
        value={this.state.visitors}/>

        <p>Add Feature</p>
        <input type="text" 
        id="feature" 
        placeholder="Your place literate population.."
        onChange={this.handleFeatureChange} 
        value={this.state.feature}/>


       <input type="file" 
       name="fileToUpload" 
       id="file"
       onChange={this.handleFileChange} 
       value={this.state.file}/><br></br><br></br>
    
       
        <input type="submit" 
        value="Submit"
        />
      </form>
    </div>
     );

    }
}
export default Edform1;