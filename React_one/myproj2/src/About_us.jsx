
import imm from './images/feature-image.jpg'
import immm from './images/team_01.jpg'
function About_us(){
    return(
        <>
        
        <div>
           
        
            <div className="au1">
                <h3 id="au111">ABOUT US</h3>
                <h1>OUR COMPANY</h1>
            </div>
            <div className="au2">
                <div className="au3"><h1>Our Background</h1></div>
            </div>
            <div className="au4">
                <div className="au5">
                    <div className="au6"><img src={imm} alt="" /></div>
                    <div className="au7">
                        <h2>Who we are & What we do?</h2>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>                    
                    </div>
                </div>
            </div>
            <div className="au8">
                <div className="au9"><h1>Our Team Members</h1></div>
            </div>
            <div className="au10">
                <div className="au11">
                    <div className="au12">
                        <div className="au13"><img src={immm} alt="" /></div>
                        <div className="au14">
                            <h3>Johnny William</h3>
                            <br />
                            <h4>CO-Founder</h4>
                            <br /><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                        </div>
                    </div>
                    <div className="au12"></div>
                    <div className="au12"></div>
                    <div className="au12"></div>
                    <div className="au12"></div>
                    <div className="au12"></div>
                </div>
            </div>
            <div className="au15">
                <div className="au16">
                    <div className="au17"><div className="au19">*</div></div>
                    <div className="au18">
                        <h2>Product Management</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="au16">
                    <div className="au17"><div className="au19">*</div></div>
                    <div className="au18">
                        <h2>Customer Relations</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="au16">
                    <div className="au17"><div className="au19">*</div></div>
                    <div className="au18">
                        <h2>Global Collection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>




        </div>
        </>
    )
}
export default About_us