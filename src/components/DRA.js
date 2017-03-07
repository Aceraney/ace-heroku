import React from 'react';
import {Carousel, Caption} from 'react-bootstrap';
import NavbarInstance from '../components/navbarInstance';
import draimg from '../assets/dra.png';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';




//main page for the DroeseRaney Architecture website clone. A comparison can be seen at www.droeseraney.com

const DRA = React.createClass({

  componentWillMount: function(){
    document.body.style.backgroundColor = "#151515";
    document.title="DroeseRaney Architecture";
    document.body.style.maxWidth= 1080;
},
componentWillUnmount: function(){
    document.body.style.backgroundColor = null;
    document.body.style.maxWidth= null;
    

},
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {

    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render() {
    return (
      <div>
      <NavbarInstance imgURL={draimg} prev="dra"/>
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={(i,e)=>this.handleSelect(i,e)}>
        <Carousel.Item>
          		<img src={img1}/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src={img2}/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src={img3}/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src={img4}/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src={img5}/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src={img6}/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src={img7}/>
            </Carousel.Item>
            
          
        
      </Carousel>
      </div>
    );
  }
});

export default DRA;