import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Item, Button, Label, Icon } from 'semantic-ui-react'
import Brewery from './Brewery'



const BreweryItem = ({brewery}, history) => (
  <Item style={{marginTop: "10px", height: "180px", overflowY: "scroll"}}>
    {brewery.images ? <Item.Image size="small" src={brewery.images.square_medium} /> :
     <Item.Image size="small" src="" /> 
    }
    <Item.Content>
      <Item.Header>{brewery.name}</Item.Header>
    </Item.Content>
  </Item>
)

export default BreweryItem