# Node CLI GUI

Try using cli like gui.

### Installation

```
$ npm install nodecli-gui
```

### Usage

```js
import { CLIApplication, CLILabel, CLIButton } from 'nodecli-gui';
import chalk from 'chalk';

const app = new CLIApplication();

app.setWindowTitle(`Example`);
app.setWindowIcon(`./icon.ico`);

const label1 = new CLILabel(chalk.bgBlueBright.whiteBright(` Lorem ipsum. `));
app.addComponent(label1.return(), 1, 1);

const button1 = new CLIButton(chalk.bgWhiteBright.black(` button `));
app.addComponent(button1.return(), 16, -1);

app.show();
```