// // import React, { useState } from 'react';
// // import emailjs from '@emailjs/browser';
// // import {
// //   FormControl,
// //   FormLabel,
// //   Input,
// //   Textarea,
// //   Button,
// //   FormErrorMessage,
// // } from '@chakra-ui/react';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';

// // function EmailForm() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = async () => {    
// //     const emailData = {
// //       name,
// //       email,
// //       message,
// //     };
// //     await emailjs.sendForm(
// //       'service_gzfc5if',
// //       'template_d28nrpo',
// //       emailData,
// //       '3g8OVVIdmLqPWwbAG',
// //     );

// //     setName('');
// //     setEmail('');
// //     setMessage('');

// //     console.log('email sent')
// //   };

// //   const validationSchema = Yup.object().shape({
// //     name: Yup.string().required('Name is required'),
// //     email: Yup.string()
// //       .email('Invalid email address')
// //       .required('Email is required'),
// //     message: Yup.string().required('Message is required'),
// //   });

// //   const formik = useFormik({
// //     initialValues: {
// //       name: '',
// //       email: '',
// //       message: '',
// //     },
// //     validationSchema: validationSchema,
// //     onSubmit: handleSubmit,
// //   });

// //   return (
// //     <form onSubmit={formik.handleSubmit}>
// //       <FormControl isInvalid={formik.errors.name && formik.touched.name}>
// //         <FormLabel>Name:</FormLabel>
// //         <Input
// //           type="text"
// //           id="name"
// //           name="name"
// //           value={formik.values.name}
// //           onChange={formik.handleChange}
// //           onBlur={formik.handleBlur}
// //         />
// //         <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
// //       </FormControl>

// //       <FormControl isInvalid={formik.errors.email && formik.touched.email}>
// //         <FormLabel>Email:</FormLabel>
// //         <Input
// //           type="email"
// //           id="email"
// //           name="email"
// //           value={formik.values.email}
// //           onChange={formik.handleChange}
// //           onBlur={formik.handleBlur}
// //         />
// //         <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
// //       </FormControl>

// //       <FormControl isInvalid={formik.errors.message && formik.touched.message}>
// //         <FormLabel>Message:</FormLabel>
// //         <Textarea
// //           id="message"
// //           name="message"
// //           value={formik.values.message}
// //           onChange={formik.handleChange}
// //           onBlur={formik.handleBlur}
// //         />
// //         <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
// //       </FormControl>

// //       <Button mt={4} type="submit" disabled={!formik.isValid}>
// //         Send Email
// //       </Button>
// //     </form>
// //   );
// // }

// // export default EmailForm;
// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   FormErrorMessage,
// } from '@chakra-ui/react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// function EmailForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async () => {
//     await emailjs.sendForm(
//       'service_gzfc5if',
//       'template_d28nrpo',
//       formik.values,
//       '3g8OVVIdmLqPWwbAG',
//     );

//     setName('');
//     setEmail('');
//     setMessage('');

//     console.log('email sent');
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     message: Yup.string().required('Message is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       message: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: handleSubmit,
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <FormControl isInvalid={formik.errors.name && formik.touched.name}>
//         <FormLabel>Name:</FormLabel>
//         <Input
//           type="text"
//           id="name"
//           name="name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
//       </FormControl>

//       <FormControl isInvalid={formik.errors.email && formik.touched.email}>
//         <FormLabel>Email:</FormLabel>
//         <Input
//           type="email"
//           id="email"
//           name="email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//       </FormControl>

//       <FormControl isInvalid={formik.errors.message && formik.touched.message}>
//         <FormLabel>Message:</FormLabel>
//         <Textarea
//           id="message"
//           name="message"
//           value={formik.values.message}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
//       </FormControl>

//       <Button mt={4} type="submit" disabled={!formik.isValid}>
//         Send Email
//       </Button>
//     </form>
//   );
// }

// export default EmailForm;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function App() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_gzfc5if',
        'template_d28nrpo',
        form.current,
        '3g8OVVIdmLqPWwbAG'
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>      
      <form className='cf' ref={form} onSubmit={sendEmail}>
      <div className='center cf' >
          <input type='text' placeholder='Name' name='user_name' style={{borderColor:'1px',marginRight:'5px'}}/>           
        </div>
        <div className='left cf' >
          <input type='email' placeholder='Email address' name='user_email' />
        </div>
        <div className='right cf'>
          <textarea name='message' type='text' placeholder='Message'></textarea>
        </div>
        <input type='submit' value='Submit' id='input-submit' />
      </form>
    </div>
  );
}
export default App;