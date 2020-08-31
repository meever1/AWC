import React, { Component } from 'react'
import Filter from './filters'
import UserList from './user-list'

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="contentArea">
           <div class="container-fluid">
               <div class="row">
                <div class="col-sm-3 col-md-4 col-lg-3"><Filter/></div>
                <div class="col-sm-9 col-md-8 col-lg-9"><UserList/></div>
               </div>       
           </div>
        </section>
      </React.Fragment>
    )
  }
}
export default Main;
