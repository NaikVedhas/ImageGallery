import { useState } from "react";
import ImageCard from "./ImageCard";
import useFetch from "./useFetch";
function Gallery() {
  
    const [term,setTerm]= useState('');

    const {images,error,isloading} = useFetch(`https://pixabay.com/api/?key=46474546-5e82edb11697ba67086783198&q=${term}&image_type=photo&pretty=true`);
  
    return (
      <ImageCard images={images} isloading={isloading} error={error} />
    
  )
}
export default Gallery

//Yaha pe hoga search ka option 