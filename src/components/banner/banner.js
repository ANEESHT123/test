import React, { Component } from 'react';


class Banner extends Component {
  render() {
    return (
     <div class=" uk-grid-match " uk-grid>
    
    
    <div>
        <div class="uk-card  uk-card-hover uk-card-body uk-light" style={{backgroundColor: "#227DC7"}}>
            <h1 class="uk-card-title">Why Choose TechKnocks for your business solutions?</h1>
            <p>TechKnocks is an international web & mobile app development company based in India. Also, we provide premium IT Services related to mobile app, web, enterprise and other trending technology to business globally.</p>
            <button class="uk-button uk-button-default">Learn More</button>

        </div>

    </div>
   
   
</div>
    );
  }
}

export default Banner;