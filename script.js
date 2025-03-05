let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");
let btn = document.getElementById("btn");

function ageValidation() {
return new Promise((resolve, reject) => {
let name = nameInput.value
let age = parseInt(ageInput.value);
if (!name || isNaN(age)) {
    alert("Please enter valid details");
    return;
}
       
        setTimeout(() => {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    });
        
    };


btn.addEventListener("click", (event) => {
    ageValidation()
        .then(() => {
            alert(`Welcome, ${nameInput.value}.You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry, ${nameInput.value}.You aren't old enough.`);
        });
});
