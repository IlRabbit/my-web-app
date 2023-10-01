const baseUrl = 'https://api.open5e.com/v1';

export const getSpells = (query = null) => 
    fetch(`${baseUrl}/spells/${query ?? ''}`).then(res => res.json());

