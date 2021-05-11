import React from "react";
import data from "../data";

export default function ProductScreen(props) {
  const { products } = data;
  const number = Math.floor(Math.random() * 5) + 3;
  const secondnumber = Math.floor(Math.random() * 5) + 5;
  const relatedItems = products.slice(number, secondnumber);
  const product = data.products.find((x) => x.id === props.match.params.id);
  console.log("number", number);
  console.log("number2", number);

  if (!product) {
    <div>Product not found</div>;
  }
  return (
    <div>
      <div className="first-section">
        <a href="/">
          <img
            alt={product.name}
            className="title"
            src="../images/Untitled1.png"
          />
        </a>
        <p>Download Free Porn Videos & Porn Movies</p>
        <div className="essentials">
          <h4 className="no1">
            {" "}
            <a href="/contact">Contact</a>
          </h4>
          <h4 className="no1">
            {" "}
            <a href="/signin">Sign In</a>
          </h4>
        </div>
      </div>
      <div className="second-section ">
        <div className="card middle">
          <div className="video">
            <video
              width="320"
              height="240"
              className="details-video"
              src={product.video}
              controls
            ></video>
          </div>
          <div className="productScreen-items">
            <p className="productTitle">{product.name}</p>
            <a className="download-btn" href={product.download}>
              Download clip
            </a>
          </div>
          <div className="related">
            <fieldset>
              <legend>Releted videos</legend>
              <div className="second-section">
                {relatedItems.map((product) => (
                  <div key={product.id} className="card">
                    <a href={`/product/${product.id}`}>
                      <img
                        alt={product.name}
                        src={product.poster}
                        loading="lazy"
                        className="poster"
                      />
                    </a>
                    <a href={`/product/${product.id}`}>{product.name}</a>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
