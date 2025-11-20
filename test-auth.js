// test-auth.js
// Test your login + JWT middleware correctly

import axios from "axios";

const BASE_URL = "http://localhost:4000"; // change port if needed

async function testAuth() {
  console.log("🧪 Testing Auth.js\n");

  // ----------------------------------------
  // Test 1: LOGIN (VALID)
  // ----------------------------------------
  console.log("🔐 Test 1: Login with correct credentials");
  try {
    const loginRes = await axios.post(`${BASE_URL}/api/login`, {
      email: "admin@example.com",
      password: "admin123"
    });

    console.log("✅ Login successful");
    console.log("🎫 Token:", loginRes.data.token.substring(0, 20) + "...");

    const token = loginRes.data.token;

    // ----------------------------------------
    // Test 2: Access Protected Route
    // ----------------------------------------
    console.log("\n🔒 Test 2: Access protected route with token");

    const protectedRes = await axios.get(`${BASE_URL}/admin/test`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    console.log("✅ Protected route works");
    console.log("User:", protectedRes.data.user);

  } catch (err) {
    console.log("❌ Failed:", err.response?.data || err.message);
  }

  // ----------------------------------------
  // Test 3: LOGIN (INVALID PASSWORD)
  // ----------------------------------------
  console.log("\n❌ Test 3: Login with wrong password");
  try {
    await axios.post(`${BASE_URL}/api/login`, {
      email: "admin@example.com",
      password: "wrongpass"
    });

    console.log("⚠️ Unexpected success (this should fail)");
  } catch (err) {
    console.log("✅ Correctly blocked:", err.response?.data?.error);
  }

  // ----------------------------------------
  // Test 4: Access Protected Route WITHOUT Token
  // ----------------------------------------
  console.log("\n❌ Test 4: Access protected route without token");
  try {
    await axios.get(`${BASE_URL}/admin/test`);
    console.log("⚠️ Unexpected success (this should fail)");
  } catch (err) {
    console.log("✅ Correctly blocked:", err.response?.data?.error);
  }

  console.log("\n✨ Auth Testing Completed!");
}

// Run the tests
testAuth();
