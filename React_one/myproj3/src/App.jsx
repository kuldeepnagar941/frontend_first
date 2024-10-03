

import './App.css'

function App() {
  

  return (
   <>
   <div className="outer_box">
  <div className="inner_box">
    {/* heading div */}
    <div className="heading_box">
      <div className="heading_L">Richard <span className="dot" /></div>
      <div className="heading_M">
        <ul>
          <li>Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Projects</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="heading_R">
        <button>Let's chat</button>
      </div>
    </div>
    {/*   main div */}
    <div className="main_box">
      <div className="main_box_L">
        <div className="main_box_L_top">
          <div className="intro">
            <div className="intro_content">Hi! I Am</div>
            <div className="intro_butn">
              <div className="ui_ux_btn">UI/UX</div>
            </div>
          </div>
          <div className="intro_name">Richard Brian</div>
          <p>Designing user interfaces for over <span>7years</span> <br /> as a product designer</p>
          <div className="hire_me_box">
            <div className="hire_me_box_L">
              <div className="hire_me_box_L_top">
                <button>Hire me</button>
                <h5>Projects <i className="fa-solid fa-square-arrow-up-right" /></h5>
              </div>
              <div className="hire_me_box_R_bot">
                <h6><span>+84</span> <br /> Clients on work <br /> worldwide</h6>
              </div>
            </div>
            <div className="hire_me_box_R">
              <div className="logo_icon">
                <img src="my_design_logo.png" alt="image not found" />
              </div>
            </div>
          </div>
          <div className="contact_outer_box">
            <div className="contact_outer_box_L"><span>572</span> <br /> Projects done</div>
            <div className="contact_outer_box_R"><span>Contact</span> <br /> heloorichardbrian.com</div>
          </div>
        </div>
        <div className="main_box_L_bot">
          <div className="project_statistics">
            Project  <br /> Statistics 2022
            <button>Know More</button>
          </div>
          <div className="design">
            <div className="design1">
              <div className="design1_L">Website Design</div>
              <div className="design1_R">75</div>
            </div>
            <div className="design1">
              <div className="design1_L">Mobile App Design</div>
              <div className="design1_R">64</div>
            </div>
            <div className="design1">
              <div className="design1_L">Brand Identity</div>
              <div className="design1_R">37</div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_box_R">
        <div className="main_box_R1">Create Your site in <span>Figma</span> <br /> <span>Sketch</span> or <span>XD</span></div>
        <div className="main_box_R2">
          <div className="sketch" />
        </div>
        <div className="main_box_R3">
          <div className="figma" />
        </div>
        <div className="main_box_R4">
          <div className="xd" />
        </div>
        <div className="main_box_R5">
          <input type="text" placeholder="Subscribe my Newsletter" />
        </div>
      </div>
    </div>
  </div>
</div>

   
   </>
  )
}

export default App
