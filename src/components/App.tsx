import * as React from 'react';
declare const require: Function;
const puzzle = require('./puzzle.svg');


export class App extends React.Component<{}, {}> {

  public refs: {logo: HTMLImageElement};

  public componentDidMount() {
    console.log('component did mount');
  }

  public render(): JSX.Element {
    return (
      <div className="container bordered">
        <img ref="logo" src={ puzzle } className="logo rotation" />
        <h1 className="title">React + TypeScript + Parcel</h1>
        <div>Starter Project</div>
      </div>
    )
  }
}
