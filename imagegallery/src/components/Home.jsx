import ImageCard from "./ImageCard";
import useFetch from "./useFetch";

const Home =() => {
    

    const {images,error,isloading} = useFetch(`https://pixabay.com/api/?key=46474546-5e82edb11697ba67086783198&q=&image_type=photo&pretty=true`);

    return (
    <div>
    <div>Unsplash is your one stop solution for any image</div>
    <div>View our latest Collection</div>
    <ImageCard  images={images} isloading={isloading} error={error} />
    </div>

  )
}
export default Home