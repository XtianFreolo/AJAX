// look back at the <readme.md> file for some hints //
// working API key //


// read me questions 
//Task 1
// The response.data.data shows a large array of objects-
// -preasumely the GIFs at Giphy.  
// Then if you use "data-limit-10" into the code, it only shows-
// -you 10 objects, meaning 10 data in the array. 


const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";


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