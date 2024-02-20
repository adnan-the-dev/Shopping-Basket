import React, { useState } from "react";
import { arrayOfImages } from "../array";
import Table from "../table/Table";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState([]);
  const handleImageClick = (image) => {
    setSelectedImage([...selectedImage, image]);
  };
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {arrayOfImages.map((image, index) => (
              <tr key={index}>
                <td>
                  <img
                    style={{ width: "50%" }}
                    src={image.url}
                    alt={image.title}
                    onClick={() => handleImageClick(image)}
                  />
                </td>
                <td>{image.title}</td>
                <td>${image.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Table selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
      </div>
    </>
  );
}
