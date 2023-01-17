import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

 const Profile = () => {


  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [editing, setEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const navigate = useNavigate();
 
  const handleChange = (e) => {
    
      if (e.target.name === "picture") {
        setProfilePicture(e.target.files[0]);
      }else{ setUser({
      user,
      [e.target.name]: e.target.value,
    });
  }
  };
 
  const handleEdit = () => {
    setEditing(!editing);
  };
 
  const handleSave = (e) => {
    e.preventDefault();
    // save the user's updated information to your database
    setEditing(false);
  };
 
 
 
 
  return (
 
    <div className="user-profile">
      <h1>User Profile</h1>
      <form>
      <div className="form-group">
        <label htmlFor="picture">Profile Picture</label>
        <input
              type="file"
              name="picture"
              id="picture"
              onChange={handleChange}
            />
      </div>
 
      <button type="submit">Save</button>

        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={() => navigate('/dashboard')}>Home</button>
    </div>
    
  )
  
}

export default Profile
