// function buttonClicked()
// {
//     alert('Added Event Listener');
// }

// let demo = document.addEventListener('click', buttonClicked);

// function idk()
// {
//     let btn = document.createElement("BUTTON");   // Create a <button> element
//     btn.innerHTML = "CLICK ME";                   // Insert text
//     document.body.appendChild(btn);
// }
 

//blogButton.addEventListener('click', buttonClicked);
// let blogButton = document.querySelector("#blogButton")
// console.log(blogButton);
// blogButton = document.addEventListener('click', commentArea);
blogButton.addEventListener('click', commentArea);

function commentArea()
{
    document.querySelector('#main_section').style.backgroundColor= 'red';
    // section = document.createElement("section");
    // section.style.width = "100px";
    // section.style.height = "100px";
    // section.style.background = "red";
    // section.style.color = "white";
    // section.innerHTML = "Hello";
    // section.style.margin = "auto";
    // document.body.appendChild(section);
}

// blogButton.addEventListener('click', commentArea);
// btn = document.addEventListener('click', commentArea);
// document.getElementById("main_section").appendChild(section);

