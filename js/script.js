
// Any div with position: relative
const box = document.getElementById("box")

// Declare empty array
const circles = []

// Declare circle count
const circleCount = 10

// Spawn circles inside chosen div (eg. box)
for (let i = 1; i < circleCount; i++) {
    circles.push(new Circle(box))
}

// Optional: Style circles
circles.forEach(circle => {
  circle.element.style.border = "2px solid rgba(20, 10, 150, 0.8)"
  circle.element.style.backgroundColor = "rgba(50, 20, 50, 0.2)"  
})

// Animate Circles
function animate() {

    circles.forEach(circle => circle.moveCircle())
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)