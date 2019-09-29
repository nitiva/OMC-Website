import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const bg_image0 = process.env.PUBLIC_URL + '/images/landing0.jpeg';
const bg_image1 = process.env.PUBLIC_URL + '/images/landing1.jpeg';
const bg_image2 = process.env.PUBLIC_URL + '/images/landing2.jpeg';
const bg_image3 = process.env.PUBLIC_URL + '/images/landing3.jpeg';
const bg_image4 = process.env.PUBLIC_URL + '/images/landing4.jpeg';
const items = [
  {
    src: bg_image0,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: bg_image1,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: bg_image2,    
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: bg_image3,    
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: bg_image4,    
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%"  height="450px"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default LandingPage;