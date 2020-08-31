import React from 'react';
import Header from './header'
import Footer from './footer'
import Main from './application/main'

function App() {
  return (
    <React.Fragment>
       <Header/>
       <Main/>
       <Footer/>
    </React.Fragment>
  );
}

export default App;
