import React from 'react'

const Result = ({list}) => {
    return (
        <div>
            {
                list.map((item) => (
                    <div>
                        <p className="font-weight-bold">{item.category}</p>
                        <p className="font-weight-bold">{item.institution}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Result
