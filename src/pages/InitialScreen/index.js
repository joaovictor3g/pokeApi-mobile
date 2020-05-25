import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function InitialScreen() {
    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState(0);
    const [offset, setOffset] = useState(0);

    const navigation = useNavigation();

    useEffect(() => {
        renderPokemons();
    }, [])

    async function renderPokemons (offset = 0) {
        const response = await api.get(`/pokemon/?offset=${offset}&limit=5`)
    
        setPokemons(response.data.results)
    
        setCount(response.data.count)
    }

    function nextPage (e) {
        e.preventDefault()
    
        if (offset === count) {
          return
        }
    
        setOffset(offset + 5)
    
        renderPokemons(offset + 5)
    }

    // Função de paginação anterior
    function goToPreviousPage (e) {
        e.preventDefault()

        if (offset <= 0) { 
          return 
        }

        setOffset(offset - 5)

        renderPokemons(offset - 5)
    }

    // Primeira letra maiuscula
    function capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    // Funcao pra ver mais detalhes do pokemon.
    function goToDetail(id) {
        navigation.navigate('details', { id }); 
    }

    return (
        <View style={styles.container}>
            <Text 
                style={
                    { fontSize: 30, 
                      textAlign: "center",
                      fontWeight: "bold",
                    }}>Pokedex
            </Text>
            <View style={styles.inputSearch}>
                <TextInput
                    style={styles.searchArea}
                    placeholder="Search a pokemon by name or id"
                />
                <TouchableOpacity>
                <Feather name="search" size={20} color="#FFF" style={{
                    backgroundColor: "#000",
                    padding: 9,
                    
                }}/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {pokemons.map((pokemon, index) => (
                    <View style={styles.pokedex} key={index}>
                        <Text style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#000",
                            padding: 0,
                        
                        }}>{capitalizeFirstLetter(pokemon.name)}</Text>
                        <Text style={styles.pokemonId}>ID:{index+1+offset}</Text>
                        <Image 
                            style={styles.avatar} 
                            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1+offset}.png` }}
                        />                        
                        <TouchableOpacity onPress={()=>goToDetail(index+1+offset)} style={styles.detailsButton}>
                            <Text style={{
                                color: "#FFF"
                            }}>See Details</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                <View style={styles.navigateButtons}>
                    <TouchableOpacity 
                        onPress={goToPreviousPage}
                        style={styles.prevButton}
                    >
                        <Text style={{ 
                            color: "#FFF", 
                            alignItems: "center",
                            padding: 10,
                            textAlign: "center"
                            
                        }}>Previous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={nextPage}
                        style={styles.nextButton}    
                    >
                        <Text style={{ 
                            color: "#FFF", 
                            alignItems: "center",
                            padding: 10,
                            textAlign: "center"
                            
                        }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
