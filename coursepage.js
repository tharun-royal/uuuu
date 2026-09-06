function addCourse() {
    let name = document.getElementById("courseName").value;
    let duration = document.getElementById("duration").value;

    fetch("http://localhost:3000/courses", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, duration})
    });
}