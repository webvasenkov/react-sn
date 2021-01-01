import React from "react";
import style from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onEditChange = () => {
        this.setState({
            editMode: true
        })
    }

    onCloseEditChange = () => {
        this.setState({
            editMode: false
        })

        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className={style.about}>
                <h3 className={style.aboutTitle}>My mood</h3>
                {this.state.editMode ?
                    <form className={style.editDesc}>
                        <input className={style.editInput} onBlur={this.onCloseEditChange} autoFocus={true}
                               value={this.state.status} onChange={this.onStatusChange} placeholder='Edit status'/>
                    </form>
                    :
                    <span className='span' onClick={this.onEditChange}>
                        {this.state.status ? this.state.status : 'No status'}
                    </span>}
            </div>
        )
    }
}

export default ProfileStatus