import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
       super(props);
       this.state = {
           items: [],
           year: [],
           launch_success:[],
           succes:[],
           isLoaded: false,
       }
    }

    componentDidMount(){
        const url = 'https://api.spacexdata.com/v3/launches?limit=100';
        fetch(url)
        .then(res => res.json())
        .then(data => 
            this.setState({
                 isLoaded: true,
                 items: data,
            })
        )
        // Catch any errors we hit and update the app
        .catch(error => this.setState({ error, isLoading: false }));    
    }
  render() {
    var { isLoaded, items, year, launch_success, succes } = this.state;
    if (!isLoaded) {
        return <div>Loading....</div>
    }
    else {
        return (
            <React.Fragment>
                <div class="row">  
                {items.map(item => (
                    <div class="col-sm-3 col-md-6 col-lg-3" key={item.id}>
                        <div class="userList">
                            <div class="missionImg"><img src={item.mission_patch}/> </div>
                            <div class="missionName"> 
                            
                              {item.mission_name} #{item.flight_number}
                            </div>
                            <div class="missionID">
                                <p><strong>Mission Ids</strong></p>
                                <ul>
                                    <li>{item.mission_id}</li>                    
                                </ul>   
                            </div>
                            <div class="missionInfo">
                                <p><strong>Launch Year:</strong> {item.launch_year}</p>
                                <p><strong>Successful Launch:</strong> {item.launch_success}</p>
                                <p><strong>Successful Landing:</strong> {item.launch_landing}</p>
                            </div>
                        </div>
                    </div>
                ))} 
                    
                </div>
            </React.Fragment>
        );
    }
  }
}
export default UserList;
