// Generate 17 digit random number
function generateId() {
  return Math.floor(10000000000000000 + Math.random() * 90000000000000000).toString();
}

// Save Data
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sonodForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const serial = document.getElementById("serial").value;
      const name = document.getElementById("name").value;
      const relation = document.getElementById("relation").value;
      const age = document.getElementById("age").value;

      const id = generateId();
      const data = { serial, name, relation, age, id };

      // Save in localStorage
      let records = JSON.parse(localStorage.getItem("sonodData")) || [];
      records.push(data);
      localStorage.setItem("sonodData", JSON.stringify(records));

      document.getElementById("successMsg").innerText = 
        "সনদ সফলভাবে সংরক্ষিত হয়েছে। আপনার সনদ নম্বর: " + id;

      form.reset();
    });
  }

  // Verify Page
  const vForm = document.getElementById("verifyForm");
  if (vForm) {
    vForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const number = document.getElementById("verifyNumber").value;
      let records = JSON.parse(localStorage.getItem("sonodData")) || [];
      const found = records.find(r => r.id === number);

      if (found) {
        document.getElementById("result").innerHTML = `
          <h3>✅ সনদ পাওয়া গেছে</h3>
          <p>ক্রমিক: ${found.serial}</p>
          <p>নাম: ${found.name}</p>
          <p>সম্পর্ক: ${found.relation}</p>
          <p>বয়স: ${found.age}</p>
          <p>সনদ নম্বর: ${found.id}</p>
        `;
      } else {
        document.getElementById("result").innerHTML = "<p style='color:red;'>❌ কোন তথ্য পাওয়া যায়নি</p>";
      }
    });
  }
});