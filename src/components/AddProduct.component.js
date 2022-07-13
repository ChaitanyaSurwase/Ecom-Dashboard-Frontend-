import React from "react";

const AddProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [companey, setCompaney] = React.useState("");
    const [error, setError] = React.useState(false);

    const addProduct = async () => {
if (!name || !price || !category || !companey) {
    setError(true)
    return false
}

        console.warn(name, price, category, companey)
        const userId = JSON.parse(localStorage.getItem('user'))._id
        console.warn(userId)

        let result = await fetch("http://localhost:4000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, companey, userId }),
            headers: {

                "Content-Type": "application/json",
            }
        });
        result = await result.json();
        console.warn(result)
    }
    return (
        <div className="product">
            <h1>Add product component</h1>
            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

       {error && !name&& <span className="invalid-input">  Enter Valid Name</span>}

            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
       {error && !price && <span className="invalid-input">  Enter Valid Name</span>}

            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
                   {error && !category && <span className="invalid-input">  Enter Valid Name</span>}

            <input
                className="inputBox"
                type="text"
                placeholder="Enter Product Company"
                value={companey}
                onChange={(e) => setCompaney(e.target.value)}
            />
       {error && !companey && <span className="invalid-input">  Enter Valid Name</span>}


            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    );
};

export default AddProduct;
