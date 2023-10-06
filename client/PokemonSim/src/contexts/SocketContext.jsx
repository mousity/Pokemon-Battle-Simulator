import io from 'socket.io-client'
import { createContext, useContext } from 'react';

// Creating socket context
const SocketContext = createContext();

// Function to intiialize socket creation
const initializeSocket = () => {
    const socket = io.connect("http://localhost:4000"); 
    console.log("initializing socket...");
    return socket;
  };

// Using the context we created
export function useSocket() {
  console.log("using socket");
  return useContext(SocketContext);
}

// Return a function to wrap children within our socket provider
export function SocketProvider({ children }) {
  // Initialize and manage your socket instance here
  const socket = initializeSocket();

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}
