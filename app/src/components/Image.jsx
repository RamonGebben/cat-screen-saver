import React from 'react';

function Image(props){
  return(<div className={`image ${props.size}`}>
    <img src={props.url} style={{
      backgroundImage: `url(${props.url})`,
      width: `${ props.width }px`
    }} />
  </div>);
}

export default Image;
//
