function addFaculty() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;

    fetch("http://localhost:3000/faculty", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, subject})
    });
}