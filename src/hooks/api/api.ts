import { AxiosError, AxiosResponse } from 'axios';
import { useContainer } from 'unstated-next';

import { axios } from '../../axios-config';
import { LoginResponse } from '../../models/Responses/LoginResponse';
import { TVShowsResponse } from '../../models/Responses/TVShowsResponse';
import { UserResponse } from '../../models/Responses/UserResponse';
import { SharedStateContainer } from '../state/sharedState';

export const useApi = () => {
  const { setUser } = useContainer(SharedStateContainer);

  return {
    login: (username: string, password: string) => {
      return axios
        .post('/login', { username, password })
        .then((response: AxiosResponse<LoginResponse>) => {
          if (response.status === 200) {
            localStorage.setItem('accessToken', response.data.accessToken);
            setUser(response.data.user);
            return true;
          }
        })
        .catch((e: AxiosError) => {
          console.log(e.response?.data);
        });
    },
    logout: () => {
      localStorage.removeItem('accessToken');
      setUser(null);
      return true;
    },
    getUser: () => {
      return axios
        .post('/user')
        .then((response: AxiosResponse<UserResponse>) => {
          if (response.status === 200) {
            setUser(response.data.user);
            return;
          }

          // Logout
          localStorage.removeItem('accessToken');
          setUser(null);
        })
        .catch((e) => {
          console.log(e.response?.data);
        });
    },
    getTVShows: (page?: number) => {
      return axios
        .get(`/tvshows/${page}`)
        .then((response: AxiosResponse<TVShowsResponse>) => {
          if (response.status === 200) {
            return response.data;
          }
        })
        .catch((e) => console.log(e.response?.data));
    },
  };
};
