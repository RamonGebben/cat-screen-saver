import React from 'react';

function Image(props){
  return(<div className={`image ${props.size}`} style={{
    backgroundImage: `url(${props.url})`,
    width: `${window.innerWidth}px`,
    height: `${ props.height }px`
  }} />);
}

export default Image;
//
