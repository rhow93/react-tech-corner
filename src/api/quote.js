const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes';

export default async () => fetch(url).then(response => response.json());