import React, { Component } from "react";
import {View , Text, SafeAreaView} from 'react-native';

class About extends Component {
    render(){
        return(
            <SafeAreaView >
                <View style={{marginHorizontal:'5%',marginVertical:'5%'}}>
                    <Text style={{fontSize:18,fontWeight:700,marginBottom:'10%'}}>About</Text>
                    
                    <View style={{width:'100%',backgroundColor:'white',padding:10}}>
                        <Text style={{fontWeight:600,marginBottom:10}}>Overview</Text>
                        <Text style={{fontSize:10}}>Our fantasy cricket game, Pitch Perfect, is designed to give cricket enthusiasts the chance to engage with the sport in a whole new way. Players can create their own teams by selecting real-life cricketers, earn points based on the performance of these players in actual matches, and compete against others in exciting tournaments. The game combines strategy, knowledge of the sport, and a love for cricket, allowing fans to experience the thrill of managing a team and gaining rewards for their predictions and choices.</Text>
                    </View>                               

                    <View style={{width:'100%',backgroundColor:'white',padding:10,marginTop:'10%'}}>
                        <Text style={{fontWeight:600,marginBottom:10}}>Governance</Text>
                        <Text style={{fontSize:10}}>Pitch Perfect operates with a transparent governance model to ensure fairness and integrity in all aspects of the game. We aim to maintain a safe, competitive, and enjoyable environment for all users. Our governance structure includes clear rules and regulations for gameplay, team creation, point calculation, and prize distribution. We are committed to upholding the highest standards of conduct, transparency, and fairness. All user data is handled with the utmost privacy and security.</Text>
                    </View>                

                    <View style={{width:'100%',backgroundColor:'white',padding:10,marginTop:'10%'}}>
                        <Text style={{fontWeight:600,marginBottom:10}}>Statement of Principle</Text>
                        <Text style={{fontSize:10}}>At Pitch Perfect, we believe in: {"\n"}
                                • Fair Play: We ensure that all players have equal opportunities, and our algorithms are designed to be unbiased and transparent.{"\n"}
                                • Engagement: We strive to provide a fun and interactive experience for cricket fans, keeping the gameplay engaging and dynamic. {"\n"}
                                • Respect: We respect the players, fans, and cricket as a sport. We encourage a community of mutual respect and friendly competition. {"\n"}
                                • Innovation: We continuously innovate to enhance the gaming experience, ensuring that our platform evolves alongside the cricketing world.</Text>
                    </View> 
                </View>

            </SafeAreaView>
        )
    }
}
export default About
