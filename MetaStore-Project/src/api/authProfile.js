import axios from 'axios';

const authProfile = {

    async getProfile(dataUser) {

        return await axios.post('/auth/profile', 
        dataUser)
    }
}

export default authProfile