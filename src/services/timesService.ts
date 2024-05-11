import { Time } from '../models/Time';

let times: Time[] = [
    { id: 1, nome: 'Raimon', logoUrl: 'https://pm1.aminoapps.com/8535/49d1b908508c5518e44c7d2da5d8bfff7eb9184cr1-225-225v2_00.jpg' },
    { id: 2, nome: 'Hakuren', logoUrl: 'https://static.wikia.nocookie.net/inazuma-eleven/images/c/cd/Hakuren_emblem_%28SD%29.png/revision/latest/scale-to-width-down/256?cb=20230803093517' },
];

export const getTimesService = (): Time[] => {
    return times;
};

export const addTimeService = (novoTime: Time): void => {
    times.push(novoTime);
};

export const deleteTimeService = (id: number): void => {
    times = times.filter(time => time.id !== id);
};

export const updateLogoService = (id: number, logoUrl: string): Time => {
    const timeIndex = times.findIndex(time => time.id === id);

    if (timeIndex !== -1) {
        times[timeIndex].logoUrl = logoUrl;
        return times[timeIndex];
    } else {
        throw new Error('Time não encontrado');
    }
};
