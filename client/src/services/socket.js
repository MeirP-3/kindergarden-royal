
import ioClient from 'socket.io-client'
const port = '3003';
const url = `http://localhost:${port}/data/`
const socket = ioClient(`http://localhost:${port}`);

export default {
    port,
    url,
    socket
}