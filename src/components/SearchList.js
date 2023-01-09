import React from 'react'
//import { Users } from './Users'

function SearchList({ data }) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th className='tbl-font'>
                        First Name 
                    </th>
                    <th className='tbl-font'>
                        Last Name
                    </th>
                    <th className='tbl-font'>
                        Email
                    </th>
                    <th className='tbl-font'>
                        Gender
                    </th>
                </tr>
                {data.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td className='tbl-font'>{user.first_name}</td>
                            <td className='tbl-font'>{user.last_name}</td>
                            <td className='tbl-font'>{user.email}</td>
                            <td className='tbl-font'>{user.gender}</td>
                        </tr>
                    )
                })}
            </thead>
        </table>
    </div>
  )
}

export default SearchList