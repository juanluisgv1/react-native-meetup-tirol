/**
 * Created by juangv on 18/03/2017.
 */
import React, {Component} from 'react';
import {View, ListView} from 'react-native';


class List extends Component {
    constructor(props){
        super(props);

        //define data source
        //IMPORTANT: ListView will be deprecated against FlatView in v0.43 or v0.44
        //check: https://hackernoon.com/react-native-new-flatlist-component-30db558c7a5b#.u7512ms0p
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.dataSource),
        };
    }

    render(){
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.props.renderRow(rowData) }
                />
            </View>
        );
    }
}

//default prop types
List.propTypes = {
    dataSource: React.PropTypes.array,
};

export default List;
