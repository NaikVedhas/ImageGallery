import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [images,setImages]= useState([]);
    const [isloading,setisLoading] = useState(true);
    const [error,setError]= useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => { 
            if(!res.ok){
                throw Error("Database Down");
            } 
            return res.json();
        })
        .then( data => {
            console.log(data);
    
            setImages(data.hits);        
            setisLoading(false);
            setError(null);
        })
        .catch( err => {
            console.log(err);
            setError(err.message);
            setisLoading(false);
        });
    },[]);

    return  {images,error,isloading};
}
export default useFetch;