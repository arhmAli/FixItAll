import './App.css'
// import Navbar from './Navbar'
import Header from './Header'
import XliderLogic from './Slider-Logic'
import Areas from './Areas'
import { Contact } from './Contact'
function App() {
  return (
    <>
      <div id='main-body'>
      {/* <Navbar/> */}
      <Header/>
      <XliderLogic/>
      <Areas/>
      <Contact/>
      </div>
    </>
  )
}

export default App
