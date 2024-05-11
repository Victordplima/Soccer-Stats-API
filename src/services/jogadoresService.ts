import { Jogador } from '../models/Jogador';

let jogadores: Jogador[] = [
    { id: 1, nome: 'Endou Mamoru', timeId: 1 },
    { id: 2, nome: 'Gouenji Shuuya', timeId: 2 },
    { id: 3, nome: 'Kidou Yuuto', timeId: 3 }
];

export const getJogadoresService = (): Jogador[] => {
    return jogadores;
};

export const addJogadorService = (novoJogador: Jogador): void => {
    jogadores.push(novoJogador);
};

export const updateJogadorService = (id: number, jogadorData: Jogador): Jogador => {
    const jogadorIndex = jogadores.findIndex(jogador => jogador.id === id);

    if (jogadorIndex !== -1) {
        const updatedJogador: Jogador = { ...jogadores[jogadorIndex], ...jogadorData };
        jogadores[jogadorIndex] = updatedJogador;
        return updatedJogador;
    } else {
        throw new Error('Jogador não encontrado');
    }
};

export const deleteJogadorService = (id: number): void => {
    jogadores = jogadores.filter(jogador => jogador.id !== id);
};
