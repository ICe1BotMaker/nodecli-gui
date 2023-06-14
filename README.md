# Node CLI GUI

Try using cli like gui.

### Installation

```
$ npm install nodecli-gui
```

### Usage

```js
import chalk from 'chalk';

import { CLIApplication, CLIButton, CLILabel } from 'nodecli-gui';

const app = new CLIApplication();

app.setWindowTitle(`Test Application`);
app.setWindowIcon(`xampp-icon.ico`);

const label1 = new CLILabel(chalk.bgBlueBright.whiteBright(` Lorem ipsum dolor simit. `));
app.addComponent(label1.return(), 1, 1);

const button1 = new CLIButton(chalk.bgWhiteBright.black(` button `));
button1.on(`pick`, () => {
    console.log(` picked button1 object. `);
});
button1.on(`select`, () => {
    console.log(` enter button1 object. `);
});
app.addComponent(button1.return(), 28, -1);

app.show(10);
```