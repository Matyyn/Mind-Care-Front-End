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
const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

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
              <Link style={{ marginBottom: "7%" }} to={'/dashboard'}>Appointments</Link>
              <Link style={{ marginBottom: "7%" }} to={'/profile'}>Profiles</Link>
              <Link style={{ marginBottom: "7%" }} to={''}>Requests</Link>
              <Link style={{ marginBottom: "7%" }} to={''}>Messages</Link>
              <Link style={{ marginBottom: "7%" }} to={''}>Forum</Link>
              <Link style={{ marginBottom: "7%" }} to={"/settings"}>
                Settings
              </Link>              
              <Link style={{ marginBottom: "7%" }} to='/signin'>Logout</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default SideBar
