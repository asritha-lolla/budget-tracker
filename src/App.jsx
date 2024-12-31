import React from 'react'
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Loans from '../src/components/budget/Loans'
import Savings from '../src/components/budget/Savings'
import Layout from './pages/Layout'
import Expenses from './components/budget/Expenses'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout/>}>

    <Route index element={<Home/>}/>
    <Route path="/loans" element={<Loans/>}/>
    <Route path="/savings" element={<Savings/>}/>
    <Route path="/expenses" element={<Expenses/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App