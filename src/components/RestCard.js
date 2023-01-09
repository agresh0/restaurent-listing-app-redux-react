import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestCard({item}) {
  return (
    // card design to display restaurent list
   <Link to={`/restaurentDetails/${item.id}`} style={{textDecoration:'none',color:'white'}}>
        <Card style={{height:''}} className='my-2 mx-2'>
        <Card.Img className='p-1' variant="top" src={item.photograph} />
        <Card.Body>
          <Card.Title>
            {item.name}
          </Card.Title>
          <Card.Text>
            <p>Cuisine :{item.cuisine_type}</p>
          </Card.Text>
          <Card.Text>
            <p>{item.neighborhood}</p>
          </Card.Text>
    
        </Card.Body>
      </Card>
   </Link>
  );
}

export default RestCard