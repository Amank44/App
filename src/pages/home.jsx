import React from 'react';
import CardItem from '../pages/card';
import './cards.css';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Swiper,
  SwiperSlide,
  Card,
  CardFooter,
  CardHeader,
  CardContent,
  


} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar small sliding={false}>
      <NavLeft>
        {/* <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" /> */}
      </NavLeft>
      <NavTitle sliding>Bhakti Sadhana</NavTitle>
      <NavRight>
      <Link iconIos="f7:person_fill" iconAurora="f7:person_fill" iconMd="material:person_fill" panelOpen="right" />
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
  
      </NavRight>
      {/* <NavTitleLarge>Bhakti Sadhana</NavTitleLarge> */}
    </Navbar>
   <Swiper  speed={500} >
      <SwiperSlide>
      <Card className="demo-card-header-pic">
      <CardHeader
        className="no-border"
        valign="bottom"
        style={{
          backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
        }}
      >
        Journey To Mountains
      </CardHeader>
      <CardContent>
        <p className="date">Posted on January 21, 2015</p>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
          felis. Phasellus quis nibh hendrerit...
        </p>
      </CardContent>
      <CardFooter>
        <Link>Like</Link>
        <Link>Read more</Link>
      </CardFooter>
    </Card>
      </SwiperSlide>
      <SwiperSlide> <Card className="demo-card-header-pic">
      <CardHeader
        className="no-border"
        valign="bottom"
        style={{
          backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
        }}
      >
        Journey To Mountains
      </CardHeader>
      <CardContent>
        <p className="date">Posted on January 21, 2015</p>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
          felis. Phasellus quis nibh hendrerit...
        </p>
      </CardContent>
      <CardFooter>
        <Link>Like</Link>
        <Link>Read more</Link>
      </CardFooter>
    </Card></SwiperSlide>
      <SwiperSlide> <Card className="demo-card-header-pic">
      <CardHeader
        className="no-border"
        valign="bottom"
        style={{
          backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
        }}
      >
        Journey To Mountains
      </CardHeader>
      <CardContent>
        <p className="date">Posted on January 21, 2015</p>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
          felis. Phasellus quis nibh hendrerit...
        </p>
      </CardContent>
      <CardFooter>
        <Link>Like</Link>
        <Link>Read more</Link>
      </CardFooter>
    </Card></SwiperSlide>
   
    </Swiper>
   <div>
    <CardItem/>
   </div>

    {/* Page content */}
   
    

  
  </Page>
);
export default HomePage;