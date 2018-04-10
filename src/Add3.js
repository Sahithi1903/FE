import React from 'react';
import Add2 from './Add2.js';
import Login from './Login.js';

class Add3 extends React.Component {

    constructor() {
        super();

        this.state = {
          survey2: [],
        
        }
        
        
    }
   
       
      
 
    componentWillMount(){
        
        var m=this.props.match.params.id;
        console.log(m);
        var form=JSON.stringify({id:m});
        console.log(1);
        console.log(form);
        var Login = require('./Login.js');
        var accessToken = localStorage.getItem("accessToken");
        
        
            console.log(form);
            fetch('http://10.10.200.39:9000/form',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": 'Bearer' + accessToken,
                        
                    },
                    body: form,
                })
                .then(response => response.json())
                .then((survey2) => this.setState({ survey2: survey2 }));
                
            
       
        console.log(2);
    }
    
    render() {
           
        
       
        var surveys3 = this.state.survey2;
        var flag=0;
        console.log("REACHED HERE!!!!")
        console.log(surveys3);
        console.log(surveys3.length);
        if(surveys3.length!=0)
        {
        return (
            
            <div>
                <br />
                <br />
                <br />
                <br />

                <div className="loginBox">

                    
                                    
                                    <h1>{surveys3.address}</h1><br />

                                
                                
                                
                                <h5 id="h1">Cast:</h5>
                                <h6 id="hx">{surveys3.entryFee}</h6><br />

                                <h5 id="h1">Runtime:</h5>
                                <h6 id="hx">{surveys3.latitude}</h6><br />
                                    <h5 id="h1">Language:</h5>
                                    <h6 id="hx">{surveys3.longitude}</h6><br />
                                    <h5 id="h1">Plot:</h5>
                                    <h6 id="hx">{surveys3.timings}</h6>
                                    <h5 id="h1">Rating:</h5>
                                    <h6 id="hx">{surveys3.visitors}</h6>
                                
                </div>
            </div>



        );
        }
        else return (       
        null);
    
    };
}
export default Add3;
