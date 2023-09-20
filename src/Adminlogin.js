import { Form } from 'semantic-ui-react';
import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import './Adminlogin.css';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const navigate = useNavigate();
  
  const [open, setOpen] = React.useState(false);
  const [adminId, setAdminId] = useState();
  const [adminPassword, setAdminPassword] = useState();

  const AddAdmin = () => {
    let adminDetails = {
      adminId: adminId,
      adminPassword: adminPassword
    };

    adminDetails = JSON.stringify(adminDetails);

    localStorage.setItem(adminId, adminDetails);
    
    setOpen(false);
    alert("You are an Admin now. Try to log in with your credentials.");
  };

  const [inputAdminId, setInputAdminId] = useState();
  const [inputAdminPass, setInputAdminPass] = useState();

  const Login = () => {
    let adminDetails = JSON.parse(localStorage.getItem(inputAdminId));

    if (inputAdminPass === adminDetails.adminPassword) {
      alert("Your credentials are valid.");
      sessionStorage.setItem("temp", inputAdminId);

      navigate('/Adminpage');

    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    
      <div className='Adminlogin'> 
      <Form>
        <Form.Field>
          <label> <p> Enter Admin ID :</p></label>
          <input
            placeholder='Enter Admin ID'
            value={inputAdminId}
            onChange={(e) => setInputAdminId(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label> <p> Enter Password :</p></label>
          <input
          type="password"
            placeholder='Enter Password'
            value={inputAdminPass}
            onChange={(e) => setInputAdminPass(e.target.value)}
          />
        </Form.Field>
        <br />
        <Button type='submit' onClick={Login}>
           Log In
        </Button>
        <br />
        <br />

        <Modal 
          closeIcon
          open={open}
          trigger={<Button>Click here to become an Admin/</Button>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Header icon='clipboard outline' content='Please fill the following details.' />
          <Modal.Content >
            <h1>Enter Unique ID :</h1>
            <input
              type='text'
              placeholder='Enter Unique ID here'
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
            />
            <h1>Enter Password :</h1>
            <input
              type="password"
              placeholder='Enter Password here'
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={() => setOpen(false)}>
              <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' onClick={AddAdmin}>
              <Icon name='checkmark' /> Submit
            </Button>
          </Modal.Actions>
        </Modal>
      </Form>
        
      </div>


      
    
  );
};

export default Adminlogin;
