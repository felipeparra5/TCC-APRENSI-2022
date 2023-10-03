import React, {useState, useEffect} from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import Styles from './styles';
import { TextInput, Button, Text } from 'react-native-paper';

import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { api } from '~/services/api';

const Login = ({ navigation }) => {
    // 0 - carregando, 1 - logado, 2 - deslogado
    const [logged, setLogged] = useState(0)
    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: '',
    });

    const checkLogin = async () => {
        const user = await AsyncStorage.getItem('@user');
        if (user) {
            setLogged(1);
            navigation.replace('Home');
        } else {
            setLogged(2)
        }
    };

    const login = async () => {
        try {
            const response = await api.post('/usuario/login', credenciais);
            const res = response.data;

            if(res.error) {
                alert(res.message)
                return false
            }
            navigation.replace('Home')
        } catch (err){
            alert(err.message)
        }
    }

    useEffect(() => {
        checkLogin();
    }, [])

        return (
            <View style={Styles.bgDark}>

              {logged == 0 && <ActivityIndicator color="#FFF" size='large' />}

              {logged == 2 &&  <View>
                        <TextInput
                        mode ='flat'
                            label="email ou número de telefone"
                            style={Styles.marginBottom}
                            value={credenciais.email}
                            onChangeText={(text) => setCredenciais({ ...credenciais, email: text})}
                            />
                            

                            <TextInput
                            label="senha"
                            style={Styles.marginBottom}
                            secureTextEntry
                            value={credenciais.senha}
                            onChangeText={(text) => setCredenciais({ ...credenciais, senha: text})}
                            />

                        <Button 
                                mode="contained"   
                                style={Styles.ButtonEntrar} 
                                onPress={() => login()}>
                                Entrar
                        </Button>

                        <Button   
                                style={Styles.marginBottom} 
                                //onPress={() => console.log('Pressed')}
                                theme={{colors: {primary:'#fff'}}}
                                onPress={() => 
                                    { navigation.navigate('Cadastro');
                                }}>
                                Criar conta
                        </Button>

                        <Text style={Styles.textSmall}>
                            O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.
                        </Text>
                </View>}
               
            </View>

        );
};

export default Login;