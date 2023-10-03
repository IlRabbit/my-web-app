const baseUrl = 'https://api.open5e.com/v1';

export const getSpells = (query = null) => 
    fetch(`${baseUrl}/spells/${query ?? ''}`).then(res => res.json());


export const getFeats = (query = null) => 
    fetch(`${baseUrl}/feats/${query ?? ''}`).then(res => res.json());