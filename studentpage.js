function addStudent() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, course})
    });
}

/* LOAD STUDENTS */
async function loadStudents() {
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();

    console.log(data); // display in table
}