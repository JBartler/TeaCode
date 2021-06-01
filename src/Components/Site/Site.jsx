import React,{useState, useEffect} from 'react'

import List from '../List/List'
import '../Site/Site.css'

export default function Site() {

    const [users,setUsers]= useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => { 
        getCrew()
    },[]);


    const getCrew = async () => {
        const response = await fetch('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json');
        const data = await response.json();
        data.sort((a,b) => (b.last_name < a.last_name ) ? 1 : -1)
        setUsers(data)
        }


    return (
        <div>
            <div className="title">
                <p>Contacts</p>
            </div>
            <input type="text " placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}} />
            <ul>
                <li>
                    {users.filter((value) => {
                        if(searchTerm === '' ){
                            return value
                        } else if
                        (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())||
                        value.last_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return value
                        }
                    }).map(user => (
                        <List 
                        id = {user.id}
                        avatar = {user.avatar}
                        firstName = {user.first_name}
                        lastName = {user.last_name}
                        />
                    ))} 
                </li>
            </ul>
        </div>
    )
}

