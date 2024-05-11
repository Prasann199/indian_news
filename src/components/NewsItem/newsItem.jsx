import React from "react";
import Img from "../../assets/pasted image 0.png";
import "./newsItem.css";

export default function NewsItem({ title, description, src, url }) {
  return (
    <div className=" my-style">
      <div class="card bg-dark text-light my-style2 container" style={{ maxWidth: "386px" }}>
        <img src={src?src:Img} style={{height:"200px",width:"360px"}} class="card-img-top my-3 img-fluid mx-auto" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title.slice(0,50)}</h5>
          <p class="card-text">{description?description.slice(0,90):"An incident has been occured in a place and the description for this incident is not provided"}</p>
          <a href={url} class="btn btn-primary">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
