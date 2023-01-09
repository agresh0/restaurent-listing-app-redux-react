import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';

function RestaurentReview({data}) {

    console.log(data);
    const [open, setOpen] = useState(false);
    

  return (
    <>
    <Button className='btn btn-dark border'
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      Reviews
    </Button>
    <Collapse in={open}>
      <div id="example-collapse-text">

      {data.map((client)=>(
        <Card className='py-2'>
        <Card.Body>
          <Card.Title>{client.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{client.rating}</Card.Subtitle>
          <Card.Text>
            {client.date}
          </Card.Text>
          <Card.Text>
            {client.comments}
          </Card.Text>
        </Card.Body>
      </Card>

      ))}
      </div>
    </Collapse>
  </>

  )
}

export default RestaurentReview