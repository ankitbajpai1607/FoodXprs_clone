var cust_name;
var select_location;
var select_food;
var date_delivery;
var object;
function Getdata(e) {
	e.preventDefault();
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
<<<<<<< HEAD

		var cust_name = (document.getElementById("uname").value = "");
		var select_location = (document.getElementById("location1").value = "");
		var select_food = (document.getElementById("food_type").value = "");
		var date_delivery = (document.getElementById("data_order").value = "");


		location.href =  "file:///C:/Users/Pratiksha/project-2-FoodXprs_clone/packaging-part.html"
=======
		// cust_name = document.getElementById("uname").value = "";
		// select_location = document.getElementById("location1").value = "";
		// select_food = document.getElementById("food_type").value = "";
		// date_delivery = document.getElementById("data_order").value = "";
		window.location.href = "plan-my-meal.html"
>>>>>>> 2b3896aa8bfe349b54792e6f18b66afe026f8764
	}
}
document.getElementById("button_submit").addEventListener("click", Getdata);
