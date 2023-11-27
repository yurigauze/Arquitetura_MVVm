import React, { useState } from 'react';
import { View, Text, Button, FlatList,  } from 'react-native';
import ViewModelLista from '../src/viewmodel/ViewModelLista';

function TelaInicial({ navigation }) {
    const [jogadores, setJogadores] = useState([]);

    const buscarJogadores = async () => {
        try {
            const novosjogadores = await ViewModelLista.buscarJogadoresPorFila();
            console.log('Dados dos jogadores:', novosjogadores);
            setJogadores(novosjogadores);
        } catch (error) {
            console.error('Erro ao buscar jogadores:', error);
        }
    };

    return (
        <View>
            <Text>Jogadores</Text>

            <Button title="Buscar jogadores" onPress={buscarJogadores} />
            <FlatList
                data={jogadores}
                keyExtractor={(item) => item.summonerId}
                renderItem={({ item }) => (
                    <Button
                        title={item.summonerId}
                        onPress={() => navigation.navigate('DetalhesReceita', { jogador: item })}
                    />
                )}
            />

        </View>
    );
}

export default TelaInicial;
