import { io } from 'socket.io-client'

export const socket = io(process.env.PUBLIC_URL);
