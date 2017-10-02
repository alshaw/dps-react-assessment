import React from 'react'
import axios from 'axios'
import { Header, Modal, Button, Image } from 'semantic-ui-react'


const Brewery = ({brewery}) => (
<Modal trigger={<Button primary>Show More</Button>}>
    <Modal.Header>{brewery.name}</Modal.Header>
    <Modal.Content image>
      {brewery.images ? 
        <Image size='large' src={brewery.images.square_large} />  :
         <Image size='large'src="" /> 
      }
      <div>
        {brewery.description &&
          <div style={styles.modalDivs}>
            <Header>About</Header>
            {brewery.description}
          </div>
        }
      </div>
    </Modal.Content>
  </Modal>
)

const styles = {
  modalDivs: {marginBottom: "10px"},
}
  




export default Brewery