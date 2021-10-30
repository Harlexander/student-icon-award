import { useState } from 'react'
import { firestore } from '../firebase/firebase'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const [alert, setAlert] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    firestore.collection("Messages").add({
      email : email,
      name : name,
      message : message
    })
    .then(() => {  clearState();
    setAlert("Thank You " +name+ "! We will respond to you shortly.")})

    setTimeout(()=> {
      setAlert("")
    }, 3000)
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
        <div className='section-title text-left'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below if you have issues with the voting and we will sort it out.
                </p>
              </div>
            <div className='row'>
              {alert && <p className="alert alert-success">{alert}</p>}
              <form name='sentMessage' className="col-md-6"validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
      </div>
      </div>
  )
}
