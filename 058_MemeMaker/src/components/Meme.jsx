import { useState } from "react";
import "./Meme.css";
import useGenerateRandomMeme from "../hooks/use-generate-random-meme";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const randomMeme = useGenerateRandomMeme();

  //Get a random meme from memesArray
  function getRandomMeme(e) {
    e.preventDefault();
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: randomMeme.url,
    }));
  }

  //Handle the input text change
  function handleInputChange(e) {
    const { value, name } = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          onChange={handleInputChange}
          value={meme.topText}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleInputChange}
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getRandomMeme}>
          Get a new Meme Image
        </button>
      </form>
      <div className="meme--container">
        <img alt="" src={meme.imageUrl} className="meme--image" />
        <h4 className="meme--top--text">{meme.topText}</h4>
        <h4 className="meme--bottom--text">{meme.bottomText}</h4>
      </div>
    </main>
  );
};

export default Meme;
