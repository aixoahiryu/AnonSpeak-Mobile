import React, { Component } from 'react';
import { View, TextInput, Keyboard, Platform } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../../src/config/style';
import styles from './styles';

export default class InputModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.keyboardDidShowListener = Keyboard.addListener(
                'keyboardWillShow',
                this._keyboardDidShow
            );
            this.keyboardDidHideListener = Keyboard.addListener(
                'keyboardWillHide',
                this._keyboardDidHide
            );
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'ios') {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }
    }

    _keyboardDidShow = () => {
        this.setState({
            keyboardShown: true
        });
    };

    _keyboardDidHide = () => {
        this.setState({
            keyboardShown: false
        });
    };

    sendPressed(){
        this.props.callbackFromParent(this.state.text);
        this.input1.clear();
    }

    render() {
        return (
            <View
                style={
                    this.state.keyboardShown
                        ? styles.customContainer
                        : styles.container
                }
            >
                
                <TextInput
                    label="Profile"
                    value={this.state.text}
                    style={styles.input}
                    onChangeText={text => this.setState({ text })}
                    underlineColorAndroid="transparent"
                    multiline
                    ref={input => this.input1 = input}
                />
                <TouchableRipple
                    borderless
                    onPress={() => this.sendPressed()}
                    rippleColor="rgba(0, 0, 0, .32)"
                    style={styles.btn}
                >
                    <Icon
                        size={24}
                        color={AppStyles.colors.accentColor}
                        name="search"
                    />
                </TouchableRipple>
            </View>
        );
    }
}
