import { FontAwesome5 } from '@expo/vector-icons';
import { Href, RelativePathString, useRouter } from 'expo-router';
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  const headerOption = {
    headerShown:true,
    title:'', 
    headerRight: (isHomePage: boolean) => (
        <View style={{flexDirection:'row'}}>
          {isHomePage && <TouchableOpacity onPress={()=>{
              router.dismissAll();
            }}
            style={{ alignSelf:'center' }}
            >
            <FontAwesome5
              name="sign-out-alt"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          }
          <FontAwesome5
            name="bell"
            size={24}
            color="blue"
            style={{ marginLeft: 10,alignSelf:'center',marginRight:10 }}
          />
          <TouchableOpacity onPress={()=>{
            router.navigate("/home/aboutScreen");
          }}>
            <Image source={require('../../assets/images/avator.png')} style={{marginEnd:15,width:46,height:47}}></Image>
          </TouchableOpacity>
        </View>
    ),
    headerLeft: (isHomePage: boolean,backIconUrl:Href) => (
          isHomePage ? 
          <Image
          source={require('../../assets/images/logoWhiteBackground.png')} // Replace with your company logo URL
          style={{ width: 90, marginLeft: 10 }}
          resizeMode="contain"
        /> :  <TouchableOpacity onPress={()=>router.replace(backIconUrl)}
              style={{ marginStart:15,justifyContent:'center'}}
              >
                <FontAwesome5
                  name="long-arrow-alt-left"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
          
    ), 
    }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#FD7702',
                           tabBarActiveBackgroundColor:'white',
                           tabBarInactiveBackgroundColor:'#FD7702',
                           tabBarInactiveTintColor:'white',
                           headerStyle:styles.tabBarStyleColor,
                           headerShown:true,
                           title:'',
                           tabBarStyle:''}}>
      <Tabs.Screen name="homeScreen" options={{tabBarIcon:(prop)=><View style={{alignItems:'center'}}>
        <FontAwesome5
            name="home"
            size={24}
            color={prop.color}
          />
          
      </View>
      ,tabBarLabel: (prop)=> <Text style={{color:prop.color,fontSize:10}}>Home</Text>
      ,headerLeft:() => headerOption.headerLeft(true,"/home/homeScreen")
      ,headerRight:() => headerOption.headerRight(true)
      ,tabBarStyle:styles.tabBarStyleColor}} />

      <Tabs.Screen name="statsScreen" options={{
      tabBarIcon:(prop)=><View style={{alignItems:'center'}}>
        <Image
              source={require('../../assets/images/statsToolBar.png')} tintColor={prop.color}
          />
        </View>
      ,tabBarLabel: (prop)=> <Text style={{color:prop.color,fontSize:10}}>Stat</Text>
      ,headerLeft: ()=> headerOption.headerLeft(false,"/home/homeScreen")
      ,headerRight: ()=> headerOption.headerRight(false)
      ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
      ,headerTitleAlign:'center'
      ,tabBarStyle:styles.tabBarStyleColor}} />

      <Tabs.Screen name="favouriteScreen" options={{tabBarIcon:(prop)=><View style={{alignItems:'center'}}>
        <Image
              source={require('../../assets/images/fantasyToolBar.png')} tintColor={prop.color}
          />
        </View>
      ,tabBarLabel: (prop)=> <Text style={{color:prop.color,fontSize:10}}>FAV TEAM</Text>
      ,headerLeft: ()=> headerOption.headerLeft(false,"/home/homeScreen")
      ,headerRight: ()=> headerOption.headerRight(false)
      ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
      ,headerTitleAlign:'center'
      ,tabBarStyle:styles.tabBarStyleColor}} />

      <Tabs.Screen name="settingScreen" options={{
        tabBarIcon:(prop)=><View style={{alignItems:'center'}}>
      <Image
            source={require('../../assets/images/settingToolBar.png')} tintColor={prop.color}
        />
      </View>
      ,tabBarLabel: (prop)=> <Text style={{color:prop.color,fontSize:10}}>Setting</Text>      
      ,headerLeft: ()=> headerOption.headerLeft(false,"/home/homeScreen")
      ,headerRight: ()=> headerOption.headerRight(false)
      ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
      ,headerTitleAlign:'center'
      ,tabBarStyle:styles.tabBarStyleColor}} /> 
      
      <Tabs.Screen name="aboutScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/homeScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="playerStatComponent" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/teamStatComponent")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="teamStatComponent" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/statsScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />
      <Tabs.Screen name="updateEmail" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/settingScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="updatePassword" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/settingScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="updatePersonalDetails" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/settingScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />


    <Tabs.Screen name="news/newsScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/homeScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="news/blogScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/news/newsScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="news/headlineScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/news/newsScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="news/videoScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/news/newsScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />


      <Tabs.Screen name="fixtures/fixtureScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/homeScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      
     <Tabs.Screen name="fixtures/leaguesScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fixtures/fixtureScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      
     <Tabs.Screen name="fixtures/seriesScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fixtures/fixtureScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      
     <Tabs.Screen name="fixtures/tournamentScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fixtures/fixtureScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />
      
      <Tabs.Screen name="fantasy/fantasyScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/homeScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="fantasy/ongoingFantasyScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fantasy/fantasyScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />
       
      <Tabs.Screen name="fantasy/createNewScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fantasy/fantasyScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />
                   
      <Tabs.Screen name="fantasy/teamCreatedScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fantasy/ongoingFantasyScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />
                 
      <Tabs.Screen name="fantasy/editTeamScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fantasy/groundTeamScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />     

                 
      <Tabs.Screen name="fantasy/groundTeamScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fantasy/createNewScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      /> 

      <Tabs.Screen name="fantasy/teamPointScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fantasy/teamCreatedScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />
      
      <Tabs.Screen name="fantasy/groundPointTeamScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fantasy/teamPointScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />

      <Tabs.Screen name="fantasy/createPrivateLeagueScreen" options={{
        tabBarButton:()=>null
        ,headerLeft: ()=> headerOption.headerLeft(false,"/home/fantasy/ongoingFantasyScreen")
        ,headerRight: ()=> headerOption.headerRight(false)
        ,headerTitle:() => <Image source={require("../../assets/images/headerCenterLogo.png")}></Image>
        ,headerTitleAlign:'center'
        ,tabBarItemStyle:{display:'none'}
        }} 
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBarStyleColor:{
    backgroundColor:'#FD7702'
  }
});