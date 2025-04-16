let confirmationResult;

function sendOTP() {
  const phoneNumber = document.getElementById("phoneNumber").value;
  const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    size: 'normal'
  });

  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((result) => {
      confirmationResult = result;
      document.getElementById("statusMsg").innerText = "OTP sent successfully!";
    })
    .catch((error) => {
      document.getElementById("statusMsg").innerText = "Error: " + error.message;
    });
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;
  confirmationResult.confirm(otp)
    .then((result) => {
      const user = result.user;
      document.getElementById("statusMsg").innerText = "Login successful!";
      // You can redirect if needed
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("statusMsg").innerText = "Invalid OTP!";
    });
}
