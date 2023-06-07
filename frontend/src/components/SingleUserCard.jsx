import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Box
  } from '@chakra-ui/react';
  
  export default function SingleUSerCard({data}) {
    // console.log(data)
    return (
        <>
      <Box py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '100%', xl:"80%", "2xl":"80%" }}
          margin={"auto"}
          height={{ sm: '750px',lg:"750px", md: '25rem', xl:"30rem" }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                data.profile
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Full Name:- {data.firstName}{" "}{data.lastName}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="xl" mb={4}>
            Phone Number:- {data.email}
            </Text>
            <Text fontWeight={600} color={'gray.500'} size="xl" mb={4}>
            Email:- {data.mobile}
            </Text>
            <Text fontWeight={600} color={'gray.500'} size="xl" mb={4}>
            Gender:- {data.gender}
            </Text>
            <Text fontWeight={600} color={'gray.500'} size="xl" mb={4}>
            Status:- {data.status}
            </Text>
            <Text fontWeight={600} color={'gray.500'} size="xl" mb={4}>
            Location:- {data.location}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
            </Text>
          </Stack>
        </Stack>
      </Box>
      <div>
            <Text>Created At:- {data.createdAt}</Text>
            <Text>Last Updated At:- {data.updatedAt}</Text>
        </div>
      </>
    );
  }