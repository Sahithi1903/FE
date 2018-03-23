import React, { Component } from "react";
import { Link } from "react-router-dom";
import Edform1 from './Edform1';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleBnameChange = this.handleBnameChange.bind(this);

    }
    handleSubmit(event) {


        //event.preventDefault();
        //this.setState({
        //  value: event.target.value,
        //});
        //var bname = document.getElementById('bname').value;
        //var type = "button";
        //console.log(bname);
        fetch("http://10.10.200.39:9000/users/surveys/all",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application,json"

                },

            }).then(result1=>result1.json())
            .then(function(result1){
                
                console.log(result1);
                //accessToken = result1.access_token;
                //console.log(accessToken);
                //localStorage.setItem("accessToken",result1.access_token);
                //result1.access_token=localStorage.getItem("accessToken");
               // module.exports={data:"accessToken"};
        
                
            })
            .catch(function(error){
                console.log(error);
            });
            
            }
    }

    /*var element = document.createElement("input");
    element.setAttribute("type", type);
    element.setAttribute("value", bname);
    element.setAttribute("name", bname);
    element.setAttribute("class", type);
    console.log(element);
    var foo = document.getElementById("fooBar");
    foo.appendChild(element);*/

    //handleBnameChange(event) {
    //this.setState({
    // bname: event.target.value,
    //})
    // }

    /*render() {
        /*var survey = this.state.survey;
        console.log();
    
        var surveyList = survey.map(function (j, i) {
            var rObj = j.description;
            return (
                <div className="loginBox">
                    {/*<button class="button"><span>Survey 1</span></button>
    
                    <button class="button"><span>Survey 2</span></button>
    
                    <button class="button"><span>Survey 3</span></button>
                    <span id="fooBar">&nbsp;</span>
                    <br></br>
                    <br>
                </br>*/
        /*<form>

            <input type="text"
               // className="" id="bname"
                //placeholder="Enter Button Name"
                //onChange={this.handleBnameChange}
//value={this.state.bname} required />

            <input type="submit"
                className=""
                value="Add" onClick={this.handleSubmit} />



</form>*/
        /*} <div className="col-sm-6" key={i.toString()}>
                    <div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to={"/Edform1"}>{rObj}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    });
return (surveyList);*/
        //var Holder = [];
        //for (var i = 0; i < this.state.survey.length; i++) {
          //  console.log(this.state.survey[i].name);
            //Holder.push(
            // (
            //    <Disp name={this.state.survey[i].name} desc={this.state.id[i].description}></Disp>
            // )
            // );
        //}
        /*return (
            <div>
                <br />
                <center><h1>SurveyList</h1></center>
                <br />
                <div>

                    <form>
                        <input type="submit"
                            className=""
                            value="Add" onClick={this.handleSubmit} />
                    </form>



                </div>
            </div>
        );
    }

}*/


export default Contact;