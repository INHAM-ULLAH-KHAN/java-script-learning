// Object Restructuring 
const course = {
    name: "Someting",
    price: 999,
    courseTeacher: "Hitesh"
}
// course.name

const {courseTeacher: teacher} = course
console.log(teacher);
