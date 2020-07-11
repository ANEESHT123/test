import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div>
            <div class="uk-section uk-section-large uk-section-muted">
    <div class="uk-container">


        <div class="uk-grid-match uk-child-width-1-4@m" uk-grid="true">
            <div>
                 <h1>WebSoulLabs</h1>

                <p>WebSoulLabs is an international web & mobile app development company based in India. Also, we provide premium IT Services related to mobile app, web, enterprise and other trending technology to business globally.

</p>
            </div>
            <div>
                                    <h3>Useful Links</h3>
                                    <ul class="uk-list uk-list-disc">
            <li><a class="uk-link-text" href="#">Home</a>
</li>
            <li><a class="uk-link-text" href="#">About Us</a>
</li>
            <li><a class="uk-link-text" href="#">Services</a>
</li>
            <li><a class="uk-link-text" href="#">Careers</a>
</li>
            <li><a class="uk-link-text" href="#">Blogs</a>
</li>
        </ul>

            </div>
            <div>
                                                <h3>Our Services</h3>

                                       <ul class="uk-list uk-list-disc">
            <li><a class="uk-link-text" href="#">Web Development</a>
</li>
            <li><a class="uk-link-text" href="#">Mob Application Development</a>
</li>
            <li><a class="uk-link-text" href="#">Data Science</a>
</li>
            <li><a class="uk-link-text" href="#">Digital Marketing</a>
</li>
            <li><a class="uk-link-text" href="#">Graphic Design</a>
</li>
        </ul>
            </div>
            <div>
                                    <h3>Contact US</h3>
                                    <ul class="uk-list uk-list-disc">
            <li>Infopark 
</li>
            <li>Ernakulam, 682011
</li>
            <li>India
</li>
            <li>Phone: +91 8848430565
</li>
            <li>Email: websoullabs@gmail.com
</li>
        </ul>

            </div>
        </div>

        
    </div>
    <div  className="uk-align-center" style={{marginLeft: 72}}>
       <a >
 <span uk-icon="icon:  facebook; ratio: 1"></span></a>
               <a style={{margin: 5}}> <span uk-icon="icon:  instagram; ratio: 1"></span></a>
                              <a style={{margin: 5}}>   <span uk-icon="icon:   linkedin; ratio: 1"></span></a>
               <a style={{margin: 5}}>  <span uk-icon="icon:  twitter; ratio: 1"></span></a>
               <a style={{margin: 5}} >  <span uk-icon="icon:  whatsapp; ratio: 1"></span></a>

                


    </div>
</div>
      </div>
    );
  }
}

export default Footer;