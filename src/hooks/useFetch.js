
import { useState, useEffect } from "react";
const useFetch = (url) => {
    var [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(url)
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setData(data);
          console.log(data);
        });
        return () => {
          
        }
      }, [url]);
    return [data, setData];
}

export default useFetch;