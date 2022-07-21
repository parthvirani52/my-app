
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import About from './component/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is unable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
       msg: message,
       type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#023E65';
      showAlert("Dark mode has been Enabled","success");
      document.title = 'textConverter - Dark mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been Disabled","success");
      document.title = 'textConverter - Normal mode'

    }
    
  }
  return (
    <>
    {/* <Router> */}
      
      <Navbar title="TextUtils" mode={mode} aboutText="aboutus" toggleMode={toggleMode}/>
    {/* <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
               
          {/* <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route> */}

            <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>

            {/* </Route>
          </Routes> */}


      </div>


      {/* </Router> */}

    </>    
  );
}

export default App;
