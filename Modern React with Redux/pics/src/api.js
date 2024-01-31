import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:
                'Client-ID yhUd78lYuDb_7oKVPwpwyxqjp8hAUY4Yw9Zmdb5v3OE'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;
