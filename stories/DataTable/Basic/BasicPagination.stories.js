
import React from 'react';
import { storiesOf } from '@storybook/react';
import data from '../constants/sampleMovieData';
import DataTable from '../../../src/DataTable/DataTable';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
];

const BasicPaginationTable = () => (
  <DataTable
    title="Movie List"
    columns={columns}
    data={data}
    pagination
  />
);


storiesOf('Basic', module)
  .add('Paginate', BasicPaginationTable);
