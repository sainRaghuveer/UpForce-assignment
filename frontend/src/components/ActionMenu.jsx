import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
} from '@chakra-ui/react';
import { ChevronDownIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs"
import axios from 'axios';

const ActionMenu = ({ id, getData }) => {

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/api/user/${id}`)
            .then((res) => {
                console.log(res);
                getData();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <Menu>
                <MenuButton as={Button}>
                    {<BsThreeDotsVertical />}
                </MenuButton>
                <MenuList>
                    <MenuItem>{<BsFillEyeFill />} {" "}View</MenuItem>
                    <MenuItem >{<EditIcon />} {" "}Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>{<DeleteIcon />} {" "}Delete</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default ActionMenu