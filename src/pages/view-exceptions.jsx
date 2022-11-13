import React from 'react'
import {
    Page,
    Navbar,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    BlockTitle,
    ListItem,
    Link,
    Block,
    List,
    Chip,
   
  } from 'framework7-react';
  
  import './cards.css';
function ViewExceptions() {
  return (
   <Page name='Exceptions' noToolbar  >
    <Navbar  title='Exceptions' backLink='Back' >
    {/* <NavRight>
      <Link iconIos="f7:person_fill" iconAurora="f7:person_fill" iconMd="material:person_fill" panelOpen="right" />
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
  
      </NavRight> */}
      </Navbar>
    
    <Card className='card_border'>
      <CardContent  padding={false} >
      <div style={{ paddingLeft:20, paddingRight:20 , border:'5'}}  > 
      {/* <CardHeader textColor="black" style={{ fontSize:20 ,  }} className="display-block"> */}
           <div style={{ display:'flex', justifyContent:'space-between'}}>
            <h2 style={{  marginTop:10, marginBottom:8 }}>Framework7 </h2>
            <span style={{ fontSize:12, opacity:0.5,  marginTop:12, marginRight:12, alignItems:'right'  }}>Exceptions</span>
            </div>
           <small> <Chip style={{ height:20, marginTop:0, marginBottom: 5 }} outline text="Exception Granted" color="green" /></small>
            {/* <small style={{ opacity: 0.7 }}>Build Mobile Apps</small> */}

            <hr style={{ opacity: 0.5 }}/>
          <List mediaList sortable className='left_padding'>
            <ListItem  text='loremd dhdiLorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati impedit laudantium eius, atque omnisf Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati impedit laudantium eius, atque omnis'></ListItem>
            {/* <p style={{ fontSize:14 , }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati impedit laudantium eius, atque omnis</p> */}
          </List>
            
          {/* </CardHeader> */}
        
          </div>
      </CardContent>
     
    </Card>
   </Page>
  )
}

export default ViewExceptions