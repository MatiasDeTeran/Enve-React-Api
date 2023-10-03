import { useState, useEffect } from "react"

export const TraerInfo = (url) => {

    const [data, setData] = useState(null);

        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))

    console.log(data);
    return { data };
}