import React, { Component } from 'react';
import Like from './common/Like';
import TableBody from './common/TableBody';
import TableHeader from './common/TableHeader';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Title' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />,
    },
    {
      key: 'delete',
      content: (movie) => (
        <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn} />
        <TableBody columns={this.columns} data={movies} />
      </table>
    );
  }
}

export default MoviesTable;
