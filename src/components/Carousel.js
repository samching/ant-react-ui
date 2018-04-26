import React from 'react';
import { Carousel } from 'antd';
import img from '../img/clapping1.gif';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div id="carousel1">
        <img src={img} alt="img1" />
      </div>
      <div><img src="https://pixel.nymag.com/imgs/daily/intelligencer/2017/02/10/10-king-trump.w710.h473.jpg" alt="img2" /></div>
      <div><img src="http://www.lawyersgunsmoneyblog.com/wp-content/uploads/2015/12/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg" alt="img3" /></div>
      <div><img src="https://www.thenation.com/wp-content/uploads/2018/02/Trump-SOTU-2018-rtr-img.jpg" alt="img4" /></div>
    </Carousel>
  );
};

export default CarouselComp;
