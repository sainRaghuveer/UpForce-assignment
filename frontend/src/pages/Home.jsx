import React, { useEffect, useState, useCallback } from 'react';
import {
  Button,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import "../styles/Home.css";
import { AiOutlinePlus} from "react-icons/ai"
import UserCard from '../components/UserCard';
import {ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  console.log('data', data)
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  const getData = async () => {
    console.log("afterUpdtae", "Raghuveer")
    try {
      const response = await fetch(`http://localhost:8080/api/user/page/${page}?q=${query}`);
      const res = await response.json();
      if (response.ok) {
        setData(res.data);
      } else {
        console.log('Failed to fetch users');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleQuery=()=>{
    getData();
  }

  const downloadCSV = useCallback(async () => {
    console.log('CSV downloaded')
    // Making a request to the backend to initiate the download
    fetch(`http://localhost:8080/api/export-csv`)
         .then((response) => response.blob())
         .then((blob) => {
              // Creating a URL for the blob object
              const url = window.URL.createObjectURL(blob);
              // Creating a temporary link element
              const link = document.createElement("a");
              // Setting the link's href to the generated URL
              link.href = url;
              // Setting the filename for the downloaded file
              link.download = "user.csv";
              // Appended the link to the document body
              document.body.appendChild(link);
              // Simulating a click on the link to trigger the download
              link.click();
              // Clean up by removing the link from the document body
              document.body.removeChild(link);
              // Revoking the URL to release memory resources
              window.URL.revokeObjectURL(url);
         })
         .catch((error) => {
              console.error("Error downloading the file", error);
              // Handling the error
         });
}, [])

  useEffect(() => {
    getData();
  }, [page]);
  
  return (
    <div className='parentContainer'>
      <div className='searchContainer'>
        <div>
          <Input type="search" placeholder='Search here...' value={query} onChange={(e)=>setQuery(e.target.value)}></Input>
          <Button onClick={handleQuery}>Search</Button>
        </div>
        <div>
          <Button onClick={()=>navigate("/register")}><AiOutlinePlus /> Add User</Button>
          <Button onClick={downloadCSV}>Export to Csv</Button>
        </div>
      </div>
      <div className='tableContainer'>
        <TableContainer>
          <Table variant='striped'>
            <TableCaption>All Users will be here</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>FullName</Th>
                <Th>Email</Th>
                <Th>Gender</Th>
                <Th>Status</Th>
                <Th>Profile</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {<UserCard data={data} getData={getData}/>}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Button onClick={()=>setPage(prev=>prev-1)} isDisabled={page<=1}>{<ArrowLeftIcon/>}</Button>
        <Button>{page}</Button>
        <Button onClick={()=>setPage(prev=>prev+1)}>{<ArrowRightIcon/>}</Button>
      </div>
    </div>
  )
}

export default Home