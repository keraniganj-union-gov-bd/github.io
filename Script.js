const sampleData = [
    {name: "রহিম উদ্দিন", father: "মোঃ হাছান", address: "ঢাকা", status: "চলমান"},
    {name: "কামাল হোসেন", father: "মোঃ আলম", address: "চট্টগ্রাম", status: "সম্পন্ন"},
    {name: "সাবিনা আক্তার", father: "মোঃ সেলিম", address: "সিলেট", status: "চলমান"}
];

document.getElementById("searchForm").addEventListener("submit", function(e){
    e.preventDefault();
    const query = document.getElementById("searchInput").value.toLowerCase();
    const table = document.getElementById("resultTable");
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";

    const filtered = sampleData.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.father.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query)
    );

    if(filtered.length > 0){
        filtered.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = <td>${item.name}</td><td>${item.father}</td><td>${item.address}</td><td>${item.status}</td>;
            tbody.appendChild(row);
        });
        table.style.display = "table";
    } else {
        tbody.innerHTML = <tr><td colspan="4">কোনো তথ্য পাওয়া যায়নি</td></tr>;
        table.style.display = "table";
    }
});