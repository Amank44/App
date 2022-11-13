import React from 'react'
import {
    Page,
    Navbar,
    BlockTitle,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Link,
    Swiper, 
    SwiperSlide
  } from 'framework7-react';
  import './cards.css';
  
function CardItem() {
  return (
    <Card expandable>
    <CardContent padding={false}>
      <div className="bg-color-yellow" style={{  backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',height: '300px' }}>
        <CardHeader textColor="white" className="display-block">
          Framework7
          <br />
          <small style={{ opacity: 0.7 }}>Build Mobile Apps</small>
        </CardHeader>
        <Link
          cardClose
          color="white"
          className="card-opened-fade-in"
          style={{ position: 'absolute', right: '15px', top: '15px' }}
          iconF7="xmark_circle_fill"
        />
      </div>
      <div className="card-content-padding">
        <p>
          Framework7 - is a free and open source HTML mobile framework to develop hybrid
          mobile apps or web apps with iOS or Android (Material) native look and feel. It is
          also an indispensable prototyping apps tool to show working app prototype as soon as
          possible in case you need to. Framework7 is created by Vladimir Kharlampidi
          (iDangero.us).
        </p>
        
      </div>
    </CardContent>
  </Card>
  )
}

export default CardItem