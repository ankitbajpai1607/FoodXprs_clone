function Getdata(e) {
	e.preventDefault();
	document.getElementById("Accept_food_msg").textContent = "";
	var cust_name = document.getElementById("uname").value;
	var select_location = document.getElementById("location1").value;
	var select_food = document.getElementById("food_type").value;
	var date_delivery = document.getElementById("data_order").value;

	localStorage.setItem("Name", cust_name);
	localStorage.setItem("Location", select_location);
	localStorage.setItem("Food", select_food);
	localStorage.setItem("Date", date_delivery);

	document.getElementById("Accept_food_msg").innerHTML =
		`Thank You! for Your Order` + `<p>&#128522</p>`;

	var cust_name = (document.getElementById("uname").value = "");
	var select_location = (document.getElementById("location1").value = "");
	var select_food = (document.getElementById("food_type").value = "");
	var date_delivery = (document.getElementById("data_order").value = "");
}

document.getElementById("button_submit").addEventListener("click", Getdata);
