import {useState , useEffect} from 'react';

const useApiData = () => {

    const [getApi , SetGetApi] = useState([]);
    
    useEffect(() => {
        fetch("./services-api.json").
            then(res => res.json()).
            then(data => SetGetApi(data))
    }, [])
    
    return [getApi];
};

export default useApiData;