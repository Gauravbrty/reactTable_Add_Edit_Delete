import React, { useState, Fragment } from 'react';
import './App.css';
import data from "./components/mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from './components/ReadOnlyRow';
import Editrows from './components/Editrows';


const App = () => {

  const [peopleData, setPeopleData] = useState(data);
  const [addformdata, setaddformdata] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })
  const [editFormData, seteditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })

  const [editpeopleid, setEditpeopleid] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addformdata };
    newFormData[fieldName] = fieldValue;
    setaddformdata(newFormData);
  }


  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addformdata.fullName,
      address: addformdata.address,
      phoneNumber: addformdata.phoneNumber,
      email: addformdata.email,
    }
    const newContacts = [...peopleData, newContact];
    console.log(newContacts, "newContactsnewContactsnewContacts");
    setPeopleData(newContacts);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedPeople = {
        id: editpeopleid,
        fullName: editFormData.fullName,
        address: editFormData.address,
        phoneNumber:editFormData.phoneNumber,
        email:editFormData.email,
    }
    const newPeople =[...peopleData]
    const index = peopleData.findIndex((people) =>people.id ===  editpeopleid);
    newPeople[index]=editedPeople;
    setPeopleData(newPeople);
    setEditpeopleid(null);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue;
    seteditFormData(newFormData);
  }

  const Edithandle = (event, peopleData) => {
    event.preventDefault();
    setEditpeopleid(peopleData.id);

    const formValues ={
      fullName: peopleData.fullName,
      address:peopleData.address,
      phoneNumber:peopleData.phoneNumber,
      email:peopleData.email,
    }
    seteditFormData(formValues);
  }

  const handleCancel = () => {
    setEditpeopleid(null);

  }

  const handleDelete = (peopleId) => {
const newPeople = [...peopleData]
const index = peopleData.findIndex((people) => people.id === peopleId);
newPeople.splice(index, 1);
setPeopleData(newPeople);
  }

  return (
    <div className='app-container'>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {peopleData.map((peopleData) => (
            <Fragment>
              {editpeopleid === peopleData.id ? (<Editrows editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancel={handleCancel} />) : (<ReadOnlyRow peopleData={peopleData} Edithandle={Edithandle} handleDelete={handleDelete} />)}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder='Enter a fullname'
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder='Enter a address'
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder='Enter a number'
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder='Enter a email'
          onChange={handleAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
export default App;