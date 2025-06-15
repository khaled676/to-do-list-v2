const button = document.querySelector("button")
const input = document.querySelector("input")
const container = document.getElementById("container")







container.addEventListener("click", (eo) => {



    switch (eo.target.className) {
        case "icon-trach icon":
            eo.target.parentElement.parentElement.remove();
            break;


        case "icon-angry2 icon":
            eo.target.classList.add("dn");
            const heart = `<span class="icon-heart">   </span>`
            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.add('finish')
            eo.target.parentElement.innerHTML += heart
            break;


        case "icon-heart":
            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.remove('finish')
            eo.target.classList.add("dn")
            const addAngry = `
            <span class="icon-angry2 icon"> </span>
            `
            eo.target.parentElement.innerHTML += addAngry
            break;


        case "icon-star-full icon":
            eo.target.classList.add("orange")
            container.prepend(eo.target.parentElement)
            break;


        case "icon-star-full icon orange":
            eo.target.classList.remove("orange")
            container.append(eo.target.parentElement)
            break;


        default:
            break;
    }
});

























button.addEventListener("click", (eo) => {
    eo.preventDefault();
    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const task = `
    
        <div class="task">

            <span class="icon-star-full icon"> </span>
            <p class="task-text"  lang="ar">
                ${input.value}
            </p >

            <div>
                <span class="icon-trach icon"> </span>
                <span class="icon-angry2 icon"> </span>
            </div>


        </div>`

    container.innerHTML += task;

    input.value = "";








})



