import Home from './routes/home/home.component.jsx'
import Authentication from './routes/authentication/authentication.component.jsx'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/navigation.component.jsx'





const Shop = () => {
  return (
    <h2>
     I am the shop components 
    </h2>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
