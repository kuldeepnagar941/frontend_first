import { Link } from "react-router-dom"

function Header(){
    return(
     <div className="header">
        <div className="h1"><h1>SIXTEEN</h1> <h1 id="H">CLOTHING</h1></div>
        <div className="h2">
           <Link to='/'> <button>Home</button></Link>
           <Link to='/product'> <button>Our Product</button></Link>
            <Link to='/about us'><button>About Us</button></Link>
            <Link to='/contact us'><button>Contact Us</button></Link>
        </div>
        <div className="h33">
          Mohit
        </div>
     </div>
    )
}
export default Header