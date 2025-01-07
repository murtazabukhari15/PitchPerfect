/** 
 * In order to use this component make sure to import the component:
 * import HrefComponent from '../../component/HrefComponent';
 * Default Setting : <HrefComponent></HrefComponent>
 * Custom Setting : <HrefComponent pressMethod = {fuction} function can be written e.g ()=>this.props.navigate or this.props.navigate
 *                                     text= "your placeholder"
 *                                     txtStyle = {{add css here}}
 *                  ></HrefComponent>
 * You can skip any argument you don't want
 * **/

import React, { Component } from 'react';
import { Pressable, StyleSheet,Text } from 'react-native';

export default class HrefComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressMethod: this.props.pressMethod ?? null,  // Password visibility toggle
            text: this.props.text ?? "",
            txtStyle: (this.props.textStyle != undefined) ? [styles.adjustTop,this.props.textStyle]: [styles.hrefStyle,styles.adjustTop],
            pressedColor: this.props.pressedColor != undefined ? this.props.pressedColor : undefined
        };
    }

    render() {
        return (
            <Pressable onPress={this.state.pressMethod}>
            {({ pressed }) =>{
                let color = pressed ? 
                (this.state.pressedColor != undefined)
                ? this.state.pressedColor :styles.colorRed 
                : 
                (this.state.txtStyle[1].color != undefined) 
                ? this.state.txtStyle[1].color 
                : styles.colorBlue;
                    return <Text style={[this.state.txtStyle , color]}>{this.state.text}</Text>
                }
            }
            </Pressable>
      
        );
    }
}

const styles = StyleSheet.create({
    hrefStyle: {
        textDecorationLine: 'underline',
    },
    adjustTop:{
        top:3,
        marginStart:2
    },
    colorRed:{
        color:'red'
    },
    colorBlue:{
        color:'blue'
    } 

});
