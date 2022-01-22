
import React,{useEffect, useState} from 'react';
import View from './components/View'

//getting the values of local storage

const getDataFromLS=()=>{
  const data=localStorage.getItem('details');
  if(data){
    console.log(data);
    return JSON.parse(data)
  }else{
    return []
  }
}


const App=()=>{
  //main array of objects state || books state || books array of objects

  const [details,setDetails]=useState(getDataFromLS())

  //input field states

  const [userName,setUserName]=useState('')
  const [passWord,setPassWord]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState('')

  //form submit event

  const handleSubmit=(e)=>{
    e.preventDefault();
    //creating an object
    let detail={
      userName,
      passWord,
      email,
      age
    }
    console.log(detail.userName);
    setDetails([...details,detail])
    setUserName('')
    setPassWord('')
    setEmail('')
    setAge('')
  }

  //delete detail from LS

  const deleteDetail=(userName)=>{
const filteredDetails=details.filter((element,index)=>{
  return element.userName !== userName;
})
setDetails(filteredDetails)

  }
  //saving data to local storage

  useEffect(()=>{
    localStorage.setItem('details',JSON.stringify(details))
  },[details])

  return (
    <div className="wrapper">
    <h1>Local Storage</h1>
    <div className="main">
      <div className="form-container">
        <form autoComplete="off" className='form-group' onSubmit={handleSubmit}> 
        <label>UserName:</label>
        <input type="text" className='form-control' placeholder='Enter Username' onChange={(e)=>setUserName(e.target.value)} value={userName}/>
        <br></br>
        <label>Password:</label>
        <input type="password" className='form-control' placeholder='Enter Password' onChange={(e)=>setPassWord(e.target.value)} value={passWord}/>
        <br></br>
        <label>Email:</label>
        <input type="email" className='form-control' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br></br>
        <label>Age:</label>
        <input type="number" className='form-control' placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} value={age}/>
        <br></br>
        <button type="submit" className='btn btn-success btn-md'>Submit</button>
        </form>
      </div>
      <div className='view-container'>
        {details.length>0 && <div>
        <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>User Nane</th>
              <th>Passwors</th>
              <th>Email</th>
              <th>Age</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <View details={details} deleteDetail={deleteDetail} />
          </tbody>
        </table>
        </div>
        </div>}
      {details.length<1 && <div>No details are added yet</div> }
      </div>
    </div>
    </div>
  )
}

export default App;
