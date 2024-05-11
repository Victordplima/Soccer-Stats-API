import { Partida } from '../models/Partida';

let partidas: Partida[] = [
    { id: 1, date: "2024-05-10", teams: ["Inazuma Japan", "Dark Emperors"], result: [3, 2] },
    { id: 2, date: "2024-05-12", teams: ["Raimon Eleven", "Royal Academy"], result: [2, 1] },
    { id: 3, date: "2024-05-15", teams: ["Inazuma Japan", "Zeus"], result: [1, 1] }
];

export const getPartidasService = (): Partida[] => {
    return partidas;
};

export const addPartidaService = (novaPartida: Partida): void => {
    partidas.push(novaPartida);
};

export const updatePartidaService = (id: number, partidaData: Partida): void => {
    const partidaIndex = partidas.findIndex(partida => partida.id === id);

    if (partidaIndex !== -1) {
        partidas[partidaIndex] = { ...partidas[partidaIndex], ...partidaData };
    } else {
        throw new Error('Partida não encontrada');
    }
};

export const deletePartidaService = (id: number): void => {
    partidas = partidas.filter(partida => partida.id !== id);
};
