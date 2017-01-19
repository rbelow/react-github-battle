var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes : {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    //console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  // componentWillMount: function () {
  //   console.log('componentWillMount');
  // },
  componentDidMount: function () {
    var query = this.props.location.query;
    //console.log(this.setState);
    // Fetch info from Github then update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
      // bind() this to the outside context
      // https://egghead.io/playlists/the-this-key-word-250c37d9
    //console.log('componentDidMount');
  },
  // componentWillReceiveProps: function () {
  //   console.log('componentWillReceiveProps');
  // },
  // componentWillUnmount: function () {
  //   console.log('componentWillUnmount');
  // },
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function() {
    //console.log('render');
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
