import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurentsList } from './actions/restaurentListAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



function RestaurentList() {

    // create state for holding restaurent list
    // const [restaurentList,setRestaurentList] = useState([])

    // api call
    // const fetchData = async () =>{
    //     await fetch('/restaurent.json')
    //     .then((data)=>data.json()
    //     .then((res)=>setRestaurentList(res.restaurants))
    //     )
    // }

    // to useDispatch hook
    const dispatch = useDispatch()

    // to get updated state from store
    const {restaurentList} = useSelector((state)=>state.restListReducer)
    console.log(restaurentList);

    // to load items or values when a component is created,try second ,empty array for resolve infinty reload
    useEffect(()=>{
        // fetchData()
        // dispatch the action
        dispatch(RestaurentsList())
    },[])

    // console.log(restaurentList);

  return (
    // restaurent card
    <Row>
    {
      restaurentList.map(restaurent=>(
        <Col lg={4} xl={3} md={6}>
        <RestCard item={restaurent}/>
        </Col>
      ))

    }
    </Row>

  )
}

export default RestaurentList