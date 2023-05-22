import Layout from '@/components/Layout'
import React from 'react'
import Link from 'next/link'

const Products = () => {
  return (
    <Layout>
        <Link className='btn-primary' href={'/products/new'}>Add new Prompt</Link>    
    </Layout>
  )
}

export default Products