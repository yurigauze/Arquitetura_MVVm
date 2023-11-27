import React from 'react';
import { View, Text } from 'react-native';

function TelaDetalhesReceita({ route }) {
    const { jogador } = route.params;

    return (
        <View>
            <Text>Nome: {jogador.summonerId}</Text>
            <Text>Rank: {jogador.rank}</Text>
            <Text>Vitórias: {jogador.wins}</Text>
            <Text>Derrotas: {jogador.losses}</Text>
            <Text>Pontos na Liga: {jogador.leaguePoints}</Text>
        </View>
    );
}


export default TelaDetalhesReceita;
