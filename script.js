console.log("har har mahadev")

let scheduleForm = document.getElementById("scheduleForm")
let dateSchedule = document.getElementById("dateSchedule")
let timeSchedule = document.getElementById("timeSchedule")
let doctorSchedule = document.getElementById("doctorSchedule")
let modal = document.getElementById("modal")
let modalId = document.getElementById("modal_id")
let modal_content_box = document.getElementById("modal_content_box")
let navLinks = document.getElementById("navLinks")
let body = document.getElementById("body")

function openNav(){
    navLinks.classList.add("open_transform")
}
function closeNav(e){
    navLinks.classList.remove("open_transform")
}
function openModal(){
    modal.classList.add("open_transform")
    console.log("body =",body)
}
function closeModal(){
    modal.classList.remove("open_transform")
}
let nav = [1]
function handlenav(){
    if(nav.length === 1){openNav();nav.push(11)}
    else{ closeNav();nav.pop(11)}
}

const entrydata = []
scheduleForm.addEventListener("submit" , (e)=>{
    e.preventDefault()
    openModal()
    entrydata.push({date : dateSchedule.value , time:timeSchedule.value,doctor:doctorSchedule.value})
    console.log(entrydata)
    entrydata.map((data)=>{
        console.log(data)
        modalId.innerHTML=`
        <p>Your appointment with  doctor <b>${data.doctor}</b>  is sucessfully fixed on 
        ${data.date} at  ${data.time}</p>
        `
    })
})

