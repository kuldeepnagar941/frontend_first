import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Home_B_I from "./Home_B_I"
import Our_product from "./Our_product"
import About_us from "./About_us"
import Contact_us from "./Contact_us"
import Header from './Header'
    


function App(){
    return(
        <>
        
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Home_B_I/>} />
        <Route path='/product' element={<Our_product/>}/>
        <Route path='/about us' element={<About_us/>}/>
        <Route path='/contact us' element={<Contact_us/>}/>
        
      </Routes>
      </BrowserRouter>
        

        </>
    )
}
export default App