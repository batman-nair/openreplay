import Highlight from 'react-highlight'
import ToggleContent from '../../../shared/ToggleContent'

const FetchDoc = (props) => {
  return (
    <div className="p-4">
      <div>This plugin allows you to capture fetch payloads and inspect them later on while replaying session recordings. This is very useful for understanding and fixing issues.</div>
      
      <div className="font-bold my-2">Installation</div>
      <Highlight className="js">
        {`npm i @openreplay/tracker-fetch --save`}
      </Highlight>
      
      <div className="font-bold my-2">Usage</div>
      <p>Use the provided fetch method from the plugin instead of the one built-in.</p>
      <div className="py-3" />

      <div className="font-bold my-2">Usage</div>
      <ToggleContent
        label="Is SSR?"
        first={
          <Highlight className="js">
        {`import tracker from '@openreplay/tracker';
import trackerFetch from '@openreplay/tracker-fetch';
//...
const tracker = new OpenReplay({
  projectKey: PROJECT_KEY
});
tracker.start();
//...
export const fetch = tracker.use(trackerFetch(<options>)); // check list of available options below
//...
fetch('https://api.openreplay.com/').then(response => console.log(response.json()));`}
      </Highlight>
        }
        second={
          <Highlight className="js">
        {`import OpenReplay from '@openreplay/tracker/cjs';
import trackerFetch from '@openreplay/tracker-fetch/cjs';
//...
const tracker = new OpenReplay({
  projectKey: PROJECT_KEY
});
//...
function SomeFunctionalComponent() {
  useEffect(() => { // or componentDidMount in case of Class approach
    tracker.start();
  }, [])
//...
export const fetch = tracker.use(trackerFetch(<options>)); // check list of available options below
//...
fetch('https://api.openreplay.com/').then(response => console.log(response.json()));
}`}
      </Highlight>
        }
      />

      <div className="mt-6">See <a href="https://docs.openreplay.com/api" className="color-teal underline" target="_blank">API</a> for more options.</div>
    </div>
  )
};

FetchDoc.displayName = "FetchDoc";

export default FetchDoc;