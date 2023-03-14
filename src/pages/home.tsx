import React from 'react'
import { useList } from '@pankod/refine-core'
import { PieChart, PropertyCard, PropertyReferrals, TopAgent, TotalRevenue } from 'components'
import { Box, Stack, Typography } from '@pankod/refine-mui'

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        DashBoard
      </Typography>
      <Box mt="20px" display="flex" flexWrap={"wrap"} gap={4}>
        <PieChart title="Properties for sale" value={684} series={[75, 25]} colors={['#475be8', '#e4e8ef']} />
        <PieChart title="Properties for rent" value={550} series={[60, 40]} colors={['#475be8', '#e4e8ef']} />
        <PieChart title="Total Customers" value={5684} series={[75, 25]} colors={['#475be8', '#e4e8ef']} />
        <PieChart title="Properties for cities" value={555} series={[75, 25]} colors={['#475be8', '#e4e8ef']} />
      </Box>

      <Stack mt="25px" width="100%" gap={4}
        direction={{  xs: 'column', lg:'row' }}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default home
