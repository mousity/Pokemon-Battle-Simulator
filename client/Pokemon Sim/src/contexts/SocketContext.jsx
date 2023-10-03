// SocketService.js
import io from 'socket.io-client'
import { createContext, useContext } from 'react';

const SocketContext = createContext();

const initializeSocket = () => {
    const socket = io.connect("http://localhost:4000"); // Replace 'your_socket_server_url' with the actual URL of your socket server
    return socket;
  };

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  // Initialize and manage your socket instance here
  const socket = initializeSocket();

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}
