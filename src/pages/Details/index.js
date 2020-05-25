import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';

export default function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    const [pokemons, setPokemons] = useState([]);
    const [name, setName] = useState('');
    const [pokemonImage, setPokemonImage] = useState('');
    const [types, setTypes] = useState([]);
    const [styler, setStyler] = useState(styles.fire);

    const id = route.params.id;

    useEffect(() => {
        getInfos();
    }, []);

    async function getInfos() {
        const response = await api.get(`/pokemon/${id}`);

        setName(response.data.name);
        setPokemonImage(response.data.sprites.front_default);
        setTypes(response.data.types)

        setPokemons(response.data);
    }

    // Vai pra rota anterior
    function backHome() {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={backHome}>
                <Feather name="arrow-left" size={30} color="#FFF" />
            </TouchableOpacity>

            <View style={styles.infos}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: "bold",
                    color:"#FFF",
                    backgroundColor: "#000",
                    
                    
                }}>{name}</Text>

                <View style={{ alignItems: "center" }}>
                    <Image source={{ uri: pokemonImage }} alt="poke" style={styles.avatar}/>
                </View>
                <View style={{
                    flexDirection: "row",
                    textAlign: "center",
                    justifyContent: "center"
                }}>
                    {types.map((type, index) => (
                        <Text 
                            key={index}
                            style={
                                type.type.name==='fire' ? {
                                    backgroundColor: "#ff8000",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='poison'? {
                                    backgroundColor: "#730099",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='grass'? {
                                    backgroundColor: "#00e600",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='psychic'? {
                                    backgroundColor: "#d24dff",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='ice'?{
                                    backgroundColor: "#80e5ff",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='flying'? {
                                    backgroundColor: "#1affff",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='normal' ? {
                                    backgroundColor:"#a3a375",
                                    color: "#FFF",            
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                                        
                                }:type.type.name==='water' ? {
                                    backgroundColor:"#0099ff",
                                    color: "#FFF",            
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                                       
                                }:type.type.name==='dark' ? {
                                    backgroundColor:"#003366",
                                    color: "#FFF",            
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                                       
                                }:type.type.name==='rock' ? {
                                    backgroundColor: "#b37700",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='bug' ? {
                                    backgroundColor: "#333300",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='electric' ? {
                                    backgroundColor: "#ffff33",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='fairy' ? {
                                    backgroundColor: "#ff4d88",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='fighting' ? {
                                    backgroundColor: "#ff3300",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='dragon' ? {
                                    backgroundColor: "#008fb3",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='ghost' ? {
                                    backgroundColor: "#000080",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='ground' ?{
                                    backgroundColor: "#4d2600",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }:type.type.name==='steel'?{
                                    backgroundColor: "#33ff99",
                                    color: "#FFF",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: 100,
                                    fontSize: 20,
                                    
                                }: null}
                        >{type.type.name}</Text>
                    ))}
                </View>
            </View>
        </View>
    )
}
