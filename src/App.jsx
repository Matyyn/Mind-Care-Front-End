import { ChakraProvider, Button, Divider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProfile from "./components/EditProfile"
import LandingPage from "./components/LandingPage";
import SignUpform from "./components/Signup";
import Signin from "./components/Signin";
import ViewPosts from "./components/AdminFolder/ReportedPostsDashboard"
import AboutUs from "./components/landingPageComponents/AboutUs";
import Pricing from "./components/landingPageComponents/Pricing";
import FAQs from "./components/landingPageComponents/FAQs";
import ForgotPassword from "./components/ForgotPassword";
import ViewTherapistProfile from "./components/ViewTherapistPofile";
import Dashboard from "./components/Dashboard";
import Multi from "./components/Multiple";
import Test from "./components/test";
//import Textextractor from "./components/textReader"
import Picture from "./components/Picture";
import Sidebar from './components/Sidebar'
import ViewComments from './components/AdminFolder/ReportedCommentsDashboard'
import Appeals from './components/AdminFolder/AppealsDashboard'
import VideoCall from './components/VideoCall'
import Redux from './components/ReduxExample'
//import Messaging from './components/Messaging'
import Admin from './components/AdminFolder/AdminDashboard'
import Room from './components/Room'
import axios from 'axios'
import Profile from "./components/PhyscologicalProfile"
axios.defaults.baseURL = "http://localhost:8080/api/v1/therapist"
import { store } from '../src/components/redux/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <ChakraProvider >
      <Provider store={store}>
      <Router>      
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Test/>} />
          <Route path="/room/:roomId" element={<Room/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/faqs" element={<FAQs/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/settings" element={<EditProfile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/therapistprofile" element={<ViewTherapistProfile/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/AdminPosts" element={<ViewPosts/>}/>
          <Route path="/AdminComments" element={<ViewComments/>}/>
          <Route path="/Appeals" element={<Appeals/>}/>
        </Routes>
      </Router>
      {/* <LandingPage/>    */}
      {/* <Multi/> */}
      {/* <Signin/> */}
      {/* <SignUpform/>   */}
      {/* <Formik/> */}
      {/* <ForgotPassword/>   */}
      {/* <Test/>       */}
      </Provider>
    </ChakraProvider>
  );
}
export default App;
