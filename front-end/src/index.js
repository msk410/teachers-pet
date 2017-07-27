;(function () {
    'use strict'
    window.onload = function() {
        var importButton = document.querySelector('#import')
        importButton.addEventListener('click', importStudents)
        let pickButton = document.querySelector('#pick-student')
        pickButton.addEventListener('click', pickStudent)
    }

    let studentList = []

    function importStudents() {
        fetch('http://localhost:8080/students')
        .then((response) => response.json())
        .then((students) => {
            studentList = students
            let myCounter = "students"
            if(studentList.length == 1) {
                myCounter = "student"
            }
            document.querySelector('#studentCount').innerHTML = studentList.length + " " + myCounter + " imported"
            document.querySelector("#studentsRemaining").innerHTML = studentList.length + " students remaining"
            if (studentList.length) {
                document.querySelector('#pick-student').classList.remove('hidden')
            }
       
        })
        .catch((error) => {
            console.log(error)
            document.querySelector('#errorMessage').innerHTML = error.message
        })
    }

    function pickStudent() {
        let selectedIndex = Math.floor(Math.random()*studentList.length)
        let selectedStudent = studentList.splice(selectedIndex, 1)[0]
        console.log(selectedStudent, studentList)
        document.querySelector('#selectedStudent').innerText = selectedStudent.name
        document.querySelector("#studentsRemaining").innerHTML = studentList.length + " students remaining"
        if (studentList.length === 0) {
            document.querySelector('#pick-student').classList.add('hidden')
        }
    }
}());