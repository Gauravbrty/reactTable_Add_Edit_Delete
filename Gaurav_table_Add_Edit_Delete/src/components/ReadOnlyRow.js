import React from 'react';


const ReadOnlyRow = ({peopleData, Edithandle,handleDelete}) => {
    console.log(peopleData);


return(
 <tr>
    <td>{peopleData.fullName}</td>
    <td>{peopleData.address}</td>
    <td>{peopleData.phoneNumber} </td>
    <td>{peopleData.email}</td>
    <td>
      <button type='button' onClick={(event) => Edithandle(event, peopleData)} >Edit</button>
      <button type='button' onClick={() => handleDelete(peopleData.id)} >Delete</button>
    </td>
  </tr>
)
}

export default ReadOnlyRow;