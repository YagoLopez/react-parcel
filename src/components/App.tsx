import * as React from 'react';


export default class App extends React.Component<{}, {}> {

  public render(): JSX.Element {
    return (
      <main className="container">
        <img src={ require('../puzzle.svg') } className="logo" />
        <h1>React + TypeScript + Parcel</h1>
        <div>Starter Project</div>
      </main>
    );
  }
}
