import React, { useEffect, useState } from 'react'

export default function Fetching() {
    const [isError, setIsError] = useState(null);
    const [isLoad, setIsLoad] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then((result) => {
            setIsLoad(true);
            setData(result);
            console.log(result);
        },
        ((err) => {
            setIsLoad(true);
            setIsError(err);
        })
        )
    }, [])

    if(!isLoad) {
        return (
            <p> Loading... </p>
        )
    } else if(isError) {
        return (
            <p> Error: {isError.message} </p>
        )
    } else {
        return (
            <div>
                <ul>
                {data.map((item, index) => {
                        return (
                            <li key={index.id}>
                                {item.data}
                            </li>
                        )
                    })}
                </ul>
            </div>
          )
    }
}
