import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';
import Interrogacao from '../../assets/interrogacao.png';

export default function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    const [pokemons, setPokemons] = useState([]);
    const [name, setName] = useState('');
    const [pokemonImage, setPokemonImage] = useState('');
    const [types, setTypes] = useState([]);
    const [shinyFront, setShinyFront] = useState('');
    const [shinyBack, setShinyBack] = useState(''); 
    const [weight, setWeight] = useState(0);


    const id = route.params.id;

    useEffect(() => {
        getInfos();
    }, []);

    async function getInfos() {
        const response = await api.get(`/pokemon/${id}`);

        setName(response.data.name);
        setPokemonImage(response.data.sprites.front_default);
        setShinyFront(response.data.sprites.front_shiny);
        setShinyBack(response.data.sprites.back_shiny);
        setTypes(response.data.types);
        setPokemons(response.data);
        setWeight(response.data.weight);
    }

    // Vai pra rota anterior
    function backHome() {
        navigation.goBack();
    }

    // Primeira letra maiuscula
    function capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    return (
        <>
        <StatusBar barStyle="light-content"/>
        <View style={styles.container}>
            <TouchableOpacity onPress={backHome}>
                <Feather name="arrow-left" size={30} color="#FFF" />
            </TouchableOpacity>

            <View style={styles.infos}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: "bold",
                    color:"#00ffff",
                    backgroundColor: "#000",
                    
                    
                }}>{capitalizeFirstLetter(name)}</Text>

                <View style={{ alignItems: "center" }}>
                    <Image source={ pokemonImage ? { uri: pokemonImage }:Interrogacao} alt="poke" style={styles.avatar}/>
                </View>
                <View style={{
                    flexDirection: "row",
                    textAlign: "center",
                    justifyContent: "center",
                    borderRadius: 5,
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
                        >{capitalizeFirstLetter(type.type.name)}</Text>
                    ))}
                </View>

                <View style={{
                    marginTop: 10
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "bold",
                        color:"#FFF",
                        backgroundColor: "#000",
                    }}>Shiny version</Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Image source={shinyFront?{ uri: shinyFront }: Interrogacao} alt="Shiny front" style={styles.avatar}/>
                    <Image source={shinyBack? { uri: shinyBack  }: Interrogacao} alt="Shiny back" style={styles.avatar} />
                </View>

                <View style={{
                    marginTop: 10,
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "bold",
                        color:"#FFF",
                        backgroundColor: "#000",
                    }}>Informations</Text>

                    <Text style={{
                        padding: 10,
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>Pokedex number: {id}</Text>
                    <Text style={{
                        padding: 10,
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>Weight: {weight/10} kg</Text>
                </View>
            </View>
        
        </View>
        </>
    )
}
