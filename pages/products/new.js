import Layout from "@/components/Layout";
import React, { useState } from "react";
import axios from 'axios'

const NewProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const createProduct = (e) => {
        e.preventDefault();
        const data = {title, description, price}
        axios.post('/api/products', data)

    }
  return (
    <Layout>
        <form onSubmit={createProduct}>

      <h1>프롬프트 등록</h1>
      <label>프롬프트 이름</label>
      <input type="text" placeholder="프롬프트명" value={title} onChange={e => setTitle(e.target.value) } />
      <label>프롬프트 설명</label>

      <textarea placeholder="프롬프트 설명" value={description} onChange={e => setDescription(e.target.value)} />
      <label>판매가격</label>

      <input type="number" placeholder="금액" value={price} onChange={e => setPrice(e.target.value)} />
      <button className="btn-primary" type='submit'>등록</button>
        </form>
    </Layout>
  );
};

export default NewProduct;
