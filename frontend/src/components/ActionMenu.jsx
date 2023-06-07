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
import { useNavigate } from 'react-router-dom';
import UserUpdateModal from './UserUpdateModal';
import UseToast from '../customHook/UseToast';

const ActionMenu = ({ id, getData, data }) => {
    const navigate=useNavigate();
    const toastMsg = UseToast();

    const handleDelete = () => {
        axios.delete(`https://agile-pear-cape-buffalo.cyclic.app/api/user/${id}`)
            .then((res) => {
                toastMsg({
                    title: `user deleted successfully`,
                    status: "success"
                });
                // console.log(res);
                getData();
            })
            .catch((error) => {
                toastMsg({
                    title: `${error.message}`,
                    status: "error"
                });
                // console.log(error);
            });
    };

    const handleView=()=>{
        navigate(`/user/${id}`);
    }
    return (
        <>
            <Menu>
                <MenuButton as={Button}>
                    {<BsThreeDotsVertical />}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={handleView}>{<BsFillEyeFill />} {" "}View</MenuItem>
                    <MenuItem >{<UserUpdateModal id={id} getData={getData} data={data}/>}</MenuItem>
                    <MenuItem onClick={handleDelete}>{<DeleteIcon />} {" "}Delete</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default ActionMenu