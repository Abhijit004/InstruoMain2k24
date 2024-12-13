import React from "react";
import "./PreviousEditions.css";
import BentoGrid from "../../components/BentoGrid/BentoGrid";
import { useRef, useState, useEffect } from "react";

const PreviousEditions = () => {
    const width = window.innerWidth - 20;

    return (
        <section className="instruo-prev">
            <div className="heading">Previous Editions</div>
            <div className="gallery">
                <div className="glowy1">
                    <img src="/assets/galleryBack.webp" alt="glowy" />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <BentoGrid scale={1} />
                </div>
                <div className="glowy2">
                    <img src="/assets/galleryBack.webp" alt="glowy" />
                </div>
            </div>
        </section>
    );
};

export default PreviousEditions;
