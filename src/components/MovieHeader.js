import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorites } from "./../actions/favoritesActions";

const MovieHeader = (props) => {
  const appTitle = props.appTitle;
  const showFavorites = props.showFavorites;

  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
          <div className="btn btn-sm btn-primary">
            <span onClick={() => props.toggleFavorites()}>
              {showFavorites ? "Hide" : "Show"} Favorites
            </span>
          </div>
          <Link to="/movies" className="btn btn-sm btn-primary">
            View All Movies
          </Link>
          <Link to="/movies/add" className="btn btn-sm btn-success">
            <i className="material-icons">&#xE147;</i>{" "}
            <span>Add New Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appTitle: state.movieReducer.appTitle,
    showFavorites: state.favoritesReducer.showFavorites,
  };
};

export default connect(mapStateToProps, { toggleFavorites })(MovieHeader);
