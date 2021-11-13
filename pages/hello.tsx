import React from 'react';
import type { NextPage } from 'next';
import { Button, FormControl, FormHelperText, FormLabel, Heading, HStack, Input, VStack } from '@chakra-ui/react';

const Home: NextPage = () => {
  const [name, setName] = React.useState('');
  const [userId, setUserId] = React.useState('');

  const fetchData = async () => {
    const res = await fetch(`/api/users/${userId}`);

    if (!res.ok) {
      return;
    }

    const data = await res.json();
    setName(data.name);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <VStack>
      <Heading>{name}</Heading>
      <Heading>After the name</Heading>
      <FormControl id="name">
        <FormLabel>User Id</FormLabel>
        <Input
          type="text"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
      </FormControl>
      <Button onClick={() => fetchData()}>Fetch User</Button>
    </VStack>
  );
};

export default Home;
