import React, { Component } from 'react';


class Slide extends Component {
  render() {
    return (
      <div>
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 6:2; animation: push">

    <ul class="uk-slideshow-items">
        <li>
            <img src="https://richestsoft.com/blog/wp-content/uploads/2019/04/web-development-banner.jpg" alt="" uk-cover/>
        </li>
        <li>
            <img src="https://www.selectmedia.co.in/images/background/digitalmarketing-banner.jpg" alt="" uk-cover />
        </li>
        <li>
            <img src="https://qph.fs.quoracdn.net/main-qimg-a6cb82053d5ac15bb268d4a87148bbb1" alt="" uk-cover style={{width: 1400}}/>
        </li>
         <li>
            <img src="https://i.pinimg.com/originals/98/35/c4/9835c42d46d916dedbc730306d342801.jpg" alt="" uk-cover style={{width: 1400}}/>
        </li>
    </ul>

    <a  className="uk-position-center-left uk-position-small uk-hidden-hover" href="left" uk-slidenav-previous uk-slideshow-item="previous"  uk-icon="icon:  chevron-double-left; ratio: 3"></a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="right" uk-slidenav-next uk-slideshow-item="next" uk-icon="icon:  chevron-double-right; ratio: 3"></a>

</div>
</div>
    );
  }
}

export default Slide;