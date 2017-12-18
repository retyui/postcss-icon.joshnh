# postcss-icon.joshnh

Icons data for [postcss-icon plugin](https://github.com/retyui/postcss-icon)

Based on [joshnh/Pure-CSS-Icons](https://github.com/joshnh/Pure-CSS-Icons)

## Install
```bash
npm install -D postcss-icon.joshnh
# or
yarn add -D postcss-icon.joshnh
```

## Use
```js
const postcss     = require('postcss');
const postcssIcon = require('postcss-icon');
const dataJoshnh  = require('postcss-icon.joshnh');
postcss(
	postcssIcon({
		prefix: 'joshnh-', /* required when using multiple Icon.data sets */
		data: dataJoshnh
	})
).process(`
.custom-selector{ @icon: joshnh-pause; } /* 'joshnh-' is Prefix , 'pause' is name Icon*/
/* or */
.custom-selector2{ @icon joshnh-pause; }
`).then(({css,messages}) => {
	console.log(css);
	messages
		.filter(i => i.type === "warning")
		.map(e => console.log(e.toString()));
});
```

## [All name icons](https://retyui.github.io/postcss-icon/joshnh/)

```js
Object.keys(require('.')).sort().map(e => `\`${e}\``).join(', ')
```
`add`, `batEmpty`, `batFull`, `calendar`, `chart`, `clock`, `comment`, `contacts`, `cross`, `eject`, `flag`, `folder`, `heart`, `home`, `mail`, `newDoc`, `next`, `pause`, `play`, `prev`, `stop`, `subtract`, `tick`, `user`
