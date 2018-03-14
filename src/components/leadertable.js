import React from "react";
import "./leadertable.css";

class LeaderTable extends React.Component{
    
    render(){
        return ( 
                <div className="tableWrapper leader">
                    <h2 className="leader">Leader Board</h2>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Camper</th>
                            <th>Last 30 days</th>
                            <th>All Time</th>
                            
                            
                        </tr>
                        {this.props.recent}
                    </table>
                </div>
            );
    }
}

export default LeaderTable;