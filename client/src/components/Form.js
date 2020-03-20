import React, {useState} from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Form = () => {
    const [formState, setFormState] = useState({
        title: '',
        price: 0,
        description:''
    })

    const [errorState, setErrorState] = useState([])

    const changeForm = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products", formState)
            .then(res => console.log(res))
            .catch(err => {
                const {errors} = err.response.data;
                const errorArr = [];
                for(const key of Object.keys(errors)){
                    errorArr.push(errors[key].message)
                }
                setErrorState(errorArr)
            })
    }

    return(
        <div>
            <Jumbotron>
                <form onSubmit={handleSubmit}>
                    <h1>PRODUCT MANAGER</h1>
                    <p>Title: <input type="text" name="title" value={formState.title} onChange={(e) => changeForm(e)} /></p>
                    <p>Price: <input type="text" name="price" value={formState.price} onChange={(e) => changeForm(e)} /></p>
                    <p>Description: <input type="text" name="description" value={formState.description} onChange={(e) => changeForm(e)} /></p>
                    <input type="submit" value="Create" className="btn btn-primary"/>
                </form>
                {errorState.map((item,i) => <p key={i}>{item}</p>)}
            </Jumbotron>

        </div>
    )
}

export default Form;
