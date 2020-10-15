import React from 'react';

import { Button } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import { useContainer } from 'unstated-next';

import { useApi } from '../../hooks/api/api';
import { SharedStateContainer } from '../../hooks/state/sharedState';
import { useTvShowsStyles } from './tvShows.styles';

export const TvShows = (props: RouteComponentProps) => {
  const styles = useTvShowsStyles();
  const { getTVShows } = useApi();
  const { state } = useContainer(SharedStateContainer);

  return (
    <div>
      <Button onClick={() => getTVShows()}>Fetch TV Shows</Button>
    </div>
  );
};
