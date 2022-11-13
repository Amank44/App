import React from 'react'
import {
    Page,
    Navbar,
    NavRight,
    Link,
    
   
  } from 'framework7-react';
  

function AccountPage() {
  return (
   <Page name='Account'  >
    <Navbar  title='Account' backLink='Back' >
    {/* <NavRight>
      <Link iconIos="f7:person_fill" iconAurora="f7:person_fill" iconMd="material:person_fill" panelOpen="right" />
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
  
      </NavRight> */}
      </Navbar>
      


   </Page>
  )
}

export default AccountPage