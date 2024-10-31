import React from "react";

const Products = () => {
    const stickers = [
        { id: 1, name: "Sticker 1", img: "/stickers/sticker1.jpg" },
        { id: 2, name: "Sticker 2", img: "/stickers/sticker2.jpg" },
        { id: 3, name: "Sticker 3", img: "/stickers/sticker3.jpg" },
        { id: 4, name: "Sticker 4", img: "/stickers/sticker4.jpg" },
        { id: 5, name: "Sticker 5", img: "/stickers/sticker5.jpg" },
        { id: 6, name: "Sticker 6", img: "/stickers/sticker6.jpg" },
        { id: 7, name: "Sticker 7", img: "/stickers/sticker7.jpg" },
        { id: 8, name: "Sticker 8", img: "/stickers/sticker8.jpg" },
        { id: 9, name: "Sticker 9", img: "/stickers/sticker9.jpg" },
        { id: 10, name: "Sticker 10", img: "/stickers/sticker10.jpg" },
        { id: 11, name: "Sticker 11", img: "/stickers/sticker11.jpg" },
        { id: 12, name: "Sticker 12", img: "/stickers/sticker12.jpg" },
        { id: 13, name: "Sticker 13", img: "/stickers/sticker13.jpg" },
        { id: 14, name: "Sticker 14", img: "/stickers/sticker14.jpg" },
        { id: 15, name: "Sticker 15", img: "/stickers/sticker15.jpg" },
        { id: 16, name: "Sticker 16", img: "/stickers/sticker16.jpg" },
    ];

    return (
        <div>
            <section>
                <h1>Custom Sticker Selection</h1>
                <p>Choose from our selection of custom stickers</p>
            </section>
            <section className="grid-container">
                {stickers.map((sticker) => (
                    <div key={sticker.id} className="card">
                        <a href={`/stickers/${sticker.id}`} className="card-link">
                            <img src={sticker.img} alt={sticker.name} />
                            <h3>{sticker.name}</h3>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Products;
