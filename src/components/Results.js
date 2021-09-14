import React, {useState, useEffect} from 'react'
import { firestore } from '../firebase/firebase'

const Results = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      let table = []
      firestore.collection("Votes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
           table.push({category : doc.id, nominees : [doc.data()]})
        });
        setData(table)
    });
    }, [])
    console.log(data)
    return (
        <div>
            <table className="table-bordered table striped">
                <thead>
                    <th className="py-3">Category</th>
                    <th className="py-3">Votes</th>
                </thead>
               {
                data.map(({category, nominees}) => {
                    return (
                    <>
                    <tr>
                        <td className="h6 py-3">{category}</td>
                        <td className="px-2 py-3">{JSON.stringify(nominees[0])}</td>
                    </tr>
                    </>
                )})
            } 
            </table>
            
        </div>
    )
}

export default Results
