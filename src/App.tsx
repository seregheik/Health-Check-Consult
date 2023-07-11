import "./App.css";
import { Box } from "@mui/material";
import Top from "./components/Header/Top";
import Navigation from "./components/Header/Navigation";
import Body from "./components/HomePage/Body";

function App() {
  return (
    <>
      <Box width={"100%"} sx={{ position: "fixed", backgroundColor:'#fff', zIndex:'999', top:0 }}>
        <Top />
        <Navigation />
      </Box>
      <Box mt={25}>
      <Body /></Box>
    </>
  );
}

export default App;
