import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://my-burger-api.herokuapp.com/burgers'
};

axios.request(options).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error('Error fetching data:', error.message);
});
