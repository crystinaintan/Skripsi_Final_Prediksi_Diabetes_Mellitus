import React from 'react';
import './MenuBar.css';
import Drawer, { DrawerHeader, DrawerContent, DrawerTitle } from '@material/react-drawer';
import List, { ListItem, ListItemText } from '@material/react-list';
import "@material/react-drawer/dist/drawer.css";
import '@material/react-list/dist/list.css';
import { Link } from 'react-router-dom';


class MenuBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0
            //,
            //hoverItem: ''
        }
    }

    setLocalStorageForMenuBar = (nextProps,nextState) =>{
        localStorage.setItem('menubaritem', JSON.stringify(nextState.selectedIndex));
    }

    componentWillUpdate = (nextProps, nextState) => {
        this.setLocalStorageForMenuBar(nextProps,nextState);
        console.log(this.state.selectedIndex);
        console.log("Component Menubar WILL Update");
    }

    componentWillMount = () =>{
        this.setState({ selectedIndex: JSON.parse(localStorage.getItem('menubaritem'))});
    }

    render() {
        return (
            console.log("menubar render"),
            <div className="menu">
                <Drawer className="drawer">
                    <DrawerContent className= "drawercontent">
                        <List
                            singleSelection
                            selectedIndex={this.state.selectedIndex}
                            handleSelect={(selectedIndex) => this.setState({ selectedIndex })}
                            className="drawercontent"
                        >
                            <ListItem>
                                <Link to="/test_diabetes_mellitus" exact>
                                    <ListItemText id="" className="list_item" primaryText='Deteksi Diabetes'/>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/definisi_diabetes">
                                    <ListItemText id="" className="list_item" primaryText='Diabetes' />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/definisi_diabetes_mellitus">
                                    <ListItemText id="" className="list_item" primaryText='Diabetes Mellitus' />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/definisi_BMI_obesitas">
                                    <ListItemText id="" className="list_item" primaryText='BMI & Obesitas' />
                                </Link>
                            </ListItem>

                        </List>
                    </DrawerContent>
                </Drawer>
            </div>
        );
    }

}

export default MenuBar;