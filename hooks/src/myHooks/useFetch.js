import { useEffect, useState } from "react";

function useFetch(url, method = 'get'){

    const [response, setResponse] = useState({
        data: null,
        loading: false
    });

    useEffect(() => {
        fetch(url, {
            method: method
        }).then(resp => resp.json())
           .then(data => setResponse({
            data: data,
            loading: false
           }))


    }, [url, method])

    return response

}

export default useFetch;