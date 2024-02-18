import React, { useState, useEffect } from 'react';
import './music.css';

const Music = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Love', 'Life', 'Sorrow', 'Joy', 'Sadness', 'Ecstasy', 'Agony'];

  // Determine whether the current word is happy or sad
  const isHappyWord = ['Love', 'Life', 'Joy', 'Ecstasy'].includes(words[currentWord]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((currentWord + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentWord]);

  const wordClass = isHappyWord ? 'happy-word' : 'sad-word';

  return (
    <div id='music'>
      <div className="musicHeader">
      The Assemblage Of My Musical Library.
        {/* <span className={`adjective-music ${wordClass}`}>{words[currentWord]}</span> */}
      </div>
      <div className="playlists">
        <div className="musicIframeContainer">
          <iframe
            title="My Spotify Playlist"
            className="musicIframe"
            src="https://open.spotify.com/embed/playlist/2m3LyY4wnOdRe5YWwzmuRJ?si=971e33bcf702419b"
            // allowFullScreen="True"
            // allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            title="My Spotify Playlist"
            className="musicIframe"
            src="https://open.spotify.com/embed/playlist/4hGJpCUPBsWHhc9G6nbozJ?si=28d389ed5a374aa8"
            // allowFullScreen="True"
            // allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            title="My Spotify Playlist"
            className="musicIframe"
            src="https://open.spotify.com/embed/playlist/14pdTbCnnvoAgUccp2VFYC?utm_source=generator"
            // allowFullScreen="True"
            // allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Music;
