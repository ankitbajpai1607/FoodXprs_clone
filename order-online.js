var cust_name;
var select_location;
var select_food;
var date_delivery;
var object;
function Getdata(e) {

	// e.preventDefault();

	// var local_data2 = localStorage.getItem("user_data2");
	// var local_data3 = JSON.parse(local_data2);
	// var user_reg = local_data3.user_name;
	// console.log(user_reg);
	// console.log(local_data2);

	// console.log(local_data2.user_name);
	// var b = localStorage.getItem("user");
	if (localStorage.getItem("user") === null) {
		window.location.href = "register.html";
	} else {
		// console.log(b);
		document.getElementById("Accept_food_msg").textContent = "";
		cust_name = document.getElementById("uname").value;
		select_location = document.getElementById("location1").value;
		select_food = document.getElementById("food_type").value;
		date_delivery = document.getElementById("data_order").value;
		// export default { cust_name, select_location, select_food, date_delivery };
		object = {
			customer: cust_name,
			location: select_location,
			food: select_food,
			date: date_delivery,
		};
		// export default object;
		console.log(object);
		var json_data = JSON.stringify(object);
		localStorage.setItem("user_data", json_data);
		if (
			cust_name.length == 0 ||
			select_location.length == 0 ||
			select_food.length == 0 ||
			date_delivery == 0
		) {
			alert("Please enter all Details");
			alert.style.color = "red";
		} else {
			localStorage.setItem("Name", cust_name);
			localStorage.setItem("Location", select_location);
			localStorage.setItem("Food", select_food);
			localStorage.setItem("Date", date_delivery);
			document.getElementById("Accept_food_msg").innerHTML =
				`Thank You! for Your Order` + `<p>&#128522</p>`;

			window.location.href = "plan-my-meal.html";
		}

	}
}
document.getElementById("button_submit").addEventListener("click", Getdata);
