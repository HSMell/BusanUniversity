/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text, View, Image, TextInput, ImageBackground,TouchableOpacity, WebView, Linking} from 'react-native';
 import config from "./config.json";


 export default class App extends React.Component {
   render() {
     return (
      <View style={styles.container}>
      <ImageBackground 
        style={{ width: "100%", height: "100%", position: 'absolute' }}  //View를 꽉채우도록
          source={require('./icon/main_bg2.png')}  //이미지경로
          resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
          >
      </ImageBackground>
        <View style={styles.TopView}>
 
        </View>
 
        <View style={styles.Top2View}>
        <Image 
         style={{ width: "70%", height: "100%", resizeMode:'contain'}}
        source={require('./icon/main_logo.png')}/>
        </View>
 
        <View style={styles.buttonAlign}>
        <TouchableOpacity
            onPress={ ()=>{ this.props.navigation.navigate('NOTI')}}
            style={styles.firstButtonList}>
            <Image
             style={styles.iconImage}
            source={require('./icon/icon1.png')}/>
        <Text style={{ marginLeft: 20}}>
        {config.kor.main_title1}
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.firstButtonList}
          onPress={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601')}}>
            <Image
            style={styles.iconImage}
            source={require('./icon/icon2.png')}
            />
        <Text style={styles.iconImage}>
          {config.kor.main_title3}
        </Text>
        </TouchableOpacity>
        </View>
 
        <View style={styles.buttonAlign}>
        <TouchableOpacity 
            style={styles.secondButtonList} 
            onPress={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403')}}>
            <Image
            style={{ width: 70, height: 100, resizeMode:'contain'}}
            source={require('./icon/icon3.png')}/>
        <Text style={{ marginLeft: 10}}>
          {config.kor.main_title2}
        </Text>   
        </TouchableOpacity>
                    
        <TouchableOpacity 
            style={styles.secondButtonList} 
             onPress={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list03/20000602')}}>
            <Image
            style={{ width: 100, height: 100, resizeMode:'contain'}}
            source={require('./icon/icon4.png')}/>
          <Text style={{ marginLeft: 23}}>
          {config.kor.main_title4}
          </Text>   
        </TouchableOpacity>
 
 

        <TouchableOpacity
            style={styles.secondButtonList}
            onPress={ ()=>{ this.props.navigation.navigate('DETAIL')}}>
            <Image
            style={{ width: 70, height: 90, resizeMode:'contain'}}
            source={require('./icon/icon5.png')}/>
          <Text style={{ marginLeft: 10}}>
          {config.kor.main_title5}
          </Text>   
        </TouchableOpacity>
        </View>
 
        <View style={styles.Bottom2View}>
          </View>
      </View>
    );
  }
 }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopView: {
    flex: 1,
  },
  Top2View: {
    height:300,
    width:'100%',
    resizeMode:'contain',
    alignItems: "center",
    flex: 3
  },
  Bottom2View: {
    flex: 3,
    
  },
  settingView: {
    flex: 1,
    backgroundColor: 'red'
  },
  ddayView: {
    alignItems: "center"
    
  },
  buttonAlign:{
    flexDirection: 'row'
  },
  firstButtonList:{
    backgroundColor: 'rgb(255,255,255)',
    height: 170,
    width: 190,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  iconImage:{
    width:60,
    height:70
  },
  secondButtonList:{
    backgroundColor: 'rgb(255,255,255)',
    height: 170,
    width: 120,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    margin: 6
  }
 });
 