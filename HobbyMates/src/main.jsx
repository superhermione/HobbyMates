import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Layout from './routes/Layout'
import EditPlayer from './pages/EditPlayer'
import CreatePlayer from './pages/CreatePlayer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Layout />}>
          <Route index={true} element={<App />}/>
          <Route path="/create" element={<CreatePlayer />}/>
          <Route 
            index={false} 
            path="/edit/:id" 
            element={<EditPlayer />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
