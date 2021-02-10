import React from 'react'
import { Show } from "./show";
import Loading from "../components/loading"
import Loadable from "react-loadable"
const PapersLoadable = Loadable({
  loader: () => import('./papers'),
  loading: Loading
})
const Paper = () => {
  return (
    <div>
      {/* <div id="paper-loading"><Loading /></div> */}
      <div id="flip">
        <Show>
          <PapersLoadable />
        </Show>
      </div>
    </div>
  );
}
export default Paper;