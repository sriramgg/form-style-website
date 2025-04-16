window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  size: 'invisible',
  callback: function(response) {
    console.log("reCAPTCHA solved");
  }
});

function sendOTP() {
  const phoneNumber = document.getElementById("phone").value;
  const appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function(confirmationResult) {
      window.confirmationResult = confirmationResult;
      alert("OTP Sent");
    })
    .catch(function(error) {
      alert(error.message);
    });
}

function verifyOTP() {
  const code = document.getElementById("otp").value;
  confirmationResult.confirm(code).then(function(result) {
    const user = result.user;
    alert("Login successful!");
  }).catch(function(error) {
    alert("Incorrect OTP");
  });
}