//variables and type system.

//var /let /const

//strings "",'',``(back tick - interpolation , multi line strings)
let firstName = "Subramanian"
let lastName = 'Murugan'
console.log(firstName + lastName)
console.log(firstName , lastName)
console.log(`${firstName} ${lastName}`)
//multi line
let title = 'Welcome to Typescript'
let template = `
  <div>
        <h1>${title}</h1>
  </div>
`
console.log(template)