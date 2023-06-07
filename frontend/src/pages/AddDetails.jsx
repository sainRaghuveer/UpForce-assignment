import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import axios from "axios";
import "../styles/AddDetails.css"
import UseToast from '../customHook/UseToast';

const AddDetails = () => {
  const [url, setUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const imageRef = useRef();
  const toastMsg = UseToast();

  const handleUserFormWithCloudinary = async () => {
    const img = imageRef.current.files[0];
    console.log("img", img)
    const data = new FormData();
    data.append("file", img)
    data.append("upload_preset", "upforce")
    data.append("cloud_name", "dr9ygmyh3");
    axios.post("https://api.cloudinary.com/v1_1/dr9ygmyh3/image/upload", data)
      .then(res => {
        // console.log(res);
        setUrl(res.data.secure_url)
      })
      .catch(err => console.log(err));


    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      gender: gender,
      status: status,
      location: location,
      profile: url,
    };

    setLoading(true);
    setTimeout(() => {
      axios.post(`https://upforce-backend.onrender.com/api/user`, obj).then((res) => {
        console.log(res);
        setLoading(false);
        toastMsg({
          title: "Data updated successfully",
          status: "success"
        });
      }).catch((error) => {
        setLoading(false);
        toastMsg({
          title: `${error.response.data.msg}`,
          status: "error"
        })
        console.log(error)
      })
    }, 2000)

  }


  return (
    <div>
      <div className='inputContainer'>
        <Box
          w={{ base: "100%", md: "48%" }}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          p={8}
          id='child1'
        >
          <Stack spacing={4}>
            <FormControl id="First Name">
              <FormLabel>First Name</FormLabel>
              <Input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Select your Gender</FormLabel>
              <Select placeholder='Select your gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Image</FormLabel>
              <Input type='file' placeholder='Choose profile..' ref={imageRef} />
            </FormControl>
          </Stack>
        </Box>
        <Box
          w={{ base: "100%", md: "48%" }}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          p={8}
          className='child2'>
          <Stack spacing={4}>
            <FormControl id="First Name">
              <FormLabel>Last Name</FormLabel>
              <Input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </FormControl>
            <FormControl id="mobile">
              <FormLabel>Mobile</FormLabel>
              <Input type="text" placeholder='Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </FormControl>
            <FormControl id="status">
              <FormLabel>Select your Status</FormLabel>
              <Select placeholder='Status...' value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="active">Active</option>
                <option value="inactive">InActive</option>
              </Select>
            </FormControl>
            <FormControl id="location">
              <FormLabel>Enter your Location</FormLabel>
              <Input type='text' placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} />
            </FormControl>
          </Stack>
        </Box>

      </div>
      <div className='btn'>
        {loading ? <Button
          isLoading
          loadingText='Submitting'
          colorScheme='blue'
          variant='outline'
        >
          Submit
        </Button> : <Button onClick={handleUserFormWithCloudinary}>Submit</Button>}

      </div>
    </div>
  )
}

export default AddDetails