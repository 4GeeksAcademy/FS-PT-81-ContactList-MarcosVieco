import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditForm = props => {

    const { store, actions } = useContext(Context);
 
    const [contactData, setContactData] = useState({name: store.selected?.name, email: store.selected?.email, phone: store.selected?.phone, address: store.selected?.address, id: store.selected?.id})

    const handleChange = e => {
		const {name, value} = e.target;
			setContactData({...contactData, [name]: value})
		}

	const handleSubmit = e => {
		e.preventDefault();
		actions.editContact(contactData)
        actions.getContacts()
		navigate('/')

	}

    const navigate = useNavigate()

    return (
        <div className="container">
        <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
            <h2 className="align-self-center mt-4">Add a new contact</h2>
            <label htmlFor="name"><strong>Full Name</strong></label>
            <input type="text" id="name" name="name" placeholder="Full name" value={contactData.name} onChange={handleChange}></input>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id="email" name="email" placeholder="Enter email" value={contactData.email} onChange={handleChange}></input>
            <label htmlFor="phone"><strong>Phone</strong></label>
            <input type="number" id="phone" name="phone" placeholder="Enter phone" value={contactData.phone} onChange={handleChange}></input>
            <label htmlFor="address"><strong>Address</strong></label>
            <input type="text" id="address" name="address" placeholder="Enter address" value={contactData.address} onChange={handleChange}></input>
            <button className="btn btn-primary mt-2" type="submit"><strong>save</strong></button>
        </form>
<Link to="/">
<p className="">or get back to contacts</p>
</Link> 
</div>
    )
}