import React from 'react';
import "../styles/HomeStyles.scss";
import { Box, Container, Grid, GridItem, Heading, Image} from '@chakra-ui/react';
import logo from '../images/asa.jpg';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <>
      <div className='main-container'>
        
 


        <Container>
        <Box boxSize='sm' className='main-image'>
          <Image src={logo} alt='mainimage' />
        </Box>
        </Container>
        <h3 className='letter-m'>M</h3>
        <h3 className='letter-g'>G</h3>

        <Grid className='grid-container'
        h='100px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={3}
        >
          <GridItem >
            <Container>
               <Link to="/contact">Contact me</Link>
            </Container>
          </GridItem>
          <GridItem >
            <Link to="/works">All Works</Link>
          </GridItem>
          <GridItem >
            <Link to="/about">About me</Link>
          </GridItem>
          <GridItem />
          <GridItem >
            <Link to="/collection">Collections</Link>
          </GridItem>
          <GridItem />
        
        </Grid>

      </div>

    </>
  )
}
