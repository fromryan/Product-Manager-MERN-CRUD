import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const List = () => {

    const [listState, setListState] = useState([])
 
    useEffect( () => {
        Axios.get("http://localhost:8000/api/products")
            .then(res => {
                setListState(res.data)
            })
            .catch(err => console.log(err))
    })

    const removeFromDom = (prodId) => {
        setListState(listState.filter(item => item._id !== prodId))
    }

    const deleteHandler = (prodId) => {
        Axios.delete("http://localhost:8000/api/product/" + prodId)
            .then(res => {
                removeFromDom(prodId)
                
            })
            .catch(err => console.log(err))
    }

    return(
        <div>

           <h2>Product List</h2>

           <Table striped bordered hover responsive>
               <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
               </thead>
               <tbody>
                    {listState.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={"/" + item._id}>
                                        {item.title}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/" + item._id + "/edit"}>
                                        <Button variant="secondary">Update</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button variant="primary" onClick={(e)=>{deleteHandler(item._id)}}>Delete</Button>
                                </td>
                            </tr>
                    ))}
               </tbody>
            </Table>
        </div>
    )
}

export default List;