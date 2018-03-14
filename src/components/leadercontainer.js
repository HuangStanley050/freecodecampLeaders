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
            console.log("getting recent top campers");
            return response;
            //this.setState({recent_data:response});
         })
        .catch(function (error) {
            console.log(error);
        });
        
        const second=await axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(function (response) {
            console.log("getting all time top campers");
            return response;
            
            //this.setState({alltime_data:response});
         })
        .catch(function (error) {
            console.log(error);
        });
        //console.log(first);
        //console.log(second);
        this.setState({recent_data:first,alltime_data:second})
    }
    render(){
        
        var testList=[];
        var username;
        var recentPts;
        var alltimePts;
        var spot;
        
        if(this.state.recent_data.length!==0){
            for(var i=0;i<5;i++){
                console.log("recent-->"+this.state.recent_data.data[i].username);
                username=this.state.recent_data.data[i].username;
                alltimePts=this.state.recent_data.data[i].alltime;
                recentPts=this.state.recent_data.data[i].recent;
                spot=i;
                testList.push(
                        <tr>
                            <td>{spot}</td>
                            <td>{username}</td>
                            <td>{recentPts}</td>
                            <td>{alltimePts}</td>
                        </tr>
                
                )
            }
        }
        
        if(this.state.alltime_data.length!==0){
            for(i=0;i<5;i++){
                console.log("all time-->"+this.state.alltime_data.data[i].username);
            }
        }
        
       
        return (
        <div>
            <Header />
            <LeaderTable recent={testList}/>
        </div>
            );
    }
    
    
}

export default LeaderContainer;