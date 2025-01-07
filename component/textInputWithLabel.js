/** 
 * In order to use this component make sure to import the component:
 * import TextInputWithLabel from '../../component/TextInputWithLabel';
 * Default Setting : <TextInputWithLabel></TextInputWithLabel>
 * Custom Setting : <TextInputWithLabel imageLocation = {require("")}
 *                                     placeholder= "your placeholder"
 *                                     additionalStyle = {{add css here}}
 *                                     imageBtnStyle = {{add css here}}
 *                                     inputTextStyle = {{add css here}}
 *                                     ref = {{ref variable in order to get pass textinput use }}
 *                                     label = "e.g Email , Password"
 *                  ></TextInputWithLabel>
 *  In order to get value please use  {ref variable}.current.state.password 
 * You can skip any argument you don't want
 * **/

import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';

export default class TextInputWithLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label:this.props.label ?? "",
            isSecure: this.props.isSecure ?? false,  // Password visibility toggle
            hasImage: this.props.hasImage ?? false,
            imageLocation: this.props.imageLoc ?? require('../assets/images/Eye.png'), // Set image if you need to change it to anyother picture
            imageBtnStyle: this.props.imgBtnStyle ?? styles.eyeIcon, // Set image style
            input: "",
            placeholder: this.props.placeholder ?? "", // Set Placeholder text.
            inputTextStyle : (this.props.additionalStyle  != undefined) ? 
                                                                        (this.props.inputTextStyle != undefined)
                                                                             ? [this.props.inputTextStyle, this.props.additionalStyle]
                                                                             : [styles.inputContainer, this.props.additionalStyle] 
                                                                        :
                                                                        (this.props.inputTextStyle != undefined) ? this.props.inputTextStyle: styles.inputContainer
        };
    }

    toggleInputVisibility = () => {
        this.setState({ isSecure: !this.state.isSecure });
    };

    changeText = (text) => this.setState({ input: text });

    render() {
        const { input, isSecure } = this.state;
        return (
          <View style={styles.mainContainer}>
                {
                  (this.state.label.length > 0) ? <Text style={{color:'grey'}}>{this.state.label}</Text> : null
                }
             <View style={this.state.inputTextStyle}>
                 <TextInput
                     style={styles.input}
                     placeholder={this.state.placeholder}
                     secureTextEntry={isSecure}  // Hide input unless toggle is active
                     value={input}
                     onChangeText={this.props.changeText ?? this.changeText}
                     />
                  {
                    this.state.hasImage &&
                    <TouchableOpacity
                    style={this.state.imageBtnStyle}
                    onPress={this.props.pressFunc ?? this.toggleInputVisibility}
                    >
                      <Image source={this.state.imageLocation} />
                    </TouchableOpacity> 
                  }
             </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  mainContainer:{
    marginHorizontal:20,
    marginBottom:15
  },
  inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginTop:5
    },
    input: {
        width:'88%',
        alignItems:'flex-start',
        fontSize: 16,     
        padding:13
    },
    eyeIcon: {
        alignItems:'flex-end',
        padding: 5
    }
});