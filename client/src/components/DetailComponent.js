import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import Button from 'react-bootstrap/Button';

const DetailComponent = ({id}) => {
    const [detailState, setDetailState] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res => {
                setDetailState(res.data)
            })
            .catch(err => console.log(err))
    })

    return(
        <div>
            <h1>{detailState.title}</h1>
            <h4>Price: {detailState.price}</h4>
            <h4>Description: {detailState.description}</h4>
            <Link to={"/"}>
                <Button>Go Back</Button>
            </Link>
            
        </div>
    )
}

export default DetailComponent;