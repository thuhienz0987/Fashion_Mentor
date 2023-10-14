import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import color from '../constants/color';
// import FONT_FAMILY from '../../constants/fonts';
import scale from '../constants/responsive';
import { ActivityIndicator } from 'react-native-paper';
import UnderLine from './underLineSwitch';

const MessageYN = (props) => {
    // take in visible(state), title, message, click cancel, setMsg
    const closePopUp = (bool) => {
        props.clickCancel();
        props.setMsg(bool);
    }
    
    return (
        <Modal transparent visible={props.visible}>
            <View style={styles.background}>
                <View style={styles.noticeBox}>
                    <UnderLine text={props.title} textStyle={styles.titleText} style={{color: color.Black}} lineColor={{backgroundColor: color.Black}}></UnderLine>
                    <View style={styles.noticeMessage}>
                        <View style={{width: '100%', height: '65%',alignItems:'center',marginTop: scale(-10), justifyContent:'center'}}>
                            <Text style={styles.messageText} numberOfLines={5}>{props.message}</Text>
                        </View>
                        {props.status === 'new'?(
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TouchableOpacity
                                    style={styles.buttonPosition}
                                    onPress={props.clickYes}>
                                    <View style={styles.buttonBox}>
                                        <Text style={styles.buttonText}>{props.buttonText?props.buttonText:"Yes"}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonPosition}
                                    onPress={props.clickNo}>
                                    <View style={[styles.buttonBox, {backgroundColor: color.white, borderColor: color.Black, borderWidth: 1}]}>
                                        <Text style={[styles.buttonText,{color: color.Black}]}>{props.buttonText?props.buttonText:"No"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ):null}
                        {props.status === 'done'?(
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity
                                    style={styles.buttonPositionBig}
                                    onPress={props.clickCancel}>
                                    <View style={styles.buttonBox}>
                                        <Text style={styles.buttonText}>{props.buttonText?props.buttonText:"OK"}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ):null}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default MessageYN;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noticeBox: {
        width: scale(343),
        height: scale(246),
        backgroundColor: color.white,
        overflow: 'hidden',
    },
      noticeTitle: {
        alignItems:'center',
        width: '100%',
        paddingHorizontal: scale(30),
        height: scale(66),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleText: {
        color: color.Black,
        // fontFamily: FONT_FAMILY.Bold,
        fontWeight:'700',
        fontSize: scale(20),
    },
    noticeMessage: {
        flex: 1,
        padding: scale(20),
    },
    messageText: {
        textAlign:"center",
        color: color.Black,
        // fontFamily: FONT_FAMILY.Regular,
        fontWeight: '400',
        fontSize: scale(18),
    },
    buttonPosition: {
        width: '45%',
        alignSelf: 'center',
      },
    buttonBox: {
        backgroundColor: color.Black,
        height: scale(53),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: color.white,
        // fontFamily: FONT_FAMILY.Regular,
        fontWeight: '400',
        fontSize: scale(16),
    },
    buttonPositionBig: {
        width: '80%',
        marginTop: scale(20),
        alignSelf: 'center',
      },
});
