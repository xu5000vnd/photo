const { REDIRECT_DOMAIN } = require('../../config/keys');

module.exports = (data) => {
  return `
  <html>
    <body>
      <div style="text-align:center;">
        <h3>${data.name} has send contact to you</h3>
        <p>Please check the information below:</p>
        <p>Name: ${data.name}</p>
        <p>Phone: ${data.phone}</p>
        <p>Email: ${data.email}</p>
        <p>Body: ${data.body}</p>
        <div>
          <a href="${REDIRECT_DOMAIN}">Visit home</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
