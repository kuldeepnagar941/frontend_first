import Cardproduct from './Cardproduct.js'

import im from './images/image2.jpg'

function Home_B_I(){
    return(
        <>

           
          <div className="h3">
            <h2 id="b">BEST OFFER</h2>
            <h1>NEW ARRIVALS ON SCALE</h1>
        </div>
        <div className="h4">
           <div className="h5">
            <h1>latest Product </h1>
            <h5>VIEW ALL PRODUCT=  </h5>
           </div>
        </div>
        <div className="h6">
            <div className="h7">
                { 
                Cardproduct.map((item)=>
                    <div className="cart">
                    <div className="cimg"><img src={item.image} alt="" /></div>
                    <div className="info">
                        <div className="info1">
                            <div className="info2"><h1>Title goes here</h1> <h2>$25.75</h2></div>
                            <div className="info3"><p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p></div>
                            <div className="info2"><h1>*****</h1> <h2>Review(25)</h2></div>
                        </div>
                    </div>
                </div>
                )
                }
                
                <div className="cart"></div>
                <div className="cart"></div>
                <div className="cart"></div>
                <div className="cart"></div>
                <div className="cart"></div>
            </div>
        </div>
        <div className="h8">
            <div className="h9"><h2>About SixteenClothing</h2></div>
        </div>
        <div className="h10">
            <div className="h11">
                <div className="h12">
                    <h3>Looking for the best products?</h3>
                    <p>This template is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. Contact us for more info.</p>
                    <h4>* Lorem ipsum dolor sit amet</h4>
                    <h4>* Consectetur an adipisicing elit</h4>
                    <h4>* It aquecorporis nulla aspernatur</h4>
                    <h4>* Corporis, omnis doloremque</h4>
                    <h4>* Non cum id reprehenderit</h4>
                    <button>Read More</button>

                </div>
                <div className="h13"></div>
            </div>
        </div>
        <div className="h14">
            <div className="h15">
                <div className="h15contain">
                    <h3>Creative & Unique Sixteen Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                </div>
                <div className="h15btn"><button>Purchase Now</button></div>
            </div>
        </div>
        <div className="h16"><p>COPYRIGHT © 2020 SIXTEEN CLOTHING CO., LTD. - DESIGN: TEMPLATEMO</p></div>






      
      </>  
    )

}
export default Home_B_I