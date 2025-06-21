import { PlayerStats } from './types';

export function converterPontos(score: number): number {
  if (score < 0) throw new Error("Pontos não podem ser negativos");
  return score * 10;
}

export function processarJogadores(jogadores: PlayerStats[]): PlayerStats[] {
  return jogadores.map(jogador => ({
    ...jogador,
    convertedScore: converterPontos(jogador.score)
  }));
}