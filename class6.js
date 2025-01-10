let name = document.getElementById('name'),
department = document.getElementById('department'),
id = document.getElementById('id'),
tbody = document.getElementById('tbody'),
btn = document.getElementById('btn')

btn.addEventListener('click', () =>{
   const tr = document.createElement('tr')
   tr.innerHTML = `<td>${Name.value}</td>
    <td>${department.value}</td>
    <td>${id.value}</td>
    <td><button id = "delete_btn">Delete</button></td>
    `

    table.appendChild(tr)
    Name.value = ""
    department.value = ""
    id.value = ""
    let delete_btn = document.getElementById("delete_btn")
    delete_btn.addEventListener("click", function(){
       let btn = this.parentElement
       let parent = btn.parentElement
       tbody.removeChild(parent)
    })
}) 