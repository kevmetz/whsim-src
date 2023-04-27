import './css/atmedia2.css'
import './css/app.css'

import {HashRouter, Routes, Route} from 'react-router-dom'

import Layout from './Layout'
import HomePage from './HomePage'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="home" element={<HomePage />}></Route>
          </Route>
        </Routes>
      </Layout>    
    </HashRouter>
  )
}

export default App

