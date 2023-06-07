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
  import {ChevronDownIcon, EditIcon, DeleteIcon} from "@chakra-ui/icons";
  import {BsThreeDotsVertical} from "react-icons/bs";
  import {BsFillEyeFill} from "react-icons/bs"

const ActionMenu = () => {
    return (
        <>
            <Menu>
                <MenuButton as={Button}>
                {<BsThreeDotsVertical/>}
                </MenuButton>
                <MenuList>
                    <MenuItem>{<BsFillEyeFill/>} {" "}View</MenuItem>
                    <MenuItem>{<EditIcon/>} {" "}Edit</MenuItem>
                    <MenuItem>{<DeleteIcon/>} {" "}Delete</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default ActionMenu