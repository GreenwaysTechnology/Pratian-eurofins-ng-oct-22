//decorator declarations

//decorator without parameter
function Course_(target: any) {
    //declorator logic
    Object.defineProperty(target.prototype, 'course', {
        value: 'Typescript'
    })
}

function Course(course: any) {
    //decorator logic
    return function (target: any) {
        //declorator logic
        Object.defineProperty(target.prototype, 'course', {
            value: course
        })
    }
}
//
@Course({ id: 1, name: 'Angular', duration: '40hrs' })
class Student {
    constructor(public name: string = "") { }
}
let student = new Student('Karthik') as any

// console.log(`${student.name} is learning ${student.course}`)
console.log(`${student.name} is learning ${student.course.id} ${student.course.name}`)