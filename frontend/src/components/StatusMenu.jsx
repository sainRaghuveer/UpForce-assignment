import React, { useState, useEffect } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons"
import axios from 'axios';

const StatusMenu = ({ status, id, getData }) => {
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    if (newStatus !== "") {
      const obj = { status: newStatus };

      axios.patch(`http://localhost:8080/api/user/${id}`, obj)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

      getData();
    }
    getData();
  }, [newStatus, id, status]);

  const handleActive = (status) => {
    setNewStatus(status);
  }

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {status}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleActive("active")}>Active</MenuItem>
          <MenuItem onClick={() => handleActive("inactive")}>Inactive</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default StatusMenu;
