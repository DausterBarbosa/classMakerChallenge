const button = document.getElementById("requestButton");
const table = document.getElementById("myTable");
const tableBody = table.getElementsByTagName("tbody")[0];
const loading = document.getElementById("loading");

button.addEventListener("click", () => {
    loading.style.display = "block";
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((data) => {
        makeTable(data);

    })
});

function makeTable(data){
    data.forEach(element => {
        tableBody.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.website}</td></tr>`;
    });

    loading.style.display = "none";
    table.style.display = "block";
    button.disabled = "true";
}