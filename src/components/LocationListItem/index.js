/**
 * Created by juangv on 18/03/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

//import Wrapper
import Wrapper from './Wrapper';


class LocationListItem extends Component {

    render(){
        const { navigate } = this.props.navigator;
        return (
          <Wrapper onPress={() => navigate('LocationProfile')}>
              <View>
                  <Text>{this.props.data.location.name}</Text>
                  <Text>{this.props.data.distance} km</Text>
              </View>
          </Wrapper>
        );
    }

}

export default LocationListItem;
