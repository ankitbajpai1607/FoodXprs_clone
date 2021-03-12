var local_data = localStorage.getItem("user_data");
var local_data = JSON.parse(local_data);
console.log(local_data);

document.getElementById("uname").value = local_data.customer;

document.getElementById("location1").value = local_data.location;
document.getElementById("food_type").value = local_data.food;
document.getElementById("data_order").value = local_data.date;

