const holder = document.querySelector(".switch-holder");
const items = holder.querySelectorAll(".switch-item");

items.forEach(element => {
    element.addEventListener("change", (event) => {
        const target = event.target;
        
        items.forEach(element => {
            if (element === target) {
                return;
            };
            const random = Math.random();
            element.checked = random >= 0.5;
        })
    })
})