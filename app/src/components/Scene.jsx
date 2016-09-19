import React from 'react';
import Image from './Image';
import $ from 'jquery';
import Masonry from 'react-masonry-component';

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const masonryOptions = { transitionDuration: 0 };

class Scene extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
  }

  render() {
    return (
          <div className='scene'>
            <Image url={this.props.image} />
          </div>
        );
  }

}

export default Scene;
