import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Application from './application/main'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Application} />
      <Route path='/2006' component={Application}/>
      <Route path='/2007' component={Application}/>
      <Route path='/2008' component={Application}/>
      <Route path='/2009' component={Application}/>
      <Route path='/2010' component={Application}/>
      <Route path='/2011' component={Application}/>
      <Route path='/2012' component={Application}/>
      <Route path='/2013' component={Application}/>
      <Route path='/2014' component={Application}/>
      <Route path='/2015' component={Application}/>
      <Route path='/2016' component={Application}/>
      <Route path='/2017' component={Application}/>
      <Route path='/2018' component={Application}/>
      <Route path='/2019' component={Application}/>
      <Route path='/2020' component={Application}/>
    </Switch>
  </main>
)

export default Main
