import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header class="w-100 d-flex align-items-center sticky-header">
            <div class="container-fluid">
                <h2>SpaceX Launch Programs</h2>
            </div>
       </header>
      </React.Fragment>
    )
  }
}
export default Header;
