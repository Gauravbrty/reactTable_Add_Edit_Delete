import React from 'react';


const Editrows = ({editFormData,handleEditFormChange,handleCancel}) => {


    return(
<tr>
<td>
<input
  type="text"
  name="fullName"
  required="required"
  placeholder='Enter a fullname'
  value={editFormData.fullName}
  onChange={handleEditFormChange}
  ></input>
</td>
<td> 
<input
  type="text"
  name="address"
  required="required"
  placeholder='Enter a address'
  value={editFormData.address}
  onChange={handleEditFormChange}
  ></input>
</td>
<td>
<input
  type="text"
  name="phoneNumber"
  required="required"
  placeholder='Enter a number'
  value={editFormData.phoneNumber}
  onChange={handleEditFormChange}
  ></input>
</td>
<td>
<input
  type="text"
  name="email"
  required="required"
  placeholder='Enter a email'
  value={editFormData.email}
  onChange={handleEditFormChange}
  ></input>
</td>
<td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button> 
</td>
</tr>
    )
}

export default Editrows;