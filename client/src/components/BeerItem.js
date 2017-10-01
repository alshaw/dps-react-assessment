import React from 'react'
import { Item, Button, Label } from 'semantic-ui-react'



const BeerItem = ({beer}) => (
  <Item style={{marginTop: "10px", height: "180px", overflowY: "scroll"}}>
    {beer.labels ? <Item.Image size="small" src={beer.labels.medium} /> :
    <Item.Image size="small" src="" />
    }
    <Item.Content>
      <Item.Header>{beer.name_display}</Item.Header>
      <Item.Meta>
        {`ABV: ${beer.abv}%`}
        {beer.ibu && ` | IBU: ${beer.ibu}`}
      </Item.Meta>
      <Item.Description>{beer.description}</Item.Description>
      <Item.Extra>
        <Button primary floated='right'>
          Show Beer
        </Button>
      </Item.Extra>
    </Item.Content>
  </Item>
)

export default BeerItem