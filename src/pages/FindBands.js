import axios from 'axios'
import { useEffect, useState } from 'react'
function FindBands(){
    const [allBands, setAllBands] = useState(null)
    useEffect(() => {
        axios({
            method: "get",
            url : 'https://protected-gorge-89882.herokuapp.com/allBands'
        }).then(function(res){
            console.log(res)
            setAllBands(res.data)
        })
    }, [])
    return(
        <div className="flex flex-wrap">
            {allBands != null ? 
            allBands.map((band) => (
            <div className="container flex mx-auto bg-gray-100 drop-shadow-sm m-1.5 text-lg">{band.bandName} {band.state}, {band.city}</div>
            )) : ""
        }
        </div>
    )
}
export default FindBands