import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Image from 'next/dist/client/image';

export default function VideoModal({ open, close, data, match }) {
  const [isLoadedBrowser, setIsLoadedBrowser] = useState(false);
  const [getIds, setGetIds] = useState('qbgfwJlrJCE');

  function handleCloseModal() {
    close();
  }

  function getId(e) {
    setGetIds(e.target.id)
  }
  
  useEffect(() => {
    setIsLoadedBrowser(true);
  }, []);  

  if(!isLoadedBrowser) return null;
    if(!open) return null;
    return ReactDOM.createPortal(
      <div className="video-modal">
        <div onClick={handleCloseModal} className="overlay" />
        <div className="video-modal__container">
          <div className="video-modal__cansel-button">
            <button onClick={handleCloseModal}>X</button>
          </div>
          <div className="video-modal__video-player">
            <div className="player">
              <iframe allowFullScreen height={match ? "200px" : "350px"} width="100%" src={`https://www.youtube.com/embed/${getIds}`} type="video/mp4"></iframe>
            </div>
            <div className="player__lists">
              {
                data && data?.items?.map((item, index) => {
                  console.log(item.snippet);
                  const { id, snippet = {} } = item;
                  const { title, thumbnails = {}, resourceId } = snippet;
                  const { medium } = thumbnails;
                  
                  return (                
                    <div className="player__list" key={id}>                    
                      <Image onClick={e => getId(e)} id={resourceId.videoId} src={medium.url} alt={title} width={!match ? medium.width : thumbnails.default.width} height={!match ? medium.height : thumbnails.default.height} />
                      <span className="player__list__title">{title}</span>
                      {
                       data &&
                        getIds === resourceId.videoId ?
                        <button className="player__list__playing active">trenutno</button> :
                        <button className="player__list__playing">sledaći</button>
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('__modal-root')
    )
}
