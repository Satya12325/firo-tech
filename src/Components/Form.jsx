import { useState, useEffect,useRef} from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo,getTodo } from "../Redux/add/action";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Form(){

    const [name,setName] = useState("");
    const [mobile,setMobile] = useState();
    const [profile,setProfile] = useState("");
    const [email,setEmail] = useState("");
    const [job,setJob] = useState("");
    const [dob,setDob] = useState("");
    const [location,setLocation] = useState("");
    const [imageSrc, setImageSrc] = useState(null);
    const imageRef = useRef(null);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setJob(event.target.value);
      };
      const handleImageChange = (e) => {
        try {
          const file = e.target.files[0];
          setProfile(file)
        } catch (err) {}
        // base-64
      };

      useEffect(() => {
        
        const file = imageRef.current.files[0];
        let src = null;
        if (file) {
          src = URL.createObjectURL(file);
        }
        setImageSrc(src);
        return () => {
          URL.revokeObjectURL(src);
        };
      }, [profile]);

      
      const handleAdd = ()=>{
            const payload = {
                name:name,
                mobile:mobile,
                image:imageSrc,
                job:job,
                location:location,
                email:email,
                DOB:dob,

            };
            const addTodoAction = addTodo(payload);
            dispatch(addTodoAction);
      }


      const handleShow = () =>{
          dispatch(getTodo)
      }

      useEffect(() => {
          handleShow();
      },[])



    return(
        <div style={{width:"70%",border: "1px solid black", display: "flex",margin:"auto",padding: "20px",marginTop: "20px",justifyContent: "space-between"}}>
            <div>
                <div>
                <lable>Full name :</lable> <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

                </div>
                <div>
                <lable>Mobile :</lable> 
                <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} />

                </div>
                <div>
                <lable>Job Tyope :</lable> 
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={job}
                    label="Age"
                    onChange={handleChange}
                                >
                    <MenuItem value={"full Time"}>FT</MenuItem>
                    <MenuItem value={"Part Time"}>PT</MenuItem>
                    <MenuItem value={"Consultant"}>Consultant</MenuItem>
                    </Select>
                </div>
                <div>
                <lable>Pref Location :</lable> <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} />

                </div>
            </div>
            <div>
            <label>Profile Picture</label>
        <input
          multiple
          onChange={handleImageChange}
          ref={imageRef}
          type="file"
        />
        {imageSrc && <img style={{height:"100px"}} src={imageSrc} alt="profile" />}
        <div>
          Email id : <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          DOB : <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)} />
        </div>
           
            <button
            onClick={handleAdd}
            >+Add/Update</button>
            </div>
        </div>
    )
}