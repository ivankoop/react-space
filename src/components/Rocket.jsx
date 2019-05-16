/**
 * @author Ivan Koop
 * @email ivankoop3@gmail.com
 * @create date 2019-05-16 13:22:06
 * @modify date 2019-05-16 13:22:06
 */

import React, {Component, Fragment} from "react";

class Rocket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            yPos: -30,
            inSpace: false,
        };
    }
    render() {
        const {yPos, inSpace} = this.state;
        const {xPos} = this.props;
        return (
            <Fragment>
                {!inSpace && (
                    <img
                        className="rocket"
                        style={{bottom: yPos, left: xPos}}
                        onClick={this.handleLaunch}
                        src="assets/images/rocket.png"
                        alt="Rocket"
                    />
                )}
            </Fragment>
        );
    }

    handleLaunch = e => {
        e.preventDefault();

        const {speed} = this.props;

        const interval = setInterval(() => {
            this.setState(prevState => ({
                yPos: prevState.yPos + speed,
            }));

            const {yPos} = this.state;

            if (yPos > 810) {
                clearInterval(interval);
                this.setState({inSpace: true});
            }
        }, 200);
    };
}

export default Rocket;
