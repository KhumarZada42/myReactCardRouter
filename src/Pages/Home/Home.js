import React, { useEffect, useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import axios from "axios";
import "./Home.scss"
function Home() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setPost(response.data);
        });
    }, []);
    return (
        <>

            <Navbar />
            <section>
                <div className="sectionCards">
                    <div className="card">
                        {post.map((element) => {
                            return (
                                <div class="card" style={{ width: "20rem" }}>
                                    <img src={element.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{element.title}</h5>
                                        <p class="cardDesc">{element.description.substring(0,30) + " "+ "..." }</p>
                                        <p class="card-text">{element.price}</p>
                                        <a href="!#" class="btn">Buy</a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;