// look back at the <readme.md> file for some hints //
// working API key //


// read me questions 
//Task 1
// The response.data.data shows a large array of objects-
// -preasumely the GIFs at Giphy.  
// Then if you use "data-limit-10" into the code, it only shows-
// -you 10 objects, meaning 10 data in the array. 


const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const removeButton = document.getElementById("remove-button");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const query = input.value;

    try {
        const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: giphyApiKey,
                q: query,
                limit: 1
            }
        });

        const gifUrl = res.data.data[0]?.images.fixed_height.url;
        if (gifUrl) {
            const img = document.createElement("img");
            img.src = gifUrl;
            gifContainer.appendChild(img);
        }

        input.value = "";

    } catch (err) {
        console.error("Failed to fetch GIF:", err);
    }
});

removeButton.addEventListener("click", function() {
    gifContainer.innerHTML = "";
});



// async function giphyRequest() {
//     const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
//     console.log(response);
//   }
//   giphyRequest();


async function giphyRequest() {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=10`);
    console.log(response);
  }
  giphyRequest();