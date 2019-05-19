import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorite';


class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      })),
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  }

  state = {
    repositoryInput: '',
  }

  handleAddRepository = (e) => {
    e.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>
          {this.props.favorites.loading && <span>Loading ...</span>}
          {!!this.props.favorites.error && <span>{this.props.favorites.error}</span>}
        </form>
        <ul>
          {
            this.props.favorites.data.map(fav => (
              <li key={fav.id}>
                <p>
                  <strong>{fav.name}</strong> ({fav.description})
                </p>
                <a aria-hidden="false" href={fav.url}>Acessar</a>
              </li>
            ))
          }

        </ul>
      </Fragment>

    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
