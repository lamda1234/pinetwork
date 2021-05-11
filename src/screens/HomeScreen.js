import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import SearchBox from "../components/SearchBox";
import data from "../data";

export default function HomeScreen() {
  const { products } = data;
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('')
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });


  useEffect(() => {
    try {
      setLoading(true);
      setItems(products.slice(pagination.start, pagination.end));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [pagination, products]);

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };


  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox></MessageBox>
      ) : (
        <div>
          <div className="first-section">
            <a href="/">
              <img alt="" className="title" src="./images/Untitled1.png" />
            </a>
            <p>Download Free Porn Videos & Porn Movies</p>
            <div className="essentials">
              <h4 className="no1">
                <a href="/contact">Contact</a>
              </h4>
              <h4 className="no1">
                <a href="/signin">Sign In</a>
              </h4>
            </div>
            <SearchBox searchHandeler={(e) => setInput(e.target.value)}></SearchBox>
          </div>
          <div className="second-section">
            {items.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={products.length}
          />
        </div>
      )}
    </div>
  );
}
