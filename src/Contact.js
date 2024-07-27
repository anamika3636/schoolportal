import { useState } from "react";


const Contact =()=>{
    const [user,setuser]= useState({
        fullname:" ",
        emailid:" " ,
        password:"",
        text:" "

    });
    const [record,setnewrecord]=useState([])
    const handleclick =(e)=>{
     const name= e.target.name
     const value=e.target.value
     console.log(name,value)
     setuser({ ...user, [name] : value})
    }
    
    const handlesubmit =(e)=>{
      e.preventDefault();
      const newrecord={...user, id:new Date().getTime().toString()}
      console.log(record)
      setnewrecord([...record, newrecord])
      console.log(record)
     setuser({fullname:" ", emailid:" ", password:"" , text:""})
     
    }
    return(
        <div>
        <div className="flex">
         
        <form action="" onSubmit={handlesubmit} className=" px-40 w-1/2 h-3/6 m-4  bg-slate-200 mx-20 rounded-xl ">
         <div>
                <label>Full Name</label><br></br>
                <input className="border border-solid sm:items-center  p-2 m-4 sm: border-gray-400 shadow-lg rounded-lg"
                 name="fullname" id="fullname"  value={user.fullname} placeholder="full name" onChange={handleclick} type="text"></input>
            
        </div>
        <div>
        <label htmlFor="emailid">email id</label><br></br>
        <input type="text" className="border border-solid sm:items-center  p-2 m-4 sm: border-gray-400 shadow-lg rounded-lg" 
        value={user.emailid} onChange={handleclick} name="emailid" id="emailid" ></input>
        </div>
        <div>
            
                <label>Password</label><br></br>
                <input className="border border-solid sm:items-center  p-2 m-4 sm: border-gray-400 shadow-lg rounded-lg" 
                name="password " id="password" value={user.password} onChange={handleclick} type="password"></input>
            
        </div>
        <div>
            
                <label>Text</label><br></br>
                <input className="border border-solid sm:items-center  p-2 m-4 sm: border-gray-400 shadow-lg rounded-lg"
                 name="text" id="text" value={user.text} onChange={handleclick} type="text"></input>
            
        
        </div>
        <div>
            <button type="submit" className="mx-20 mb-2 sm:px-4 sm:items-center p-1 text-white shadow-xl  bg-red-500 rounded-lg ">Submit</button>
        </div>
        </form>
        <div>
    
            {
                record.map((cur)=>{
                    return(
                        <div className=" m-4  p-4 w-[300px] mx-20 h-[340px] items-center border border-solid shadow-xl rounded-lg bg-yellow-200  ">
                        {/* {alert("submited")} */}
                        <h1 className="text-xl font-semibold italic">Will call you shortly</h1>
                            <h1>Fullname -{cur.fullname}</h1>
                            <p>Email id -{cur.emailid}</p>
                            <p> {cur.password}</p>
                            <p>Query - {cur.text}</p>
                        </div>
                    )
                })
            }
        </div>
        
    
        </div>
        <div>
          
        </div>
        </div>
    )
}
export default Contact;