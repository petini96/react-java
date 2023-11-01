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
              <Input type='tel' placeholder='Phone number' />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children='$'
              />
              <Input placeholder='Enter amount' />
              <InputRightElement>
                <AiFillGithub color='green.500' />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Select placeholder='large size'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
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
