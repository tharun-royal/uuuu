const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

/* ✅ MIDDLEWARE */
app.use(express.json());
app.use(cors());

/* ✅ DATABASE CONNECTION */
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "smart_campus_db"
});

db.connect((err) => {
    if (err) {
        console.log("❌ DB Connection Error:", err);
    } else {
        console.log("✅ Database Connected");
    }
});

/* 🔐 LOGIN API */
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.send({ success: false });
            }

            if (result.length > 0) {
                res.send({ success: true });
            } else {
                res.send({ success: false });
            }
        }
    );
});

/* 👨‍🎓 STUDENTS APIs */

// GET ALL STUDENTS
app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            console.log(err);
            res.send([]);
        } else {
            res.send(result);
        }
    });
});

// ADD STUDENT
app.post("/students", (req, res) => {
    const { name, course } = req.body;

    db.query(
        "INSERT INTO students (name, course) VALUES (?, ?)",
        [name, course],
        (err) => {
            if (err) {
                console.log(err);
                res.send("❌ Error adding student");
            } else {
                res.send("✅ Student Added");
            }
        }
    );
});

// DELETE STUDENT
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM students WHERE id=?", [id], (err) => {
        if (err) {
            console.log(err);
            res.send("❌ Error deleting student");
        } else {
            res.send("✅ Student Deleted");
        }
    });
});

/* 👨‍🏫 FACULTY APIs */

// GET ALL FACULTY
app.get("/faculty", (req, res) => {
    db.query("SELECT * FROM faculty", (err, result) => {
        if (err) {
            console.log(err);
            res.send([]);
        } else {
            res.send(result);
        }
    });
});

// ADD FACULTY
app.post("/faculty", (req, res) => {
    const { name, subject } = req.body;

    db.query(
        "INSERT INTO faculty (name, subject) VALUES (?, ?)",
        [name, subject],
        (err) => {
            if (err) {
                console.log(err);
                res.send("❌ Error adding faculty");
            } else {
                res.send("✅ Faculty Added");
            }
        }
    );
});

/* 📚 COURSES APIs */

// GET COURSES
app.get("/courses", (req, res) => {
    db.query("SELECT * FROM courses", (err, result) => {
        if (err) {
            console.log(err);
            res.send([]);
        } else {
            res.send(result);
        }
    });
});

// ADD COURSE
app.post("/courses", (req, res) => {
    const { name, duration } = req.body;

    db.query(
        "INSERT INTO courses (name, duration) VALUES (?, ?)",
        [name, duration],
        (err) => {
            if (err) {
                console.log(err);
                res.send("❌ Error adding course");
            } else {
                res.send("✅ Course Added");
            }
        }
    );
});

/* 📅 ATTENDANCE APIs */

// GET ATTENDANCE
app.get("/attendance", (req, res) => {
    db.query("SELECT * FROM attendance", (err, result) => {
        if (err) {
            console.log(err);
            res.send([]);
        } else {
            res.send(result);
        }
    });
});

// ADD ATTENDANCE
app.post("/attendance", (req, res) => {
    const { name, status, date } = req.body;

    db.query(
        "INSERT INTO attendance (name, status, date) VALUES (?, ?, ?)",
        [name, status, date],
        (err) => {
            if (err) {
                console.log(err);
                res.send("❌ Error adding attendance");
            } else {
                res.send("✅ Attendance Added");
            }
        }
    );
});

/* 🚀 START SERVER */
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});