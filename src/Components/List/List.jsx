import React, {useState} from 'react'
import './List.css'

export default function List({avatar,firstName, lastName, checkbox,id}) {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="listContainer">
        <div className={toggle ? "active" : null} key={id} onClick = { () => {
                console.log(firstName, lastName)
                handleToggle()
            }}>
            {checkbox}
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="apiData">
                {firstName} {lastName}
            </div>
        </div>
        </div> 
    )
}
