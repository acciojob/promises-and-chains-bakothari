//your JS code here. If required.
let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");
let btn = document.getElementById("btn");

function ageValidation() {
	 if(!ageInput.value || !nameInput.value){
        alert("Please enter valid details.")
    }
    return new Promise((resolve, reject) => {
        let age = parseInt(ageInput.value);

        if (age > 18) {
            setTimeout(() => {
                resolve();
            }, 4000);
        } else {
            reject();
        }
    });
}

btn.addEventListener("click", (event) => {
    ageValidation()
        .then(() => {
            alert(`Welcome, ${nameInput.value}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry, ${nameInput.value}. You aren't old enough.`);
        });
});
