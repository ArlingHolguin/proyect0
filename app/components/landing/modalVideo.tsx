import React from "react";

export default function ModalVideo({ status, onClose }:{status:boolean, onClose:any}) {
  if (!status) {
    return null; 
  }
  const videoId = "fF1l12I0i98";   
  return (
    <div className="modal">
      <div className=" flex justify-center items-center relative">
        <button onClick={onClose} className="absolute -top-4 -right-4 text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60">
                <g id="Grupo_5105" data-name="Grupo 5105" transform="translate(-2.5 -2.5)">
                    <path id="Trazado_6" data-name="Trazado 6" d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0Z" transform="translate(2.5 2.5)" fill="#fff" />
                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M27.134,24.1l9.152-9.152a2.145,2.145,0,0,0-3.033-3.033L24.1,21.065l-9.152-9.152a2.145,2.145,0,1,0-3.033,3.033L21.068,24.1,11.916,33.25a2.145,2.145,0,0,0,3.033,3.033L24.1,27.131l9.152,9.152a2.145,2.145,0,0,0,3.033-3.033Z" transform="translate(8.403 8.399)" fill="#5a1482" />
                </g>
            </svg>
        </button>              
        <iframe
          className="rounded-lg transition hidden md:block"
          title="YouTube Video"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen>
        </iframe>
        <iframe
  className="rounded-lg transition block md:hidden"
  title="YouTube Video"
  width="340"
  height="240"
  src={`https://www.youtube.com/embed/${videoId}`}
  allow="autoplay; fullscreen"
  allowFullScreen
></iframe>

      </div>
    </div>
  );
}
