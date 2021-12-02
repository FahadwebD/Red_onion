import React from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import banner from '../../../images/bannerbackground.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    const element = <FontAwesomeIcon icon={faSearch} />
    return (
        
            <Card className="bg-white text-black">
  <Card.Img src={banner} alt="Card image" />
  <Card.ImgOverlay>
  <InputGroup className="  " style={{top:'50%' , left:'35%' , width:'30%'}}>
    <FormControl
      placeholder="food category"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      style={{borderRadius: '15px 15px 15px 15px' , position:'relative', border:'none'}}
    />
    <Button style={{width:'15%',backgroundColor:'#f91944',border:'none' , borderRadius: '15px 15px 15px 15px' ,left:'90%' , position:'absolute' }}>
      {element}
    </Button>
  </InputGroup>
    
  </Card.ImgOverlay>
</Card>
        
    );
};

export default Banner;