

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chatpage from "../pages/chatpage";
import Homepage from "../pages/homepage";
import Loginpage from "../pages/loginpage";

  export default function RouteComponent( ){
    return (
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Loginpage />} />
          <Route path="/home" element={<Homepage />}>
            </Route>
            <Route  path="/chat-page/:roomId" element={<Chatpage />} />
           
        </Routes>
      </BrowserRouter>
    )
  }


