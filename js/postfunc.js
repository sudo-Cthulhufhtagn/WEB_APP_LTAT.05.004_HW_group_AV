var loggedIN = false;
var menuOpen = false;

class Person {
	constructor(name, email, paswd)
		{
		this.name = name;
		this.email = email,
		this.password_hash = paswd
		}
}

const list_of_man = ["name", "eamael"]
const manPlaceholder = new Person("Random", "gg@gmail.com", "gjk.ehgresgbhj")
	

function logOut(){
	window.location.href = "login.html";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	var openDropdown = dropdowns[i];
	if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	}
	}
}
}

function dropDown() {
	console.log("entry 1")
	// if (!loggedIN){
	// 	window.location.href = "login.html";
	// 	loggedIN = true;
	// }
	// else 
	if (!menuOpen) {
		console.log("entry 2" + menuOpen)

		document.getElementById("myDropdown").classList.toggle("show");
		menuOpen = true;
		var dropD = document.getElementById("myDropdown")//.classList.toggle("block");
		dropD.style.display = "block";
		document.getElementById("myDropdownName").textContent = manPlaceholder['name']
		document.getElementById("myDropdownEmail").textContent = manPlaceholder['email']
		document.getElementById("myDropdownLogout").textContent = "logout"
	}
	else {

		var dropD = document.getElementById("myDropdown")//.classList.toggle("block");
		console.log(dropD)
		
		menuOpen = false;
		dropD.style.display = "none";

	}

}

function getFetchPosts(){
	// fetch("https://api.jsonstores.com/AA903698701950783488Vror/car/1")
	fetch("http://myjson.dit.upm.es/api/bins/ih8e")
	.then(response => response.json())
	.then(json => {
		for (let i in json.data) {
			addPostToFeed(json.data[i]);
		}
	})
}


function getLocalPosts(){
	// async function getLocalData(){
	// 	const response = await import("./data/testing.json");
	// 	return response.json();
	// }
	
	// json = getLocalData();
	// for (let i in json.data) {
	// 	addPostToFeed(json.data[i]);
	// }

	fetch("./data/testing.json")
	.then(response => response.json())
	.then(json => {
		for (let i in json.data) {
			addPostToFeed(json.data[i]);
		}
	})
	
}

function addPostToFeed(jsonPostData){
	if (!(jsonPostData.hasImg||jsonPostData.hasTxt)) {return null;}
	let postCap = document.getElementById("postCap");
	let newPost = document.createElement("div");

	if (jsonPostData.hasImg) {
		let newPostImg = document.createElement("img");
		newPostImg.src = 'data:image/jpeg;base64,' + jsonPostData.Img;
		newPost.appendChild(newPostImg);
	}

	if (jsonPostData.hasTxt) {
		let newPostText = document.createElement("p")
		let newPostTextData = document.createTextNode(jsonPostData.text);
		newPostText.append(newPostTextData)
		newPost.appendChild(newPostText);
	}
	postCap.before(newPost);
}