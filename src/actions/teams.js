import request from 'superagent'

export const TEAMS_FETCHED = 'TEAMS_FETCHED'

const baseUrl = 'http://localhost:4000'

const teamsFetched = teams => ({
  type: TEAMS_FETCHED,
  teams
})

export const loadTeams = () => (dispatch, getState) => {
  // when the state already contains teams, we don't fetch them again
  if (getState().teams) return
  
  // a GET /teams request
  request(`${baseUrl}/teams`)
  .then(response => {
    // dispatch an TEAMS_FETCHED action that contains the events
    dispatch(teamsFetched(response.body))
  })
  .catch(console.error)
}

export const TEAM_CREATE_SUCCESS = 'TEAM_CREATE_SUCCESS'

const teamCreateSuccess = team => ({
  type: TEAM_CREATE_SUCCESS,
  team
})

export const createTeam = (data) => (dispatch,getState) => {
  request
  .post(`${baseUrl}/teams`)
  .send(data)
  .set({Authorization: `Bearer ${getState().auth}`})
  .then(response => {
    dispatch(teamCreateSuccess(response.body))
  })
  .catch(console.error)
}

export const TEAM_FETCHED = 'TEAM_FETCHED'


const teamFetched = team => ({
  type: TEAM_FETCHED,
  team
})

export const loadTeam = (id) => (dispatch, getState) => {
  // when the state already contains the team, we don't fetch them again
  if (getState().team) return
  
  // a GET /team/{id} request
  request(`${baseUrl}/teams/${id}`)
  .then(response => {
    // dispatch an TEAM_FETCHED action that contains the team
    dispatch(teamFetched(response.body))
  })
  .catch(console.error)
}

export const TEAM_DELETE_SUCCESS = 'TEAM_DELETE_SUCCESS'
const teamDeleteSuccess = id => ({
  type: TEAM_DELETE_SUCCESS,
  payload:id
})
export const deleteTeam = (id) => dispatch => {
  request
  .delete(`${baseUrl}/teams/${id}`)
  .send(id)
  .then(response => {
    dispatch(teamDeleteSuccess(response.body))
  })
  .catch(console.error)
}

export const updateTeam = 
(id, team) => 
(dispatch,getState) => {
  console.log(getState())
}