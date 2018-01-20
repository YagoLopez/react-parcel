import * as React from 'react';
const puzzle = require('../puzzle.svg');

export class App extends React.Component<{}, {}> {

  public render(): JSX.Element {
    return (
      <main className="container bordered">
        <img src={ puzzle } className="logo" />
        <h1 className="title">React + TypeScript + Parcel</h1>
        <div>Starter Project</div>
      </main>
    );
  }
}
