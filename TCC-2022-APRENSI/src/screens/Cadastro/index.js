import React, { useState } from 'react';
import { View } from 'react-native';
import Styles from './styles';
import { TextInput, Button, Text } from 'react-native-paper';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { api } from '~/services/api';


const Cadastro = ({ navigation }) => {
    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: '',
        nome: '',
    });


    const cadastro = async () => {
        try {
            const response = await api.post('/usuario/criar', credenciais);
            const res = response.data;

            if(res.error) {
                alert(res.message)
                return false
            }
        } catch (err){
            alert("Cadastrado com sucesso")
        }
        navigation.replace('Login')
    }
    return (
        <View style={Styles.bgDark}>
            <View>
                <TextInput
                    mode='flat'
                    label="Nome e sobrenome"
                    style={Styles.marginBottom}
                    value={credenciais.nome}
                    onChangeText={(text) => setCredenciais({ ...credenciais, nome: text })}
                />


                <TextInput
                    mode='flat'
                    label="email ou usuario"
                    style={Styles.marginBottom}
                    value={credenciais.email}
                    onChangeText={(text) => setCredenciais({ ...credenciais, email: text })}
                />


                <TextInput
                    label="senha"
                    style={Styles.marginBottom}
                    secureTextEntry
                    value={credenciais.senha}
                    onChangeText={(text) => setCredenciais({ ...credenciais, senha: text })}
                />

            


                <Button
                    mode="contained"
                    style={Styles.ButtonEntrar}
                    onPress={() => cadastro()}>
                    Cadastrar
                </Button>

                <Text style={Styles.textSmall}>
                    O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.
                </Text>
            </View>

        </View>

    );
};

export default Cadastro;