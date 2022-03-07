import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { delete_api } from '../Redux/funtionality/deletFunction';
import { useDispatch} from 'react-redux';
import { addTodo,getTodo } from "../Redux/add/action";
import {useEffect} from "react"
const StyleModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const style = {
    width: 200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    p: 2,
    px: 4,
    pb: 3
  };

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



function Tableer({name,id,onDelete,email,mobile,dob,job}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
            
    
    return (
            <>
           
              <TableBody>
              
                   <StyledTableRow key={id}>
                      <StyledTableCell component="th" scope="row" >
                      {name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{email}</StyledTableCell>
                      <StyledTableCell align="right">{mobile}</StyledTableCell>
                      <StyledTableCell align="right">{dob}</StyledTableCell>
                      <StyledTableCell align="right">{job}</StyledTableCell>
                      <StyledTableCell align="right">
                      <button>pic</button>
                        <button onClick={handleOpen}>Setiled</button>
                        <button onClick={onDelete} >Delete</button>
                          </StyledTableCell>
                    </StyledTableRow>
      
                 
                
              </TableBody>
           
          <StyleModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box sx={style}>
            Edit part
              
            </Box>
          </StyleModal>
            </>
          )
  }
  






export default function Tableeee (){
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.add.todos);
    
    const hanleget=()=>{
        dispatch(getTodo())
    }

    
    useEffect(() => {
        
        hanleget()
        
    },[])
    console.log(todos)
return(
    <>
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">mobile</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">Job Type</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        
          {todos?.map((row) => (
            <Tableer
            key={row.id}
           name={row.name}
            email={row.email}
            mobile={row.mobile}
            dob={row.DOB}
            job={row.job}
            onDelete={()=>dispatch(delete_api(row.id))}
           
            />
          ))}
       
      </Table>
    </TableContainer>
    </>
)


}