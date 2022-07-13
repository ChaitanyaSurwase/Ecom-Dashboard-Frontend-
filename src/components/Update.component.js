import React, { useEffect } from "react";
import { useParams , useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [companey, setCompaney] = React.useState("");
    const params = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    },[])

    const getProductDetails = async () => {
        // console.warn(params)
        let result = await fetch(`http://localhost:4000/product/${params.id}`);
        result = await result.json()
        // console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompaney(result.companey)


    }

    const updateProduct = async () => {

        console.warn(name, price, category, companey)
        let result = await fetch(`http://localhost:4000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, category, companey }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json()
        // console.warn(result)su
        if (result) {
            navigate("/")
            
        }
    }
    return (
        <div className="product">
            <h1>Update Product component</h1>
            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />


            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Company"
                value={companey}
                onChange={(e) => setCompaney(e.target.value)}
            />


            <button onClick={updateProduct} className="appButton">Update Product</button>
        </div>
    );
};

export default UpdateProduct;
