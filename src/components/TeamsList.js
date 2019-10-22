import React from 'react'
import {Link} from 'react-router-dom'
class TeamsList extends React.Component{
    render() {
        if (this.props.teams) {
            return (
                <ul>
                    {
                        this.props.teams.map(
                            team => <li key={team.id}><Link to={`/teams/${team.id}`}>{team.name}</Link></li>
                        )
                    }
                </ul>
            )
        }
        return 'loading'
    }
}
export default TeamsList