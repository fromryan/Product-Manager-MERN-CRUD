import React, { useState, useEffect } from 'react';
import {navigate} from "@reach/router"
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron'

const UpdateComponent = ({id}) => {

    // const [detailState, setDetailState] = useState({
    //     title:'',
    //     price:0,
    //     description:''
    // })

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                // setDetailState(res.data)
            })
            .catch(err => console.log(err))
    })

    // const changeHandler = e => {
    //     setDetailState({
    //         ...detailState,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const submitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/" +id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate("/" + res.data._id)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Jumbotron>
                <form onSubmit={submitHandler}>
                    <h1>Update Product</h1>
                    <p>Title: <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} /></p>
                    <p>Price: <input type="text" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} /></p>
                    <p>Description: <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} /></p>
                    <input type="submit" value="Update" className="btn btn-secondary"/>
                </form>
            </Jumbotron>


            {/* <Jumbotron>
                <form onSubmit={submitHandler}>
                    <h1>Update Product</h1>
                    <p>Title: <input type="text" name="title" value={detailState.title} onChange={(e) => changeHandler(e)} /></p>
                    <p>Price: <input type="text" name="price" value={detailState.price} onChange={(e) => changeHandler(e)}/></p>
                    <p>Description: <input type="text" name="description" value={detailState.description} onChange={(e) => changeHandler(e)} /></p>
                    <input type="submit" value="Update" className="btn btn-secondary"/>
                </form>
            </Jumbotron> */}
        </div>
    )
}

export default UpdateComponent;