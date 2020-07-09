import React, {Component} from 'react';
import storage from "../../Firestore";
import Carousel from 'react-bootstrap/Carousel';
import fieldImage from '../../assets/imgfields1.jpg';




class Slider extends Component {
  constructor () {
    super()
    this.state = {
      imgfields1: '',
      imgfields2: ''
    }
    this.getImage('imgfields1')
    this.getImage('imgfields2')
  }
  getImage (image) {
    let { state } = this
    storage.child(`${image}.jpg`).getDownloadURL().then((url) => {
      state[image] = url
      this.setState(state)
    }).catch((error) => {
      // Handle any errors
    })
  }
  render() {
    return (
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ this.state.imgfields1} 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ this.state.imgfields2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
  }
}

export default Slider;