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
	async function getLocalData(){
		const response = await import("./data/testing.json");
		return response.json();
	}
	
	json = getLocalData();
	for (let i in json.data) {
			addPostToFeed(json.data[i]);
	}
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