import React from 'react'
import {
  Page,
  Navbar,
  NavRight,
  Link,
  FabBackdrop,
  Fab,
  Icon,
  FabButtons,
  FabButton,
  Block,
  Toolbar,

} from 'framework7-react';


function AttendancePage() {
  return (
    <Page name='Attendance' >
      <Navbar title='Attendance' >
        <NavRight>
          <Link iconIos="f7:person_fill" iconAurora="f7:person_fill" iconMd="material:person_fill" panelOpen="right" />
          <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />

        </NavRight>
      </Navbar>

      <FabBackdrop slot="fixed" />

      <Fab position="right-bottom" slot="fixed">
        <Icon f7="hand_raised_fill"></Icon>
        <Icon f7="hand_raised"></Icon>
        <FabButtons position="top">
          <FabButton fabClose="true" label="New Exceptions" color="white"><Icon color="blue" f7="plus"></Icon> </FabButton>
          <FabButton fabClose="true" label="View Exceptions" color="white"> <Icon color="blue" f7="hand_raised"></Icon></FabButton>
        </FabButtons>
      </Fab>


    </Page>
  )
}

export default AttendancePage;