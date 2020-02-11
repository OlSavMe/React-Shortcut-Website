import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core/';

export default class Nav extends React.Component {
    render() {
        return (

            <AppBar title="My App">
                <Tabs>
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                </Tabs>
            </AppBar>
        )
    }
}
