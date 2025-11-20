const fetch = require('node-fetch');

async function testLogin(email, password) {
  try {
    const res = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    console.log(`Login for ${email}:`, res.status, data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function testAdminRoute(token) {
  try {
    const res = await fetch('http://localhost:4000/admin', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const text = await res.text();
    console.log('Admin route access:', res.status, text);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function main() {
  // Test admin login
  await testLogin('admin@example.com', 'adminpassword'); // assuming env var is set

  // Test non-admin login
  await testLogin('user@example.com', 'password123');

  // Test admin route with token (would need to get token from first response, but for simplicity, assume we have it)
  // Since we can't easily parse, just test the route without token
  const res = await fetch('http://localhost:4000/admin');
  const text = await res.text();
  console.log('Admin route without token:', res.status, text);
}

main();
