import axios from 'axios';

import ModeloJogador from '../model/ModeloJogador';


class ViewModelLista {
    async buscarJogadoresPorFila() {
        try {
            const resposta = await axios.get(
                `https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-eda300e4-d721-4697-8507-b646c8bfc8f4`
            );

            if (resposta.data && resposta.data.entries) {
                const jogadores = resposta.data.entries.map((jogador) => {
                    return new ModeloJogador(
                        jogador.summonerName,
                        jogador.rank,
                        jogador.wins,
                        jogador.losses,
                        jogador.leaguePoints
                    );
                });

                return jogadores;
            } else {
                console.error('Dados de jogadores não encontrados na resposta.');
                return [];
            }
        } catch (erro) {
            console.error('Erro ao buscar jogadores:', erro);
            return [];
        }
    }
}


export default new ViewModelLista();
