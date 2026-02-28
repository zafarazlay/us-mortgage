// Mobile Nav
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navMenu").classList.toggle("active");
};

// Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Mortgage Calculator
function calculateMortgage() {
  const P = parseFloat(document.getElementById("loanAmount").value);
  const r = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const n = parseFloat(document.getElementById("loanTerm").value) * 12;
  const tax = parseFloat(document.getElementById("tax").value) || 0;
  const ins = parseFloat(document.getElementById("insurance").value) || 0;

  if (!P || !r || !n) return;

  const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const monthly = M + tax / 12 + ins / 12;
  const total = M * n;
  const interest = total - P;

  document.getElementById("monthly").innerText = "$" + monthly.toFixed(2);
  document.getElementById("total").innerText = "$" + total.toFixed(2);
  document.getElementById("interest").innerText = "$" + interest.toFixed(2);

  track("calculator_used");
}

// Form Validation
document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").innerText = "Thanks! We will contact you shortly.";
  track("form_submitted");
  this.reset();
});

// Analytics Tracking Placeholder
function track(event) {
  if (window.gtag) {
    gtag('event', event);
  }
}