import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Color, BasicStyles } from 'common';
import Config from 'src/config.js';
class UserImage extends Component{
  
  constructor(props){
    super(props);
  }

  render () {
    const { user } = this.props;
    return (
      <View>
        {
          (user?.profile != null && user?.profile?.url != null) && (
            <Image
              source={{uri: Config.BACKEND_URL  + user.profile.url}}
              resizeMode={'cover'}
              style={[BasicStyles.profileImageSize, this.props.style]}/>
          )
        }
        {
          (user?.profile == null || (user?.profile != null && user?.profile?.url == null)) && (
            <FontAwesomeIcon
              icon={faUserCircle}
              size={35}
              style={{
                color: this.props.color ? this.props.color : Color.primary,
                borderColor: this.props.borderColor ? this.props.borderColor : Color.white,
                borderWidth: this.props.borderWidth ? this.props.borderWidth : 1,
                borderRadius: this.props.borderRadius ? this.props.borderRadius : 50,
                marginLeft: this.props.marginLeft ? this.props.marginLeft : 3
              }}
            />
          )
        }
      </View>
    );
  }
}

export default UserImage;