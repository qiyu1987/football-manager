import React from 'react'
import {connect} from 'react-redux'
import TeamDetails from './TeamDetails'
import {loadTeam, updateTeam, deleteTeam} from '../actions/teams'

class TeamDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadTeam(Number(this.props.match.params.id))
    }
    onDelete = () => {
        this.props.deleteTeam(this.props.team.id)
        this.props.history.push('/')
    }
    state = {
        editMode: true
    }
    render() {
        
        return <TeamDetails 
        team={this.props.team} 
        onClick = {this.onDelete}
        editMode = {this.state.editMode}/>
    }
}

const mapStateToProps = state => ({
    team: state.team
})

export default connect(mapStateToProps, {loadTeam, deleteTeam, updateTeam})(TeamDetailsContainer)