import { FontAwesome5 } from "@expo/vector-icons";
import React, { Component } from "react";
import {View , Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as WebBrowser from 'expo-web-browser';
import { withRouter } from "../../component/withRouter.js";
import {Get, Post} from '../../utility/request.js';
import { GlobalContextObject } from "../../utility/globalStorage.js";
import { ShowModal } from "../../component/modalComponent.js";

class FavouriteTeam extends Component {
    static contextType = GlobalContextObject; // Connect the context

    constructor(props){
        super(props);
        this.state = {
            teams: [],
            selectedTeam: "",
            selectedLink: "",
            selectedStore: "",
        }
    }

    async componentDidMount(){
        let getCountries = await Get('/api/users/getCountries');
        let getFavTeam = await Post('/api/users/getFavTeam', {email:this.context.globalData.email});
        let favTeam = null;
        let favTeamShop = null;
        let favTeamUrl = null;
        let countries = null;
        console.log(getFavTeam.Message)

        if(getFavTeam.Status && getFavTeam.Message){
            favTeam = getFavTeam.Message.name;
        }
        
        if(getCountries.Status){
            countries = getCountries.Message;
            if(favTeam?.length > 0){
                countries.map((value,key)=>{
                    if(value.name == favTeam){
                        favTeamShop = value.shop;
                        favTeamUrl = value.url;
                    }
                });
                this.setState({
                    teams:[{name:"",url:"",shop:""},...countries],
                    selectedTeam: favTeam,
                    selectedLink: favTeamUrl,
                    selectedStore: favTeamShop
                });
            }else{
                this.setState({
                    teams:[{name:"",url:"",shop:""},...countries]
                });
            }
        }
    }

    updateFavTeam = async () =>{
        try {
            let data = {email:this.context.globalData.email,team:this.state.selectedTeam};
            
            let url = data.team.length > 0 ? '/api/users/addOrUpdateFavTeam' : '/api/users/deleteFavTeamByEmail' 
            let response = await Post(url, data);
    
            if(!response.Status){
                ShowModal({
                    title: 'Failure',
                    message: response.Message 
                  });
            }
        } catch (error) {
            ShowModal({
                title: 'Failure',
                message: error
              });        
        }

    }

    openWebBrowser = async (url) => {
        try {
          await WebBrowser.dismissBrowser();
          const result = await WebBrowser.openBrowserAsync(url);
        } catch (error) {
          console.error('Failed to open browser:', error);
        }
      }
      
    render(){
        return(
           <View style={{marginHorizontal:'5%', marginVertical:'5%'}}>
                <Text style={{fontSize:18,fontWeight:600,marginBottom:'8%'}}>Favourite Team</Text>
                    <Picker
                    selectedValue={this.state.selectedTeam}
                    onValueChange={(itemValue, itemIndex) =>{
                        this.setState({selectedTeam: itemValue.name,
                            selectedLink: itemValue.url,
                            selectedStore: itemValue.shop},()=>{
                                this.updateFavTeam();
                        });
                    }
                    }
                    style={{marginBottom:'8%',backgroundColor:'white'}}
                    >
                    {
                        this.state.teams.map((value,key)=>{
                            let name = value.name?.length > 0 ? `${value.name} Cricket` : '';
                            return <Picker.Item label={name} value={value.name} key={key}  style={{fontSize:14}}/>
                        })
                    }
                  </Picker>
                <TouchableOpacity style={{flexDirection:'row',marginBottom:'8%',backgroundColor:'white',justifyContent:"space-between", padding:10}}
                    onPress={()=> this.openWebBrowser(this.state.selectedLink)}
                >
                    <Text style={{width:'90%'}}>Official Website</Text>
                    <FontAwesome5
                        name="external-link-alt"
                        size={20}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginBottom:'8%',backgroundColor:'white',justifyContent:"space-between", padding:10}}
                    onPress={()=> this.openWebBrowser(this.state.selectedStore)}
                >
                    <Text style={{width:'90%'}}>Official Online store</Text>
                    <FontAwesome5
                        name="external-link-alt"
                        size={20}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginBottom:'8%',backgroundColor:'white',justifyContent:"space-between", padding:10}}
                    onPress={()=> this.openWebBrowser(this.state.selectedLink)}
                >
                    <Text style={{width:'90%'}}>Club Ticketing Information</Text>
                    <FontAwesome5
                        name="external-link-alt"
                        size={20}
                    />
                </TouchableOpacity>

           </View>
        )
    }
}

export default withRouter(FavouriteTeam)
