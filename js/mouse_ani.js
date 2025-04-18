const circle = document.getElementById('circle');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // 위치를 조금씩 따라오게 만듦 (lerp 방식)
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    circle.style.left = `${currentX}px`;
    circle.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
}

animate(); // 애니메이션 루프 시작