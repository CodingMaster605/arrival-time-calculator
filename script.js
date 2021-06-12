const form = document.getElementById("form");
const success = document.getElementsByClassName("success");
const error = document.getElementsByClassName("error");
const arrival_time = document.getElementById("arrival-time");

const car = document.getElementById("car");
const track = document.getElementById("track");
const wheel = document.getElementById("wheels");

const distance = document.getElementById("distance");
const speed = document.getElementById("speed");
let presentTime = new Date();

const est_arrival_calculator = document.getElementById("est-arrival-calculator");

est_arrival_calculator.addEventListener("submit", (e) => {
    e.preventDefault();
    function checkRequired(inputs) {
        
        arrival_time.innerHTML = "";
        
        inputs.forEach(input => { 
            if (input.value.trim() === "") {
                input.className = "error"
                arrival_time.innerHTML += `Please enter the ${input.id}! <br/>`;
                arrival_time.className = "text show"
                wheel.className = "wheels"
                car.className = "car"
                track.className = "track"
            } else {
                input.className = "success"
                // arrival_time.className = "text hide"
            }
        });
    }
    
    checkRequired([distance,speed]);

    if (distance.value.trim() !== "" && speed.value.trim() !== "") {
        time = parseInt(distance.value)/parseInt(speed.value)
        let est_arrival_time = new Date(presentTime.setHours(presentTime.getHours()+time))
        arrival_time.innerHTML = `${est_arrival_time.toDateString()} ${est_arrival_time.toLocaleTimeString()}<br/>`
        // arrival_time.innerHTML += `${time}h<br/>`
        arrival_time.className = "text show"

        car.classList.add("move")
        track.classList.add("move")
        wheel.classList.add("move")
        // track.className = "track move"
        // wheel.className = "wheels move"
    }
});

