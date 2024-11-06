import React, { useState } from "react";

// Sample data for materials, sizes, and quantities
const materials = [
    { name: "Vinyl", image: "path/to/vinyl-image.jpg" },
    { name: "Holographic", image: "path/to/holographic-image.jpg" },
    { name: "Clear", image: "path/to/clear-image.jpg" },
    { name: "Glitter", image: "path/to/Glitter-image.jpg" },
    { name: "Mirror", image: "path/to/mirror-image.jpg" },
    { name: "Pixie Dust", image: "path/to/pixie-dust-image.jpg" },
    { name: "Prismatic", image: "path/to/prismatic-image.jpg" },
    { name: "Brushed Aluminum", image: "path/to/brushed-aluminum-image.jpg" },
    { name: "Kraft Paper", image: "path/to/kraft-paper-image.jpg" },
    { name: "Hi-Tack Vinyl", image: "hi-tack-vinyl-image.jpg" },
    { name: "Glow-in-the-Dark", image: "path/to/glow-in-the-dark-image.jpg" },
    { name: "Reflective", image: "path/to/reflective-image.jpg" },
    { name: "Low Tack Vinyl", image: "path/to/low-tack-vinyl-image.jpg" },
    // Add more materials as needed
];

const dieCutShapes = ["Counter Cut", "Square", "Circle", "Rounded Corners"];
const dieCutSizes = ["2x1", "2x2", "3x2", "3x3", "4x3", "4x4", "5x2", "5x3", "8x4"];
const quantities = [10, 50, 100, 500]; // Example quantities

const Products = () => {
    const [selectedType, setSelectedType] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [selectedFinish, setSelectedFinish] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState("");

    // Determine finish options based on selected type and material
    let finishOptions = ["Matte", "Glossy"];
    if (selectedType === "Die Cut Sticker") {
        if (["Vinyl", "Holographic", "Clear"].includes(selectedMaterial)) {
            finishOptions = ["Glossy", "Matte", "Cracked Ice"];
        } else if (["Glitter", "Pixie Dust", "Prismatic", "Brushed Aluminum", "Glow-in-the-Dark", "Reflective"].includes(selectedMaterial)) {
            finishOptions = ["Glossy"];
        } else if (["Mirror", "Low Tack Vinyl"].includes(selectedMaterial)) {
            finishOptions = ["Glossy", "Matte"];
        } else if (["Kraft Paper"].includes(selectedMaterial)) {
            finishOptions = ["Uncoated"];
        } else if (["Hi-Tack Vinyl"].includes(selectedMaterial)) {
            finishOptions = ["Glossy 12 mil"];
        }
    }

    return (
        <div>
            <section>
                <h1>Custom Sticker Selection</h1>
                <p>Choose from our selection of custom stickers</p>
                
                <label>Choose Sticker Type:</label>
                <select onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="Die Cut Sticker">Die Cut Sticker</option>
                    <option value="Sticker Sheet">Sticker Sheet</option>
                    {/* Add more types as needed */}
                </select>

                {selectedType === "Sticker Sheet" ? (
                    <>
                        <label>Choose Shape:</label>
                        <select onChange={(e) => setSelectedShape(e.target.value)}>
                            <option value="Square">Square</option>
                        </select>
                    </>
                ) : (
                    <>
                        <label>Choose Shape:</label>
                        <select onChange={(e) => setSelectedShape(e.target.value)}>
                            {dieCutShapes.map((shape, index) => (
                                <option key={index} value={shape}>{shape}</option>
                            ))}
                        </select>
                    </>
                )}

                <label>Choose Material:</label>
                <div className="materials-scroll">
                    {materials.map((material, index) => (
                        <div 
                            key={index} 
                            className="material-option" 
                            onClick={() => setSelectedMaterial(material.name)}
                        >
                            <img src={material.image} alt={material.name} />
                            <p>{material.name}</p>
                        </div>
                    ))}
                </div>

                <label>Select Finish:</label>
                <select onChange={(e) => setSelectedFinish(e.target.value)}>
                    {finishOptions.map((finish, index) => (
                        <option key={index} value={finish}>{finish}</option>
                    ))}
                </select>

                <label>Choose Size:</label>
                <select onChange={(e) => setSelectedSize(e.target.value)}>
                    {dieCutSizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                    ))}
                </select>

                <label>Choose Quantity:</label>
                <select onChange={(e) => setSelectedQuantity(e.target.value)}>
                    {quantities.map((quantity, index) => (
                        <option key={index} value={quantity}>{quantity}</option>
                    ))}
                </select>
            </section>
        </div>
    );
};

export default Products;
