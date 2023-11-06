// src/components/costumer/CreateCostumer.tsx
import React from 'react';
import {
  InputGroup, InputLeftElement, Input, InputRightElement, Stack, Box, Center, Select
} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { AiOutlineZhihu, AiFillGithub } from "react-icons/ai";
import { Button, ButtonGroup } from '@chakra-ui/react';

const CreateCostumer = () => {
  return (
    <Center color='white'>

      <Stack direction={['column', 'row']} spacing='24px'>
        <Box w='800px' h='800px' my={'50px'}>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <AiOutlineZhihu color='gray.300' />
              </InputLeftElement>
              <Input type='tel' placeholder='Nome' />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <AiOutlineZhihu color='gray.300' />
              </InputLeftElement>
              <Input type='tel' placeholder='E-mail' />
            </InputGroup>
              
            <Button colorScheme='blue' my={'20px'}>Create</Button>
            <Button colorScheme='red' my={'20px'} mx={'10px'}>Delete</Button>
          </FormControl>

        </Box>
      </Stack>
    </Center>
  );
}

export default CreateCostumer;
