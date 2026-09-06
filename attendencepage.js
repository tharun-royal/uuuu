function addAttendance() {
    let name = document.getElementById("name").value;
    let status = document.getElementById("status").value;
    let date = new Date().toLocaleDateString();

    fetch("http://localhost:3000/attendance", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, status, date})
    });
}