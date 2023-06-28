import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrLogin } from "react-icons/gr";
import { RiAdminLine } from "react-icons/ri";
import Link from "next/link";
import { BiHome, BiFootball } from "react-icons/bi";
import { useSession } from "next-auth/react";

export const HamburgerMenu = () => {
  const { data: session } = useSession();

  return (
    <Menu>
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
        {session ? (
          ""
        ) : (
          <MenuItem icon={<GrLogin />} as={Link} href="/auth/signin">
            Login
          </MenuItem>
        )}
        <MenuItem icon={<RiAdminLine />} as={Link} href="/admin">
          Admin
        </MenuItem>
      </StyledMenuList>
    </Menu>
  );
};

const StyledMenuList = styled(MenuList)`
  color: black;
`;
