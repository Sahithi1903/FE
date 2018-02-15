import React, { Component } from 'react';
import Signup  from './Signup';
import Login  from './Login';
import Edform1 from './Edform1';

class Topmenu extends Component
{
 
    constructor(){
        super();
        this.state={first:true,second:true,third:true};
        
    }
    handle1(){
        console.log(this.state.value);
        this.setState({first: false})
      }
    handle2(){
        console.log(this.state.value);
        this.setState({second: false})
      }
      handle3(){
        console.log(this.state.value);
        this.setState({third: false})
      }
    
 render(){
     return(
         <div>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
             <meta name="viewport" content="width=device-width, initial-scale=1"/>


             <div >
                  <button class="btn"><i class="fa fa-home"></i> Home</button>
                  <div class="dropdown">
                  <button class="btn"><i class="fa fa-bars"></i> Menu</button>
                  <div class="dropdown-content">
                     <a href="#" onClick={this.handle3.bind(this)}>Temples
                     {this.state.third == false && <Edform1/>}
                      </a>
                     <a href="#">Education</a>
                     <a href="#">Irrigation</a>
                  </div>
                  </div>
                  
                  
                  <button class="btn"><i class="fa fa-trash"></i> Trash</button>
                  <div class="topnav-right">
                  
                  <button class="btn" onClick={this.handle2.bind(this)}><i class="fa fa-folder"></i> Login</button>
                
                      {this.state.second == false && <Login/>}
                      {this.state.first == false}
                    

                  
                  <button class="btn" onClick={this.handle1.bind(this)}><i class="fa fa-folder"></i> Signup</button>
                      {this.state.first == false && <Signup/>}
                      
                  
                  </div>
             
            </div>
            <div class="navbar">
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               <b><a href="#contact"></a></b>
               
               
               <b><a href="#"><i class="fa fa-search"></i></a> </b>
               <b><a href="#"><i class="fa fa-envelope"></i></a> </b>
               <b><a href="#"><i class="fa fa-globe"></i></a></b>
               <b><a href="#"><i class="fa fa-trash"></i></a></b>
            </div>
        </div>
    
      
     );
 }


}

export default Topmenu;