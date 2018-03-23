import React, { Component } from 'react';
import SurveyList from './SurveyList.js'

class S12 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            json: [],
        }



    }
    render() {
        var SurveyList = require('./SurveyList.js');
        var res = localStorage.getItem("res");
        for(var i=0;i<res.length;i++)
        {
            <button>Go</button>
        }
        return (
            <div>
                
            </div>
        );
    }

}
export default S12;