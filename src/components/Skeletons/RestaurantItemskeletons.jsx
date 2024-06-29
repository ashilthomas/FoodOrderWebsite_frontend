import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'

function RestaurantItemskeletons() {
  return (
    <div className='' >
        <Stack>
       

       
    

       
    <SkeletonCircle size='100' />
  <div>


     <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2'width="50px" />
 
    <Skeleton height='30px' width="50px" />

    <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
    </div>
   
     <Skeleton height='30px' width="50px" />
  </Stack></div>
  )
}

export default RestaurantItemskeletons