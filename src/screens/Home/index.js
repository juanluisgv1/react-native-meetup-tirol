/**
 * Created by juangv on 18/03/2017.
 *
 * Home screen
 */

import React, {Component} from 'react';
import { ListView } from 'react-native';

//ui elements
import Wrapper from './Wrapper';
import H2 from '../../components/H2';

//Get row element: location thumb
import LocationListItem from '../../components/LocationListItem';

//get mock data
import {data} from './data';

class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
    }

    constructor(props){
        super(props);

        //Define data source for ListView
        //IMPORTANT: ListView will be deprecated against FlatView in v0.43 or v0.44
        //check: https://hackernoon.com/react-native-new-flatlist-component-30db558c7a5b#.u7512ms0p
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    render() {
        return (
            <Wrapper>
                <H2>Locations</H2>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <LocationListItem navigator={this.props.navigation} data={rowData}/>
                    }

                />
            </Wrapper>
        )
    }

}

export default HomeScreen;