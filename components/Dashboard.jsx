// ./components/Dashboard.jsx
import React from 'react';
import { Box, H2, Text } from '@adminjs/design-system';

const Dashboard = (props) => {
  const { totalUsers, totalProducts, totalOrders, totalRevenue } = props;

  return (
    <Box p="xl">
      <H2>Admin Dashboard</H2>
      <Text>Total Users: {totalUsers}</Text>
      <Text>Total Products: {totalProducts}</Text>
      <Text>Total Orders: {totalOrders}</Text>
      <Text>Total Revenue: ${totalRevenue}</Text>
    </Box>
  );
};

export default Dashboard;