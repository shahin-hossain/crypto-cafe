import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Spinner from './components/Spinner/Spinner'
const App = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Header></Header>
      {navigation.state === 'loading' && <Spinner></Spinner>} {/*index.js এ coins Route এর লোডার যদি*/}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
