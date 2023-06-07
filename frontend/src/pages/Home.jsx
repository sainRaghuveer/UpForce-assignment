import React, { useEffect, useState } from 'react';
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

const Home = () => {
  const [data, setData] = useState([]);
  console.log('data', data)
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");


  const getData = async () => {
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
          <Button><AiOutlinePlus /> Add User</Button>
          <Button>Export to Csv</Button>
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
              {<UserCard data={data}/>}
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