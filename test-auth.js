// test-auth.js
// Simple script to test authentication endpoints

import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

async function testAuth() {
  console.log('🧪 Testing Authentication System\n');

  try {
    // Test 1: Register a new admin user
    console.log('📝 Test 1: Register Admin User');
    const registerResponse = await axios.post(`${BASE_URL}/register`, {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('✅ Admin registered:', registerResponse.data.user);
    console.log('🎫 Token received:', registerResponse.data.token.substring(0, 20) + '...\n');

    // Test 2: Register a regular user
    console.log('📝 Test 2: Register Regular User');
    const userResponse = await axios.post(`${BASE_URL}/register`, {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'user123',
      role: 'user'
    });
    console.log('✅ User registered:', userResponse.data.user);
    console.log('🎫 Token received:', userResponse.data.token.substring(0, 20) + '...\n');

    // Test 3: Login with admin credentials
    console.log('🔐 Test 3: Login as Admin');
    const loginResponse = await axios.post(`${BASE_URL}/login`, {
      email: 'admin@example.com',
      password: 'admin123'
    });
    console.log('✅ Login successful:', loginResponse.data);
    const adminToken = loginResponse.data.token;
    console.log('🎫 Token:', adminToken.substring(0, 20) + '...\n');

    // Test 4: Access protected route with token
    console.log('🔒 Test 4: Access Protected Route');
    const meResponse = await axios.get(`${BASE_URL}/me`, {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      }
    });
    console.log('✅ User info retrieved:', meResponse.data.user);
    console.log();

    // Test 5: Try to access without token (should fail)
    console.log('❌ Test 5: Access Without Token (should fail)');
    try {
      await axios.get(`${BASE_URL}/me`);
      console.log('⚠️ Unexpected: Request succeeded without token');
    } catch (error) {
      console.log('✅ Correctly blocked:', error.response?.data?.error || error.message);
    }
    console.log();

    // Test 6: Try with invalid credentials (should fail)
    console.log('❌ Test 6: Login with Wrong Password (should fail)');
    try {
      await axios.post(`${BASE_URL}/login`, {
        email: 'admin@example.com',
        password: 'wrongpassword'
      });
      console.log('⚠️ Unexpected: Login succeeded with wrong password');
    } catch (error) {
      console.log('✅ Correctly blocked:', error.response?.data?.error || error.message);
    }
    console.log();

    console.log('✨ All authentication tests completed!');

  } catch (error) {
    if (error.response) {
      console.error('❌ Error:', error.response.data);
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

// Run the tests
testAuth();