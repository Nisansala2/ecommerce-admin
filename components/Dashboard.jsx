import React, { useEffect, useState } from 'react';
import { Box, H2, Text } from '@adminjs/design-system';
import { ApiClient } from 'adminjs';

const Dashboard = () => {
  const [stats, setStats] = useState({
    role : null,
    name: '',
    email: '',
    recentOrders: [],
    message: '',
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });
  

  useEffect(() => {
    const fetchData = async () => {
      const api = new ApiClient();
      const res = await api.getDashboard();
      setStats(res.data);
    };
    fetchData();
  }, []);

  const cardStyle = {
    padding: '20px',
    borderRadius: '12px',
    background: 'white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    textAlign: 'center',
  };



 if (stats.role === "user") {
  return (
    <Box p="xl">

      <H2>👤 User Dashboard</H2>

      {/* Profile Section */}
      <Box
        mt="lg"
        p="lg"
        variant="grey"
        style={{
          borderRadius: "12px",
          background: "#f8f9fa",
          border: "1px solid #e5e7eb"
        }}
      >
        <Text fontWeight="bold" fontSize="lg">Your Profile</Text>
        <Text mt="sm">Name: {stats.name || "N/A"}</Text>
        <Text>Email: {stats.email}</Text>
      </Box>

      {/* Orders Section */}
      <Box
        mt="xl"
        p="lg"
        variant="grey"
        style={{
          borderRadius: "12px",
          background: "#f8f9fa",
          border: "1px solid #e5e7eb"
        }}
      >
        <Text fontWeight="bold" fontSize="lg">Your Recent Orders</Text>

        {stats.recentOrders?.length > 0 ? (
          stats.recentOrders.map((order) => (
            <Box
              key={order.id}
              mt="md"
              p="md"
              style={{
                borderRadius: "8px",
                background: "white",
                border: "1px solid #ddd"
              }}
            >
              <Text>Order ID: {order.id}</Text>
              <Text>Total: ${order.total}</Text>
              <Text>Status: {order.status}</Text>
            </Box>
          ))
        ) : (
          <Text mt="sm">No recent orders found.</Text>
        )}
      </Box>

      {/* Activity Section */}
      <Box
        mt="xl"
        p="lg"
        variant="grey"
        style={{
          borderRadius: "12px",
          background: "#f8f9fa",
          border: "1px solid #e5e7eb"
        }}
      >
        <Text fontWeight="bold" fontSize="lg">📅 Recent Activity</Text>
        <Text mt="sm">• Logged in recently</Text>
        <Text>• Browsed product categories</Text>
        <Text>• No notifications</Text>
      </Box>

    </Box>
  );
}


  if (stats.role === 'admin') {

  return (
    <Box p="xl">
      <H2>📊 Admin Dashboard</H2>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gridGap="20px"
        mt="xl"
      >
        <Box style={{ ...cardStyle, background: "#EDF2FF" }}>
          <H2>👤 Users</H2>
          <Text fontSize="32px" fontWeight="bold">{stats.totalUsers}</Text>
        </Box>

        <Box style={{ ...cardStyle, background: "#FFF4E6" }}>
          <H2>📦 Products</H2>
          <Text fontSize="32px" fontWeight="bold">{stats.totalProducts}</Text>
        </Box>

        <Box style={{ ...cardStyle, background: "#E6FCF5" }}>
          <H2>🛒 Orders</H2>
          <Text fontSize="32px" fontWeight="bold">{stats.totalOrders}</Text>
        </Box>

        <Box style={{ ...cardStyle, background: "#FFF0F6" }}>
          <H2>💰 Revenue</H2>
          <Text fontSize="32px" fontWeight="bold">
            ${Number(stats.totalRevenue).toLocaleString()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
};

export default Dashboard;