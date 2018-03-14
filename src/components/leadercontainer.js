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
    
    async componentDidMount(){
        
        console.log("Mounted");
        const first=await axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(function (response) {
            console.log("setstate1");
            return response;
            //this.setState({recent_data:response});
         })
        .catch(function (error) {
            console.log(error);
        });
        
        const second=await axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(function (response) {
            console.log("setstate2");
            return response;
            
            //this.setState({alltime_data:response});
         })
        .catch(function (error) {
            console.log(error);
        });
        console.log(first);
        console.log(second);
        this.setState({recent_data:first,alltime_data:second})
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