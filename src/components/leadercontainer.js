import React from "react";
import "./leadercontainer.css";
import Header from "./header.js";
import LeaderTable from "./leadertable.js";
import axios from "axios";


class LeaderContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            recent_data:[],
            alltime_data:[]
        }
    }
    componentDidUpdate(){
        console.log("updated");
    }
    
    componentDidMount(){
        
        console.log("Mounted");
        const first=axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(function (response) {
            console.log("setstate1");
            return response;
            //this.setState({recent_data:response});
         })
        .catch(function (error) {
            console.log(error);
        });
        
        const second=axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(function (response) {
            console.log("setstate2");
            
            //this.setState({alltime_data:response});
         })
        .catch(function (error) {
            console.log(error);
        });
        console.log(first);
        console.log(second);
    }
    render(){
       
        return (
        <div>
            <Header />
            <LeaderTable />
        </div>
            );
    }
    
    
}

export default LeaderContainer;