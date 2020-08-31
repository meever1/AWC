import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from './user-list'

class Filter extends Component {
  render() {
    return (
      <React.Fragment>
         
         <div class="searchFilter">
              <h1 class="sideHeading">Filters</h1>
              <div class="subtitle">
                <h3> Launch Year </h3>
                <div class="yearList">
                  <a href="/2006" class="col-sm-6">2006</a>
                  <a href="/2007" class="col-sm-6">2007</a>
                  <a href="/2008" class="col-sm-6">2008</a>
                  <a href="/2009" class="col-sm-6">2009</a>
                  <a href="/2010" class="col-sm-6">2010</a>
                  <a href="/2011" class="col-sm-6">2011</a>
                  <a href="/2012" class="col-sm-6">2012</a>
                  <a href="/2013" class="col-sm-6">2013</a>
                  <a href="/2014" class="col-sm-6">2014</a>
                  <a href="/2015" class="col-sm-6">2015</a>
                  <a href="/2016" class="col-sm-6">2016</a>
                  <a href="/2017" class="col-sm-6">2017</a>
                  <a href="/2018" class="col-sm-6">2018</a>
                  <a href="/2019" class="col-sm-6">2019</a>
                  <a href="/2020" class="col-sm-6">2020</a>
                </div>
                <h3> Successful Launch </h3>
                <div class="yearList">
                  <a href="#" class="col-sm-6">True</a>
                  <a href="#" class="col-sm-6">False</a>
                </div>
                <h3> Successful Landing </h3>
                <div class="yearList">
                  <a href="#" class="col-sm-6">True</a>
                  <a href="#" class="col-sm-6">False</a>
                </div>
              </div>
         </div>
      </React.Fragment>
    )
  }
}
export default Filter;
