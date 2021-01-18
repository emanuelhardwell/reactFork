/*  */
/*  */

const getImage = async () => {
  try {
    const apiKey = "EMkLUTqDMhIksWGffC42PtHNNshPjgwj";
    const peticion = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const resp = await peticion.json();
    const url = resp.data.images.original.url;
    console.log(url);

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImage();
