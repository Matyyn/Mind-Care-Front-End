import { ChakraProvider, Button, Divider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProfile from "./components/EditProfile/EditProfile"
import LandingPage from "./components/LandingPage";
//import SessionsList from "./components/VideoCall/sessionsList";
import SignUpform from "./components/Signup";
import Signin from "./components/Signin";
import TimeCheck from './components/TimeCheckFile'
import ViewPosts from "./components/AdminFolder/ReportedPostsDashboard"
import AboutUs from "./components/landingPageComponents/AboutUs";
import Pricing from "./components/landingPageComponents/Pricing";
import FAQs from "./components/landingPageComponents/FAQs";
import ForgotPassword from "./components/ForgotPassword";
import ViewTherapistProfile from "./components/ViewTherapistPofile";
import Dashboard from "./components/Dashboard";
import Test from "./components/test";
//import Textextractor from "./components/textReader"
import Forum from "./components/Forum";
import PostQuestion from "./components/PostQuestion";
import PostTab from "./components/CommunityForum/TabComponent/PostTab";
import Tabs from "./components/CommunityForum/TabComponent/Tabs";
import ViewComments from './components/AdminFolder/ReportedCommentsDashboard'
import Appeals from './components/AdminFolder/AppealsDashboard'
import VideoCall from './components/Video Calls/Appointments'
import AdminSignin from './components/AdminFolder/AdminSignin'
import Admin from './components/AdminFolder/AdminDashboard'
//import Sessions from './components/VideoCall/sessionScreen'
import axios from 'axios'
import Profile from "./components/ClientFolder/PhyscologicalProfile"
// axios.defaults.baseURL = "http://localhost:8080/api/v1/therapist"
axios.defaults.baseURL = "https://mind-care-backend-7dd9b4794b38.herokuapp.com/api/v1/therapist";
import { store , persistor } from '../src/components/redux/store'
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux'
import ProtectedRoutes from "./utils/protectedRoutes";

function App() {
  return (
    <ChakraProvider >
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>      
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Test/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/settings" element={<EditProfile/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/therapistprofile" element={<ViewTherapistProfile/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/forum" element={<Forum />} />
            <Route path="/postquestion" element={<PostQuestion />} />
            <Route path="/postTab" element={<PostTab />} />
            <Route path="/tabs" element={<Tabs/>} />
          </Route>
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/faqs" element={<FAQs/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/AdminPosts" element={<ViewPosts/>}/>
          <Route path="/AdminComments" element={<ViewComments/>}/>
          <Route path="/Appeals" element={<Appeals/>}/>  
          <Route path="/VC" element={<VideoCall/>}/>
          <Route path="/AdminSignIn" element={<AdminSignin/>}/>          
        </Routes>
      </Router>
      {/* <LandingPage/>    */}
      {/* <Multi/> */}
      {/* <Signin/> */}
      {/* <SignUpform/>   */}
      {/* <Formik/> */}
      {/* <ForgotPassword/>   */}
      {/* <Test/>       */}
      </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
//persistor.persist()
export default App;
