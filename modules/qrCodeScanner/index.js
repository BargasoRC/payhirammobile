import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Linking
} from 'react-native';
import { BasicStyles, Color } from 'common'
import QRCodeScanner from 'react-native-qrcode-scanner';


class Scanner extends Component {

    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                showMarker
                topViewStyle={{ height: 10, maxHeight: 10 }}
                bottomContent={
                    <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingTop: "40%", paddingBottom: "20%" }}>
                        <TouchableOpacity
                            onPress={()=>{
                                this.props.navigation.pop()
                            }}
                            style={[BasicStyles.btn, BasicStyles.btnSecondary]}
                            underlayColor={Color.gray}>
                            <Text style={BasicStyles.textWhite}>
                                Go Back
                        </Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        );
    }
}

export default Scanner;