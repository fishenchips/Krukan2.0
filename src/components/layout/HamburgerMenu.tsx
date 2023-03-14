import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { BiHome, BiFootball } from "react-icons/bi";

export const HamburgerMenu = () => {
  return (
    <StyledMenu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RxHamburgerMenu />}
        variant="outline"
      />
      <StyledMenuList>
        <MenuItem icon={<BiHome />} as={Link} href="/">
          Home
        </MenuItem>
        <MenuItem icon={<BiFootball />} as={Link} href="/matches">
          Matches
        </MenuItem>
      </StyledMenuList>
    </StyledMenu>
  );
};

const StyledMenu = styled(Menu)`
  @media (max-width: 500px) {
    display: none;
  }
`;
const StyledMenuList = styled(MenuList)`
  color: black;
`;
