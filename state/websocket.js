import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';

const Websocket = ({ url, onMessage }) => {
   const [socket, setSocket] = useState(null);

   useEffect(() => {
      const sock = new SockJS(url);
      sock.onopen = () => {
         console.log('Websocket connection opened');
      };
      sock.onmessage = (e) => {
         onMessage(e.data);
      };
      sock.onclose = () => {
         console.log('Websocket connection closed');
      };
      setSocket(sock);
      return () => sock.close();
   }, [url, onMessage]);

   const sendMessage = (data) => {
      if (socket) {
         socket.send(data);
      }
   };

   return null;
};

export default Websocket;
