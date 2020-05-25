import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

export default function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    const [pokemons, setPokemons] = useState([]);
    const [name, setName] = useState('');

    const id = route.params.id;

    useEffect(() => {
        getInfos();
    }, []);

    async function getInfos() {
        const response = await api.get(`/pokemon/${id}`);

        setName(response.data.name);

        setPokemons(response.data);
    }

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}
