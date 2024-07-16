import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppClass from './AppClass'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <AppClass msg='React Go Docker Tests - Classes'/>
          <App msg='React Go Docker Tests - Functions'/>
        </div>
      </div>
    </div>  
  </React.StrictMode>
)

