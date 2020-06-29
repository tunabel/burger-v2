import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import classes from './MenuBar.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

class menuBar extends Component {
    render() {
        let displayClass = classes.MenuBar;
        if (!this.props.menuBarIsShown) {
            displayClass = classes.displayNone;
        }
        return (
            <Aux>
                <div className={displayClass}>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Products
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                <Backdrop clicked={this.props.toggleMenuBar} />
            </Aux>
        )
    }
}

export default menuBar;