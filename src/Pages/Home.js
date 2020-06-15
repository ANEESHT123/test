import React, { Component } from 'react';
import Slide from '../components/Slide/Slide'
import Banner from '../components/banner/banner';
import Cards from '../components/cards/cards';
import Work from '../components/work/work';
import Tech from '../components/Tech/Tech'
import TabPanel from '../components/Tab/Tab'

class Home extends Component {
  render() {
    return (
      <div>
      <div >
        <Slide></Slide>
      </div>
      <div style={{marginTop: 5}}>
        <Banner></Banner>
      </div>
      <div >
      <div style={{marginLeft: 550}}>
      <h1 class="uk-text-lead ">Our Major Services</h1>
      <h1  style={{marginLeft: -400}} class="uk-text-large uk-text-light">We build high-quality software solutions with our diversified experience in technology and business consulting. Our passionate engineering, technology skills with business expertise serves various industries.</h1>
      </div>
        <Cards></Cards>
      </div>
      <div style={{marginTop: 50, margin: 20}}>
      <div style={{marginLeft: 550}}>
      <h1 class="uk-text-lead ">How we work. Our magic!</h1>
      <h1  style={{marginLeft: -200}} class="uk-text-large uk-text-light">Simple Steps - Planed & Agiled. Quick Results & Lovable Products!

</h1>
        </div>
        
        <Work></Work>
      
      </div>
       <div>
        <TabPanel></TabPanel>
      </div>
      <div>
        <Tech></Tech>
      </div>
     
      </div>
     
    );
  }
}

export default Home;