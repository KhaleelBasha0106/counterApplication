import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./assets/actions";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

function App() {
  const value = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  
  const addHandler = (e) => {
    dispatch(increment());
  };
  
  const subHandler = (e) => {
    if (value >= 1) dispatch(decrement());
  };

  return (
    <>
      <Box
        sx={{
          margin: 1,
          display: 'flex',           
          flexDirection: 'column',    
          justifyContent: 'center',   
          alignItems: 'center',       
          height: '50vh'             
        }}
      >
        <Typography variant="h4">count : &nbsp; {value}</Typography>&nbsp;
        <Box sx={{ display: 'flex', gap: 5}}>
          <Button onClick={addHandler} color="primary" variant="contained">
            +
          </Button>
          <Button onClick={subHandler} color="error" variant="contained">
            -
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
