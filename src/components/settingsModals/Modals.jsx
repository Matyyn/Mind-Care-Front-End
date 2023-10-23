import { useState } from "react";
import {
  Button,
  Modal,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react";
import ChangePassword from './ChangePassword'
import ContactSupport from './ContactSupport'
import ViewDocs from './ViewDocs'
function Modals() {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isVerifyAccountOpen, setIsVerifyAccountOpen] = useState(false);
  const [isContactSupportOpen, setIsContactSupportOpen] = useState(false);
  const [isViewDocumentsOpen, setIsViewDocumentsOpen] = useState(false);

  const handleChangePasswordOpen = () => setIsChangePasswordOpen(true);
  const handleChangePasswordClose = () => setIsChangePasswordOpen(false);
  const handleVerifyAccountOpen = () => setIsVerifyAccountOpen(true);
  const handleVerifyAccountClose = () => setIsVerifyAccountOpen(false);
  const handleContactSupportOpen = () => setIsContactSupportOpen(true);
  const handleContactSupportClose = () => setIsContactSupportOpen(false);
  const handleViewDocumentsOpen = () => setIsViewDocumentsOpen(true);
  const handleViewDocumentsClose = () => setIsViewDocumentsOpen(false);

  return (
    <>
      <Button type="button"  onClick={handleChangePasswordOpen} style={{marginTop:'1%',marginLeft:'2%',width:'20%'}}>
        Change Password
      </Button>
      <Modal isOpen={isChangePasswordOpen} onClose={handleChangePasswordClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader display="flex" justifyContent="space-between" alignItems="center">
          Change Password
        <Image
              src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fclose.png?alt=media&token=bb65a3bc-27e6-45f1-9e26-27ce3a53dd84" 
              alt="Close"
              boxSize="25px"
              style={{ cursor: 'pointer' }}
              onClick={handleChangePasswordClose}
          />
        </ModalHeader>
          <ModalBody>
            <ChangePassword/>
          </ModalBody>          
        </ModalContent>
      </Modal>

      <Button type="button" onClick={handleVerifyAccountOpen} style={{marginTop:'1%',marginLeft:'2%',width:'20%'}}>
        Verify Account
      </Button>
      <Modal isOpen={isVerifyAccountOpen} onClose={handleVerifyAccountClose}>
        <ModalOverlay />
        <ModalHeader display="flex" justifyContent="space-between" alignItems="center">
        <Image
              src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fclose.png?alt=media&token=bb65a3bc-27e6-45f1-9e26-27ce3a53dd84" 
              alt="Close"
              boxSize="25px"
              style={{ cursor: 'pointer' }}
              onClick={handleContactSupportClose}
          />
        </ModalHeader>
        <ModalContent>
          <ModalHeader>Verify Account</ModalHeader>
          <ModalBody>
            <p>Modal content for verify account goes here...</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleVerifyAccountClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button type="button" onClick={handleContactSupportOpen} style={{marginTop:'1%',marginLeft:'2%',width:'20%'}}>
        Contact Support
      </Button>
      <Modal isOpen={isContactSupportOpen} onClose={handleContactSupportClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader display="flex" justifyContent="space-between" alignItems="center">
          Contact Support
          <Image
              src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fclose.png?alt=media&token=bb65a3bc-27e6-45f1-9e26-27ce3a53dd84" 
              alt="Close"
              boxSize="25px"
              style={{ cursor: 'pointer' }}
              onClick={handleContactSupportClose}
          />
        </ModalHeader>
          <ModalBody>
            <ContactSupport/>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* <Button type="button" onClick={handleViewDocumentsOpen} style={{marginTop:'1%',marginLeft:'2%',width:'20%'}}>
        View Documents
      </Button>
      <Modal isOpen={isViewDocumentsOpen} onClose={handleViewDocumentsClose}>
        <ModalOverlay />
        <ModalContent maxW="800px">
          <ModalHeader>View Documents</ModalHeader>
          <ModalBody>
            <ViewDocs/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleViewDocumentsClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
}
export default Modals