import { Box, Button, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  // data is loading
  if (fetching) {
    body = null;
    // user is not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="gray" mr={4}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="gray">Register</Link>
        </NextLink>
      </>
    );

    // user is logged in
  } else {
    body = (
      <Flex>
        <Box mr={4}>{data.me.username}</Box>
        <Button variant="link">Logout</Button>
      </Flex>
    );
  }
  return (
    <nav>
      <Flex bg="tomato" p={4}>
        <Box ml="auto">{body}</Box>
      </Flex>
    </nav>
  );
};

export default NavBar;
