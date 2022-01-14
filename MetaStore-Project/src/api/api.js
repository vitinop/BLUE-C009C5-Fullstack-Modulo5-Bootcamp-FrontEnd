import axios from "axios";

const Api = {
    getUserAll:() => axios.get('/user'),
    gerUserById:(id) => axios.get(`/user/${id}`),
    updateUser:(id, body) => axios.patch(`/user/${id}`, body),
    addUser:(body) => axios.post(`/user/`, body),
}

export default Api