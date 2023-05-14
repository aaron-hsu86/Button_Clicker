function login_logout (element){
    if(element.innerText === "Login"){
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function liked(element){
    if (element.innerText != "Ninja was liked"){
        element.innerText = "Ninja was liked";
        alert("Ninja was liked");
    } else {
        alert("Ninja already liked this!\nNo take backs!\n...truthfully, I just don't know how to restore previous content");
    }
}

function removeButton(elemnt) {
    elemnt.remove();
}

