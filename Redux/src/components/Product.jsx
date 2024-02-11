import React from 'react';
import { useGetProductQuery } from '../features/todo/todoapi';

const Product = () => {
    const { data, isLoading, isError }=useGetProductQuery()
    console.log(data);
    return (
        <div>
            <h1>Here are the products</h1>
            {data?.products.map((d)=><><p>{d.price}</p></>)}
        </div>
    );
}

export default Product;
