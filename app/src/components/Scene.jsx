import React from 'react';
import Image from './Image';

class Scene extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
  }

  render() {
    let layout = this.props.set.map((image, i) => {
      return <Image url={image} key={i} height={window.innerHeight / this.props.set.length }/>
    });

      return(<div className='scene'>
          {layout}
      </div>);
  }

}

export default Scene;
