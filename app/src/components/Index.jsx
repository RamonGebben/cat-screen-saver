import React from 'react';
import Image from './Image';
import Scene from './Scene';
import _ from 'lodash';

const validateImage = (url) => url.match(/\.(jpeg|jpg|gif|png)$/) !== null;
const modelData = (data) => {
  return data.filter((item) => {
      return item.data.url !== undefined && validateImage(item.data.url);
  })
  .map((item) => item.data.url);
}

const getJson = (subreddit, after) => {
  let url = after ? `https://www.reddit.com/r/${subreddit}/.json?count=25&after=${after}` : `https://www.reddit.com/r/${subreddit}/.json?count=25`;
  return fetch(url).then(res => res.json())
}

class Index extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      looping: false,
    }
    this.images = [];
    this.after = null;
  }

  getImages(amount) {
    if(this.images.length < amount){
      getJson(this.props.subreddit, this.after).then(res => {
        this.after = res.data.after;
        this.images = _.uniq(this.images.concat(modelData(res.data.children)));
        this.getImages(amount);
      });
    }
  }

  componentDidMount(){
    this.getImages(100);
    setTimeout(() =>{
      this.startImageLoop()
    }, 3000);
  }

  startImageLoop(){
    if( !this.state.looping ){
      setInterval(() => {
        let currentImage = this.images.splice(0, 1);
        this.setState({
          looping: true,
          currentImage
        });

        if(this.images.length < 10 ){
          this.getImages(50);
        }
      }, 10000);
    }
  }

  render() {
    if( !this.state.currentImage ){
      return this.renderLoading();
    }else {
      return this.renderScene();
    }
  }

  renderScene(){
    this.startImageLoop();
    return(<Scene image={this.state.currentImage} />)
  }

  renderLoading(){
    return(<div className='loading'><img src='https://cdn.rawgit.com/SamHerbert/SVG-Loaders/master/svg-loaders/circles.svg'/></div>)
  }
}

export default Index;
