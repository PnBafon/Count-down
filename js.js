let duetime
// let duetime = new Date("jul 5, 2024 00:00:00").getTime()
const btn = document.querySelector('#btn') 


// function count_down(datefield){
//     duetime = new Date(datefield.value).getTime()
// }

btn.addEventListener('click', function(){
    const datefield = document.querySelector('.datefield')
    // datefield.value = datefield.value
    console.log(datefield.value)
    localStorage.duetime = new Date(datefield.value).getTime()
})


duetime = localStorage.getItem('duetime')

const seconds_animation = document.querySelector(".seconds_animation")
setInterval(function() {
    setTimeout(() => {
        seconds_animation.classList.add('animate')
    }, 2500);
    seconds_animation.classList.remove('animate')
}, 60000)

setInterval(function() {
        const now = new Date().getTime()
        const distance = duetime - now 
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
        const seconds = Math.floor(distance % (1000 * 60 ) / 1000 )

        const display_days = document.querySelector('.days')
        display_days.innerHTML = `<p> ${days} </p> <span>DAYS </span>`

        const display_hours = document.querySelector('.hours')
        display_hours.innerHTML = `<p> ${hours} </p> <span>HOURS</span>`

        const display_minutes = document.querySelector('.minutes')
        display_minutes.innerHTML = `<p> ${minutes} </p> <span> MINUTES</SPAN>`

        const display_seconds = document.querySelector('.seconds')
        display_seconds.textContent = seconds
           
}, 1000)

