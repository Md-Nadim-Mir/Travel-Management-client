


import { useEffect, useState } from "react";



const Review = () => {

    let [testmonial, setTestomonial] = useState([]);

    useEffect(() => {

        fetch('review.json')
            .then(res => res.json())
            .then(data => setTestomonial(data))

    }, [])



    return (

        <div>


            <h1 className="text-3xl font-bold text-center pt-16">Patient Review</h1>


        </div>
    );
};

export default Review;