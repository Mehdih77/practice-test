import axios from "axios";
import { useReducer } from "react";
const initialState = {
  error: null,
  post: null,
  loading: false,
};
const postReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        error: null,
        post: action.payload,
        loading: false,
      };
    case "ERROR":
      return {
        error: action.payload,
        post: null,
        loading: false,
      };
    case "LOADING":
      return {
        error: null,
        post: null,
        loading: true,
      };
    default:
      return state;
  }
};

function Post({ url }) {
  const [{ error, post, loading }, dispatch] = useReducer(
    postReducer,
    initialState
  );

  function fetchPost(url) {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        dispatch({
          type: "SUCCESS",
          payload: data,
        });
      })
      .catch(({ response }) => {
        if (response?.data) {
          dispatch({
            type: "ERROR",
            payload: response.data.error,
          });
        } else {
          dispatch({
            type: "ERROR",
            payload: "Error in loading post!",
          });
        }
      });
  }

  function handleLoading() {
    fetchPost(url);
    dispatch({
      type: "LOADING",
    });
  }

  const buttonText = loading ? "loading" : "load";
  return (
    <div>
      <button onClick={handleLoading}>{buttonText}</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <article>{post.body}</article>
        </>
      )}
      {error && <p role="alert">{error}</p>}
    </div>
  );
}

export default Post;
