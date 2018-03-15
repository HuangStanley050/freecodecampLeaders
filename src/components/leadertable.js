import React from "react";
import "./leadertable.css";

var rightList;
class LeaderTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            whichList:"None"
        }
        this.recent=this.recent.bind(this);
        this.alltime=this.alltime.bind(this);
    }
    
    recent(){
        this.setState({whichList:"recent"});
    }
    alltime(){
        this.setState({whichList:"alltime"});
    }
    componentDidUpdate(){
        //alert(this.state.whichList);
    }
    
    render(){
        if(this.state.whichList==="None" || this.state.whichList==="recent"){
            rightList=this.props.recent;
        }
        else{
            rightList=this.props.alltime;
        }
        return ( 
                <div className="tableWrapper leader">
                    <h2>Leader Board</h2>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Camper</th>
                            <th name="recent"onClick={this.recent}>Last 30 days</th>
                            <th name="alltime"onClick={this.alltime}>All Time</th>
                            
                            
                        </tr>
                        {rightList}
                    </table>
                </div>
            );
    }
}

export default LeaderTable;