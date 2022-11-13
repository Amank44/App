import React from 'react'
import {
    Page,
    Navbar,
    NavRight,
    Link,
    Toolbar,
    List,
    ListInput,
    Icon,

    
   
  } from 'framework7-react';
  

function NewExceptions() {
  return (
   <Page name='New Exceptions' noToolbar  >
    <Navbar  title='New Exceptions' backLink='Back' >
   
      </Navbar>
      
      <List size="50" inset>
  <ListInput inset
    outline
    floatingLabel
    label="Exception Type*"
    type="select"
    placeholder="Exception Type"
    
    >
 <option value="value1">Option 1</option>
 <option value="value2">Option 2</option>
 <option value="value3">Option 3</option>
 <option value="value4">Option 4</option>
 <option value="value5">Option 5</option>
     
  </ListInput>
  </List>
      
   </Page>
  )
}

export default NewExceptions