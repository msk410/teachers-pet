package com.allstate.compozed.teacherspet.student;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/students")
final class StudentController {
    @GetMapping
    @CrossOrigin
    public List<StudentModel> list() {
        List<StudentModel> studentList = new ArrayList<>();

        final StudentModel student = new StudentModel();
        student.setName("Mike");
        final StudentModel student1 = new StudentModel();
        student1.setName("poop");
        final StudentModel student2 = new StudentModel();
        student2.setName("blah");
        final StudentModel student3 = new StudentModel();
        student3.setName("james");

        studentList.add(student);
        studentList.add(student1);
        studentList.add(student2);
        studentList.add(student3);
        return studentList;
    }
}
