import React from 'react'

export default function Product(props) {
  const {product} = props;
  return (
    <div key={product.id} className="card">
        <a href={`/product/${product.id}`}><img src={product.poster} loading="lazy" className="poster"/></a>
        <a href={`/product/${product.id}`}>{product.name}</a>
    </div>
  )
}
