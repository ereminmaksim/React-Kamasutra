import React from "react";
import style from "./Status.module.css"

class Status extends React.Component {
    //ТАК РАБОТАЕТ REF!!!
    // statusInputRef = React.createRef()

    state = {
        editMode: false,
        status: this.props.status
    }
    /**
     *для СОБЕСА
     * console.log(this.state.editMode)
     * this.forceUpdate()
     * console.log(this.state.editMode)
     * setState-АСИНХРОНЕН!!!
     */
    /******************************************************/
    // this.state.editMode = true;
    //КРУТАЯ ФИЧА, НО ИСПОЛЬЗУЕТСЯ В КРАЙНИХ СЛУЧАЯХ
    // this.forceUpdate()
    //  console.log(this.state.editMode)
    activateDoubleClick = () => {
        this.setState({
            editMode: true
        })
    }
    deactivationDoubleClick = () => {
        this.setState({
            editMode: false
        })
        //ТАК РАБОТАЕТ REF!!!
        // this.props.updateStatus(this.statusInputRef.current.value)
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    handleFocus = (event) => {
        event.target.select();
    }

    //КОМПОНЕНТА ЖИЗНЕННОГО ЦИКЛА componentDidUpdate
    /*
    componentDidUpdate(prevProps, prevState){
    let a = this.props
    let b = this.state
    console.log(`this.props = ${a}  this.state = ${b}`)
    console.log('componentDidUpdate')
     */

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !==this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div className={style.statusBar}>
                    <span onDoubleClick={this.activateDoubleClick}>
                        {this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div className={style.statusBar}>
                    <input
                        //ТАК РАБОТАЕТ REF!!!
                        // ref={this.statusInputRef}
                        onChange={this.onStatusChange}
                        onFocus={this.handleFocus}
                        autoFocus={true} onBlur={this.deactivationDoubleClick}
                        value={this.state.status}
                    />
                </div>
                }
            </div>

        )
    }
}

export default Status;