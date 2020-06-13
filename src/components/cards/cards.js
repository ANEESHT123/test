import React, { Component } from 'react';


class Cards extends Component {
  render() {
    return (
    <div class="uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l"  uk-grid="true">
    <div class="uk-column-1-4">
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://ioss.in/wp-content/uploads/2019/01/Mobile-App.png" alt=""/>
            </div>
            <div class="uk-card-body">
                <h1 class="uk-card-title">Mobile App Development</h1>
                <p>The power of smartphones helps to connect & engage with people worldwide. A secured mobile app solution can help businesses to interact with their customers as well as build everlasting relationship.</p>
                <button class="uk-button uk-button-default">Learn More</button>
            </div>
        </div>

         <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://www.kindpng.com/picc/m/127-1272131_overview-progressive-web-application-development-web-app-development.png" style={{height: 167,width: 310}} alt=""/>
            </div>
            <div class="uk-card-body">
                <h1 class="uk-card-title">Web App Development</h1>
                <p>Web apps provides opportunities for businesses and brands to connect as well as engage with people. Also, it helps organizations to have an added edge over their competitors.</p>
                <button class="uk-button uk-button-default">Learn More</button>
            </div>
        </div>

         <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://somnathjadhav.com/wp-content/uploads/2019/07/Ecommerce-Development-Company-Pune.png" style={{height: 169,width: 308}} alt=""/>
            </div>
            <div class="uk-card-body">
                <h1 class="uk-card-title">E-Commerce App Development</h1>
                <p>Responsive and customized e-commerce websites help in creating awesome shopping experience. It provides an online engagement for businesses and increase the customer flow to the website.</p>
                <button class="uk-button uk-button-default">Learn More</button>
            </div>
        </div>

         <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="https://miro.medium.com/max/3200/0*f-YBCfsCVkm9meEK" alt=""/>
            </div>
            <div class="uk-card-body">
                <h1 class="uk-card-title">Digital Marketing Services</h1>
                <p>We understand the importance of Branding and Digitalization.We make sure your data reaches millions of netizens.Our team of highly competent SEO’s and Marketing Specialists.</p>
                <button class="uk-button uk-button-default">Learn More</button>

            </div>
        </div>
    </div>
    
</div>
    );
  }
}

export default Cards;