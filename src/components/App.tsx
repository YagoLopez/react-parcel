import * as React from 'react';
declare const require: Function;
const puzzle = require('./puzzle.svg');


export class App extends React.Component<{}, {}> {

  public refs: {logo: HTMLImageElement};

  public componentDidMount() {
    debugger
    const logo: HTMLImageElement = this.refs.logo;
    const cssClassFlipRight : string = 'flip-vertical-right';
    const cssClassFlipLeft  : string = 'flip-vertical-left';

    // setInterval( _ => {
    //   // debugger
    //   if (logo.className.includes(cssClassFlipRight)) {
    //     logo.classList.remove(cssClassFlipRight);
    //     logo.classList.add(cssClassFlipRight);
    //     console.log('option1');
    //     console.log('class list antes', logo.classList);
    //   }
    //   if (logo.className.includes(cssClassFlipLeft)) {
    //     logo.classList.remove(cssClassFlipLeft);
    //     logo.classList.add(cssClassFlipRight);
    //   }
    //   if (!logo.className.includes(cssClassFlipRight) && !logo.className.includes(cssClassFlipLeft)) {
    //     logo.classList.add(cssClassFlipRight);
    //     console.log('option3');
    //     console.log('class list despues', logo.classList);
    //   }
    //
    // }, 3000)
  }

  public render(): JSX.Element {
    return (
      <main className="container bordered">
        <img ref="logo" src={ puzzle } className="logo flip" />
        <h1 className="title">React + TypeScript + Parcel</h1>
        <div>Starter Project</div>
      </main>
    );
  }
}
