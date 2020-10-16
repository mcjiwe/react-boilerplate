import React, { useEffect, useState } from 'react';

import { Grid, IconButton, Paper } from '@material-ui/core';
import { AddCircleSharp } from '@material-ui/icons';
import { RouteComponentProps } from '@reach/router';

import { TVShowData } from '../../../server/src/models/TVShow';
import { Text } from '../../components/text/text';
import { useApi } from '../../hooks/api/api';
import { useTvShowsStyles } from './tvShows.styles';

export const TvShows = (props: RouteComponentProps) => {
  const styles = useTvShowsStyles();
  const { getTVShows } = useApi();
  const [tvShows, setTVShows] = useState<TVShowData[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const cachedShows = localStorage.getItem('tvShows');

    if (!cachedShows) {
      getTVShows()
        .then((data) => {
          if (data) {
            localStorage.setItem('tvShows', JSON.stringify(data));
            setTVShows([data]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (cachedShows) {
      setTVShows(JSON.parse(cachedShows));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tvShows', JSON.stringify(tvShows));
  }, [tvShows]);

  const getMoreTVShows = () => {
    if (tvShows.length >= page + 1) {
      setPage((prevPage) => prevPage + 1);
      return;
    } else {
      getTVShows(page + 1)
        .then((data) => {
          if (data) {
            setTVShows((prevShows) => [...prevShows, data]);
            setPage((prevPage) => prevPage + 1);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Grid container spacing={6} alignItems="center">
      {tvShows.map(
        (data, index) =>
          index < page &&
          data?.results.map((tvShow) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper variant="elevation" className={styles.showCard}>
                <Text
                  size={18}
                  weight="Medium"
                  className={styles.showCardTitle}>
                  {tvShow.name}
                </Text>
                <img
                  src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
                  alt="poster"
                  height="100%"
                  width="100%"
                />
                <Text
                  variant="caption"
                  weight="Medium"
                  className={styles.showCardText}>
                  {tvShow.overview}
                </Text>
              </Paper>
            </Grid>
          ))
      )}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        className={styles.loadMore}>
        <IconButton onClick={getMoreTVShows}>
          <AddCircleSharp style={{ fontSize: 50 }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};
