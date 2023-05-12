import { ChakraProvider, Button, Divider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProfile from "./components/EditProfile"
import LandingPage from "./components/LandingPage";
import SignUpform from "./components/Signup";
import Signin from "./components/Signin";
import AboutUs from "./components/landingPageComponents/AboutUs";
import Pricing from "./components/landingPageComponents/Pricing";
import FAQs from "./components/landingPageComponents/FAQs";
import ForgotPassword from "./components/ForgotPassword";
import ViewTherapistProfile from "./components/ViewTherapistPofile";
import Dashboard from "./components/Dashboard";
import Multi from "./components/Multiple";
import Test from "./components/Sidebar";
import Picture from "./components/Picture";
import Sidebar from './components/Sidebar'
import Profile from "./components/PhyscologicalProfile"

function App() {
  return (
    <ChakraProvider>
      <Router>      
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<SignUpform/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/faqs" element={<FAQs/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/settings" element={<EditProfile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/therapistprofile" element={<ViewTherapistProfile/>}/>
        </Routes>
      </Router>
      {/* <LandingPage/>    */}
      {/* <Multi/> */}
      {/* <Signin/> */}
      {/* <SignUpform/>   */}
      {/* <Formik/> */}
      {/* <ForgotPassword/>   */}
      {/* <Test/>       */}

    </ChakraProvider>
  );
}
export default App;
