import React from "react";
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {
    console.warn(data.productData)
    return (
        <>
            <h1 className="text-center mt-3" style={{width: '18rem'}}>All Items</h1>
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {data.productData.map((item, index)=> {
                            return (
                                <Itemcard img={item.img} title={item.title} desc={item.desc} preis={item.preis} key={index} />
                            )
                        })}
                        {/* alternativ <Itemcard img="" title="title" desc="desc"/>*/}

                    </div>
                </section>

        </>
    );

};

export default Home;