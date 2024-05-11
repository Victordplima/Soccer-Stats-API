export interface Partida {
    id: number;
    date: string;
    teams: [string, string];
    result?: [number, number];
}
