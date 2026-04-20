function togglePw() {
  const pw = document.getElementById("pw");
  const icon = document.getElementById("eye-icon");
  if (pw.type === "password") {
    pw.type = "text";
    icon.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>`;
  } else {
    pw.type = "password";
    icon.innerHTML = `
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8
               a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1
               12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19
               m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>`;
  }
}

function toggleCheck() {
  const chk = document.getElementById("chk");
  const isChecked = chk.dataset.checked !== "false";
  chk.dataset.checked = isChecked ? "false" : "true";
  chk.style.background = isChecked ? "#ddd" : "#6c5ce7";
}
