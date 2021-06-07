import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const Carousel = () => {

        return (
        <div className="slide-container my-5 mx-auto" style={{width:"960px", height: "400px"}}>
          <Slide>
            <div className="each-slide">
            <img src={"https://media.canifa.com/wysiwyg/san-pham-be-gai-listing.jpg"}/>
              {/* <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Slide 1</span>
              </div> */}
            </div>
            <div className="each-slide">
            <img src={"https://media.canifa.com/wysiwyg/san-pham-nu-listing.jpg"}/>
              {/* <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
              </div> */}
            </div>
            <div className="each-slide">
            <img src={"https://media.canifa.com/wysiwyg/san-pham-nam-listing.jpg"}/>
              {/* <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Slide 3</span>
              </div> */}
            </div>
          </Slide>
        </div>
      )
}

export default Carousel
