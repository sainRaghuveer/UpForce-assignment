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
  Skeleton,
} from "@chakra-ui/react";
import "../styles/Home.css";
import { AiOutlinePlus } from "react-icons/ai"
import UserCard from '../components/UserCard';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom';
import UseToast from '../customHook/UseToast';
import { Spinner } from '@chakra-ui/react'

const Home = () => {
  const [data, setData] = useState([]);
  console.log('data', data)
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPage, setTotalPage] = useState()
  const navigate = useNavigate();
  const toastMsg = UseToast();


  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://agile-pear-cape-buffalo.cyclic.app/api/user/page/${page}?q=${query}`);
      const res = await response.json();
      if (response.ok) {
        console.log(res)
        setData(res.data);
        setTotalPage(res.Pages);
        setLoading(false);
      } else {
        console.log('Failed to fetch users');
      }
    } catch (error) {
      setLoading(false);
      console.log('Error:', error);
      toastMsg({
        title: `${error.message}`,
        status: "error"
      });
    }
  }, [page, query]);
  
  useEffect(() => {
    getData();
  }, [getData]);
  

  const handleQuery = () => {
    getData();
  }

  const downloadCSV = useCallback(async () => {
    console.log('CSV downloaded')
    // Making a request to the backend to initiate the download
    fetch(`https://agile-pear-cape-buffalo.cyclic.app/api/export-csv`)
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

  // useEffect(() => {
  //   getData();
  // }, [page]);

  return (
    <div className='parentContainer'>
      <div className='searchContainer'>
        <div>
          <Input type="search" placeholder='Search here...' value={query} onChange={(e) => setQuery(e.target.value)}></Input>
          <Button onClick={handleQuery}>Search</Button>
        </div>
        <div>
          <Button onClick={() => navigate("/register")}><AiOutlinePlus /> Add User</Button>
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
              {data.length>0 && data.map((user) => (
                <UserCard key={user._id} data={user} getData={getData} loading={loading} />
              ))}

            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Button onClick={() => setPage(prev => prev - 1)} isDisabled={page <= 1}>{<ArrowLeftIcon />}</Button>
        <Button>{loading?<Spinner/>:page}</Button>
        <Button onClick={() => setPage(prev => prev + 1)} isDisabled={page==totalPage}>{<ArrowRightIcon />}</Button>
      </div>
    </div>
  )
}

export default Home