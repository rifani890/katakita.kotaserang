function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  
  showLoader('Verifikasi Akun...');

  auth.signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      showLoader('Mengalihkan ke Dashboard...');
      
      // GANTI URL DI BAWAH INI DENGAN URL WEB APP GOOGLE SCRIPT ANDA
      const webAppUrl = "https://script.google.com/macros/s/XXXXX/exec"; 
      
      // Mengarahkan ke Web App dengan parameter admin
      window.location.href = webAppUrl + "?page=admin";
    })
    .catch((error) => {
      hideLoader();
      const errEl = document.getElementById('loginError');
      errEl.innerText = error.message;
      errEl.classList.remove('hidden');
    });
}
