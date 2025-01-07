import React, { Component } from "react";
import {View , Text,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {withRouter} from '../../component/withRouter';
class Stats extends Component {
    constructor(props){
        super(props);
        this.state={
            teams:["Pakistan","South Africa","New Zealand", "West Indies","Australia"]
        }
    }
    render(){
        return(
            <ScrollView>
                <Text style={{textAlign:'center',fontSize:20,fontWeight:700,marginTop:'6%'}}>Player Statistics</Text>
                    <View style={{marginHorizontal:'6%',marginTop:'6%'}}>
                        <Text style={{fontSize:16,fontWeight:500,marginBottom:'5%'}}>Countries:</Text>
                        {
                            this.state.teams.map((value,key)=>{
                                return  <TouchableOpacity key={key} style={styles.card}
                                            onPress={()=>this.props.router.navigate("/home/teamStatComponent")}
                                        >
                                            <Text style={{textAlign:'center'}}>{value}</Text>
                                        </TouchableOpacity>
                            })
                        }
                    </View>
            </ScrollView>
        )
    }
}
export default withRouter(Stats)

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    }
});
