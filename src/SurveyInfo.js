import React from 'react';
import "./MovieInfo.css";
import Rating from "./Rating";

class SurveyInfo extends React.Component {

    constructor() {
        super();

        this.state = {
          movie: [],
        poster:[]
        }
        
        
    }
   
       
      
 
    componentWillMount(){
        var m=this.props.match.params.movie;
        console.log(m);
        var form=JSON.stringify({imdbID:m});
        console.log(1);
        console.log(form);
        if(form!="{}")
        {
            console.log(form);
            fetch('http://10.10.200.30:9000/singlemovie',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: form,
                })
                .then(function (response) {

                    return (response.json());
                })
                .then((json) => this.setState({ movie: json }));
                
            }
       
        console.log(2);
    }
    
    render() {
           
        
       
        var movies = this.state.movie;
        var flag=0;
        console.log("REACHED HERE!!!!")
        console.log(movies);
        console.log(movies.length);
        if(movies.length!=0)
        {
        return (
            
            <div>
                <br />
                <br />
                <br />
                <br />

                <div className="container-fluid">

                    <div className="panel panel-default col-md-6 col-md-offset-3" id="panel">
                        <div className="panel-body">

                        
                            <div className="row">
                                
                                <div className="col-lg-8">
                                    <img src={movies.poster} id="pos" />
                                    <h1 id="h">{movies.title}</h1><br />

                                </div>
                                
                                <div className="col-lg-3">
                                <h5 id="h1">Cast:</h5>
                                <h6 id="hx">{movies.actors}</h6><br />

                                <h5 id="h1">Runtime:</h5>
                                <h6 id="hx">{movies.runtime}</h6><br />
                                    <h5 id="h1">Language:</h5>
                                    <h6 id="hx">{movies.language}</h6><br />
                                    <h5 id="h1">Plot:</h5>
                                    <h6 id="hx">{movies.plot}</h6>
                                    <h5 id="h1">Rating:</h5>
                                    <h6 id="hx"><Rating id={movies.imdbID}/></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );
        }
        else return (       
        null);
    
    };
}
export default MovieInfo;
