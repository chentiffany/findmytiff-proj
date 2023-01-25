import React, {useState} from 'react';
import {database} from '../firebase';
import {ref,push,child,update} from "firebase/database";

function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [email, setEmail] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }

        if(id === "email"){
            setEmail(value);
        }
    }

    const handleSubmit  = () => {
        console.log(firstName, email);
        let obj = {
            firstName : firstName,
            email: email,
        }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <div>
                    <label className="form__label" for="firstName">display name</label>
                  </div>
                  {/* <input type="text" class = "form-control" id="name" name="name"/> */}
                  <input className="form__input" id = "input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName"/>
              </div>
              <div className="thoughts">
                  <div>
                    <label className="form__label" for="email">your profound thoughts</label>
                  </div>
                  {/* <textarea type="text" class = "form-control" id="content" name="content"/> */}
                  <textarea  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)}/>
              </div>
          </div>
          <div class="footer">
          <button onClick={()=>handleSubmit()} type="button" id = "pinkbtn">post</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;