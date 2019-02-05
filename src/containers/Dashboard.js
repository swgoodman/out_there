import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Link } from 'react-redux'

import styled from 'styled-components'

import { fetchUser } from '../actions/users'
import { fetchBoards, setBoard } from '../actions/boards'
import { fetchIdeas } from '../actions/ideas'

import IdeaInput from '../components/IdeaInput'
import IdeaContainer from './IdeaContainer'
import BoardList from './BoardList'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser()
    this.props.fetchBoards()
  }

    render() {

      const { user, boards, board } = this.props

      return (
          <div>
            { user.username }
            { user.board_id }
            <a href='/logout'>Logout</a>
            <BoardList boards={ boards } setBoard={ this.props.setBoard }/>
            <IdeaContainer board={ board } fetchIdeas={ this.props.fetchIdeas }/>
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    boards: state.boards.all,
    board: state.boards.current
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchIdeas,
  fetchBoards,
  setBoard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)