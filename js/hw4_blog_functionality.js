let inputArea = document.createElement("input");
    inputArea.setAttribute('type', 'text');
    inputArea.style.width = "1000px";
    inputArea.style.height = "100px";
    inputArea.style.display = "block";
    inputArea.style.margin = "auto";
    inputArea.style.marginTop = "20px";
    inputArea.style.border = "3px solid rgb(245, 187, 29)";
    inputArea.style.fontSize = "20px";

let replyArea = document.createElement("input");
    replyArea.setAttribute('type', 'text');
    replyArea.style.width = "1000px";
    replyArea.style.height = "100px";
    replyArea.style.display = "block";
    replyArea.style.margin = "auto";
    replyArea.style.marginTop = "20px";
    replyArea.style.border = "3px solid rgb(245, 187, 29)";
    replyArea.style.fontSize = "20px";

let btn = document.createElement("button");
    btn.innerText = "Post Comment";
    btn.style.marginLeft = "auto";

let btn2 = document.createElement("button");
    btn2.innerText = "Reply";
    btn.style.marginLeft = "auto";

blogButton.addEventListener('click', commentArea);

function commentArea()
{
    let foot = document.querySelector('#footer');
    document.body.insertBefore(inputArea, foot);
    document.body.insertBefore(btn, foot);
}

btn.addEventListener('click', postComment);

function postComment()
{
    let art = document.querySelector('#contentDescription');
    art.appendChild(inputArea);
    pBlog.style.marginBottom = "20px";
    inputArea.style.marginTop = "40px";
    inputArea.style.marginRight = "50px";
    art.appendChild(btn2);
    btn2.style.float = "right";
    btn.style.display = "none";
    let blg = document.querySelector('#blogButton');
    blg.style.marginTop = "150px";
}

btn2.addEventListener('click', replyComment);

function replyComment()
{
    let foot = document.querySelector('#footer');
    let man = document.querySelector('#main');
    let blg = document.querySelector('#blogButton');
    document.body.insertBefore(replyArea, foot);
    document.body.insertBefore(btn, foot);
    btn.style.display = "block";    
}