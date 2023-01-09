import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestauretnOp from './RestauretnOp';
import RestaurentReview from './RestaurentReview';
import { useSelector } from 'react-redux';


function RestaurentDetails() {

  // 1.to get restaurent id from url
  const urlParams = useParams();
  console.log(urlParams.id);

  // 2.create state for holding restaurent list
  // const [restaurentList, setRestaurentList] = useState([])

  // api call
  // const fetchData = async () => {
  //   await fetch('/restaurent.json')
  //     .then((data) => data.json()
  //       .then((res) => setRestaurentList(res.restaurants))
  //     );
  // };

      // to get updated state from store
      const {restaurentList} = useSelector((state)=>state.restListReducer)
      console.log(restaurentList);
  
  

  //4. to load items or values when a component is created,try second ,empty array for resolve infinty reload
  useEffect(() => {
    // fetchData()
  }, []);

  console.log(restaurentList);
  // 5.find restaurent whose id is given in useParams
  const restaurent = restaurentList.find(item => (
    item.id == urlParams.id
  ))
  // console.log(restaurent);
  

  return (
    <div>
      {
        restaurent ? (
          <Row className='m-4'>
            <Col className='mx-5' md={3}>  
              <Image rounded className='border  border-rounded' src={restaurent.photograph} fluid></Image>
            </Col>
            <Col className='my-5' md={8}>
              <ListGroup>
                <ListGroup.Item>
                  <h2> {restaurent.name} </h2>
                  <p> {restaurent.neighborhood} </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Cuisine Type:&nbsp;{restaurent.cuisine_type}
                  </p>
                  </ListGroup.Item>
                <ListGroup.Item>
                  <p>Address:&nbsp;{restaurent.address}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <RestauretnOp op={restaurent.operating_hours}/>
                </ListGroup.Item>
                <ListGroup.Item>
                  <RestaurentReview data={restaurent.reviews}/>
                </ListGroup.Item>
              </ListGroup>
            </Col>

          </Row>
        ) : 'null'
      }

    </div>
  )
}

export default RestaurentDetails