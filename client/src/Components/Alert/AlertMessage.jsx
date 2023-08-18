import React from "react";
import Alert from "react-bootstrap/Alert";
import "./AlertMessage.css";



export default class AlertMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            alert: this.props.alert
        }
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidUpdate() {
        if (this.props.alert.date !== this.state.alert.date) {
            this.setState({
                show: true,
                alert: {
                    message: this.props.alert.message,
                    variant: this.props.alert.variant,
                    date: this.props.alert.date
                    }
                });
        }
    }

    handleClose() {
        this.setState({show: false, alert: { message: "", variant: "", date: this.state.alert.date } });
    }

    render() {
        if (this.state.show) {
            return (
                <Alert variant={this.state.alert.variant}  onClose={this.handleClose} dismissible>
                    {this.state.alert.message}
                </Alert>
            )
        }
    }
    

}
