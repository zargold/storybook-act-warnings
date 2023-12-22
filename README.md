<h1>Create React App Latest (Webpack | JavaScript)</h1>

<p>
  This is project generated to serve as a reproduction starter for Storybook.
</p>

<a  href="https://stackblitz.com/github/storybookjs/sandboxes/tree/next/cra/default-js/after-storybook?preset=node=">
  View it in Stackblitz
</a>

<h3>Testing instructions</h3>

<p>Install dependencies:</p>
<pre>
  yarn
</pre>

<p>Run Storybook:</p>
<pre>
  yarn storybook
</pre>

<h3>Running the test throws act warnings when stories are imported in tests</h3>
<pre>
 console.error
    Warning: An update to ActWarning inside a test was not wrapped in act(...).
    
    When testing, code that causes React state updates should be wrapped into act(...):
    
    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */
    
    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
        at ActWarning (/Users/asoni/sbdemo/cra/default-js/src/stories/ActWarning.jsx:4:52)
</pre>
