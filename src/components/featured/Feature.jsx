import React from 'react';
import photos from "../../photos";
import "./style.scss";
function Feature() {
    const [firstUrl,secondUrl]= photos;
  return (
    <section className="feature-section">
        <div className="feature-row-layout">
            <h6>green</h6>
            <img src={firstUrl}/>
        </div>
        <div className="feature-column-layout">
            <h6>lily</h6>
            <img src={secondUrl} alt="" />
        </div>
    </section>
  )
}

export default Feature
