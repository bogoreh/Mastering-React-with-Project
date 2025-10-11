import { useEffect, useState } from "react";

const useGenerateRandomMeme = () => {
    const [memesData, setMemesData] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setMemesData(data.data.memes));
    }, []);

    return memesData[Math.floor(Math.random() * memesData.length)];
};
export default useGenerateRandomMeme;