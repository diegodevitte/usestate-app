import React, { useState } from 'react'

const initialCart = [
    { id: 1, title: "Product", description: "Desc" },
    { id: 2, title: "Product #2", description: "Desc #2" },
    { id: 3, title: "Product #3", description: "Desc #3" },
    { id: 4, title: "Product #4", description: "Desc #4" },
];

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (productId) => {
        const changedCart = cart.filter(product => product.id !== productId);
        setCart(changedCart);
    }

    const addProduct = (newProduct) => {
        newProduct.id = Date.now();
        const changedCart = [
            newProduct,
            ...cart,
        ]
        setCart(changedCart);
    }

    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
                ? editProduct
                : product
        ))
        setCart(changedCart);
    }

    return (
        <div>
            <button onClick={() => addProduct({ title: "Nuevo titulo", description: "Nueva desc" })}>
                Add
            </button>

            {cart.map(product => (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <button onClick={() => deleteProduct(product.id)}>
                        Delete
                    </button>
                    <button onClick={() => updateProduct({ id: product.id, title: "Edit titulo", description: "Edit desc" })}>
                        Update
                    </button>
                </div>
            ))}

            <pre>
                {JSON.stringify(cart, null, 2)}
            </pre>
        </div>
    )
}

export default ShoppingCart