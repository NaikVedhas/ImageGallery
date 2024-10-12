function Gallery() {
  
    const [term,setTerm]= useState('');

    const api = useFetch(`https://pixabay.com/api/?key=46474546-5e82edb11697ba67086783198&q=${term}&image_type=photo&pretty=true`);
  
    return (
    <div>Gallery</div>
  )
}
export default Gallery

//Yaha pe hoga search ka option 