import React from 'react';
import {Tr, Td, Image} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {BsThreeDotsVertical} from "react-icons/bs";
import StatusMenu from './StatusMenu';
import ActionMenu from './ActionMenu';

const UserCard = ({data, getData}) => {
  console.log(data);
  return (
    <>
      {data.length > 0 && data.map((el, index) => (
        <Tr key={index} style={{ border: "2px solid teal" }}>
          <Td>{el._id}</Td>
          <Td>{el.firstName}{" "}{el.lastName}</Td>
          <Td>{el.email}</Td>
          <Td>{el.gender=="male" ? "M" : "F"}</Td>
          <Td>{<StatusMenu status={el.status} id={el._id} getData={getData}/>}</Td>
          <Td><Image src={el.profile} width={"50px"} height={"50px"} borderRadius={"25px"}></Image></Td>
          <Td>{<ActionMenu id={el._id} getData={getData}/>}</Td>
        </Tr>
      ))}
      </>
  )
}

export default UserCard