import Link from "next/link";
import { Heading, Text, Center, VStack, Button } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Center h="60vh">
      <VStack gap={8}>
        <Heading>Didn&apos;t find what you were looking for?</Heading>
        <Link href="/">
          <Button variant={"secondary"}>Return Home</Button>
        </Link>
      </VStack>
    </Center>
  );
}
