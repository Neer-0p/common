import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { Student, StudentService } from './student.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  students: Student[] = [];
  newStudent: Student = { name: '', email: '', age: null };

  constructor(
    private authService: AuthService,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (data) => this.students = data,
      error: (err) => console.error('Error fetching students', err)
    });
  }

  addStudent() {
    if (this.newStudent.name && this.newStudent.email && this.newStudent.age) {
      this.studentService.addStudent(this.newStudent).subscribe({
        next: (student) => {
          this.students.push(student);
          this.newStudent = { name: '', email: '', age: null };
        },
        error: (err) => console.error('Error adding student', err)
      });
    }
  }

  deleteStudent(id: string | undefined, index: number) {
    if (id) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          this.students.splice(index, 1);
        },
        error: (err) => console.error('Error deleting student', err)
      });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
