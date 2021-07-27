import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Linking} from 'react-native';
import config from "./config.json";
import { Switch } from 'react-native-switch';

export default class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        
            <View style={styles.topView}>

            </View>
       
            <View style={styles.middleView}>
                <Text style={styles.BoldText}>
                    {/* 어플리케이션 안내 및 알람 수신 방법 */}
                    {config.kor.sub_page5_t1}
                </Text>
                <Text>
                    {config.kor.sub_page5_t1_t1}
                </Text>
                <Text>
                    {config.kor.sub_page5_t1_t2}
                </Text>
            </View>
            
            <View style={styles.bottomView}>
                <Text style={styles.BoldText}>
                    {/* 이용방법 문의 */}
                    {config.kor.sub_page4_t1}
                </Text>
                    {/* 원생게시판 */}
                <TouchableOpacity
                style={styles.moveButton}
                onPress={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/')}}>
                <Text>
                {config.kor.sub_page4_b1}
                </Text>
                </TouchableOpacity>
                <Text style={styles.smallText}>
                    {config.kor.sub_page4_b1_t}
                </Text>
                    {/* 비원생게시판 */}
                <TouchableOpacity
                style={styles.moveButton}
                onPress={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/')}}>
                <Text>
                {config.kor.sub_page4_b2}
                </Text>
                </TouchableOpacity>
                <Text style={styles.smallText}>
                {config.kor.sub_page4_b2_t}
                </Text>
                    {/* 생활관전화문의 */}
                <TouchableOpacity
                style={styles.moveButton}
                onPress={ ()=>{ Linking.openURL(`tel:0515107827`)}}>
                <Text>
                {config.kor.sub_page4_b3}
                </Text>
                </TouchableOpacity>
                <Text style={styles.smallText}>
                {config.kor.sub_page4_b3_t}
                </Text>
            </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topView: {
      flex: 1,
    },
    middleView: {
      flex:8,
      padding:8,
      margin:6
    },
    bottomView: {
        flex:32,
    },
    moveButton:{
        backgroundColor: '#4B89DC',
        height: 50,
        width: 370,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    smallText:{
        fontSize:14,
        padding:8,
        marginLeft:5,
    },
    BoldText:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:13,
    }
});