import React from 'react';
import { Tr, Td, Image, Skeleton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import StatusMenu from './StatusMenu';
import ActionMenu from './ActionMenu';

const UserCard = ({ data, getData, loading }) => {
  console.log(data);
  return (
    <>
      <Tr style={{ border: "2px solid teal" }}>
        <Td>{data._id}</Td>
        <Td>{data.firstName}{" "}{data.lastName}</Td>
        <Td>{data.email}</Td>
        <Td>{data.gender == "male" ? "M" : "F"}</Td>
        <Td>{<StatusMenu status={data.status} id={data._id} getData={getData} />}</Td>
        <Td><Image src={data.profile} width={"50px"} height={"50px"} borderRadius={"25px"}></Image></Td>
        <Td>{<ActionMenu id={data._id} getData={getData} data={data} />}</Td>
      </Tr>
    </>
  )
}

export default UserCard