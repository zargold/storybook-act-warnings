<h1>Create React App Latest (Webpack | JavaScript)</h1>

<p>
  This is project generated to serve as a reproduction starter for Storybook. https://github.com/storybookjs/storybook/issues/25304
</p>

<h3>Testing instructions</h3>

<p>Install dependencies:</p>
<pre>
  yarn
</pre>

<p> Run the tests</p>
<pre>yarn test</pre>

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
        at ActWarning (/Users/username/sbdemo/cra/default-js/src/stories/ActWarning.jsx:4:52)
</pre>
