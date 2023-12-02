import React from "react"
import { Link } from "react-router-dom"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
const SideBar = ({therapist}) => {  
  const { isOpen, onOpen, onClose } = useDisclosure()
  //console.log('data', therapist)
  const btnRef = React.useRef()
  const handleLogout = () => {
    // Clear tokens from local storage
    localStorage.removeItem('adminAccessToken');
    localStorage.removeItem('adminRefreshToken');    
    // Navigate to the signin page
    navigate('/AdminSignIn');
  };
  return (
    <>
      <HamburgerIcon w={9} h={9} onClick={onOpen} fontSize="17" />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mind Care</DrawerHeader>
          <DrawerBody>
            <Stack
              style={{
                flexDirection: "column",
                justifyContent: "space-between"
              }}>               
              <Link
                style={{ marginBottom: "7%" }}
                to="/Admin"             
              >
                Reported Accounts
              </Link>
              <Link style={{ marginBottom: "7%" }} to="/AdminPosts" >
                Reported Posts
              </Link>
              
              <Link style={{ marginBottom: "7%" }} to="/AdminComments">
               Reported Comments
              </Link>
              {/* <Link
                style={{ marginBottom: "7%" }}
                to="/Appeals"              
              >
                Appeals
              </Link> */}
              {/* <Link
                style={{ marginBottom: "7%" }}
                to="/VC"
                // onClick={handleLogout}
              >
                Messages
              </Link>   */}
              <Link
                style={{ marginBottom: "7%" }}
                to="/AdminSignIn"
                onClick={handleLogout}
              >
                Logout
              </Link>   
               </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default SideBar
