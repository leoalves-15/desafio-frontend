import youtubeSearch from 'youtube-api-v3-search';
import API_KEY from '../../services/apikey';

export const searchVideoStart = () => ({
  type: 'SEARCH_VIDEO',
  loading: true,
  error: false,
});
export const searchVideoError = () => ({
  type: 'SEARCH_VIDEO_ERROR',
  loading: false,
  error: true,
});
export const searchVideoSuccess = (videos) => ({
  type: 'SEARCH_VIDEO_SUCCESS',
  videos,
  loading: false,
  error: false,
});

export const searchVideo = (params) => (dispatch) => {
  dispatch(searchVideoStart());
  youtubeSearch(API_KEY, { q: params })

    .then((data) => dispatch(searchVideoSuccess(data.items)))

    .catch(() => dispatch(searchVideoError()));
};
