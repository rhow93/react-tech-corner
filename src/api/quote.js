const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes';

export default () => fetch(url).then(response => response.json());