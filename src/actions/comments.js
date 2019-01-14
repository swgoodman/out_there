const baseUrl = 'http://localhost:3000/api/v1'

export const createComment = (comment, ideaId) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ comment: comment })
  }

  return dispatch => {
    fetch(`${ baseUrl }/ideas/${ ideaId }/sub_todos`, data)
      .then(response => response.json())
      .then(subTodo => dispatch({
        type: 'CREATE_COMMENT',
        payload: comment
      }))
      .catch(err => err)
  }
}
