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
  import {ChevronDownIcon} from "@chakra-ui/icons"

const StatusMenu = ({status}) => {
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {status}
                </MenuButton>
                <MenuList>
                    <MenuItem>Active</MenuItem>
                    <MenuItem>InActive</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default StatusMenu