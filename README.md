
# postcss-icon.joshnh

Icon set data for [postcss-icon plugin](https://github.com/retyui/postcss-icon)

Based on [joshnh/Pure-CSS-Icons](https://github.com/joshnh/Pure-CSS-Icons)

[![joshnh/Pure-CSS-Icons](https://raw.githubusercontent.com/retyui/postcss-icon.joshnh/master/preview.png)](https://retyui.github.io/postcss-icon/joshnh/)


## Install
```bash
npm install -D postcss-icon.joshnh postcss-icon
# or
yarn add -D postcss-icon.joshnh postcss-icon
```

## Use
```js
const postcss     = require('postcss');
const postcssIcon = require('postcss-icon');
const dataIcono   = require('postcss-icon.joshnh');

const CSS = `
.custom-selector{
	@icon: joshnh-pause; /* 'joshnh-' is Prefix , 'pause' is name Icon*/ }
/* or */
.custom-selector2{
	@icon joshnh-pause; }
`;

postcss(
	postcssIcon({
		prefix: 'joshnh-', /* required when using multiple Icon data sets */
		data: dataIcono
	})
).process(CSS).then(({css, messages}) => {
	console.log(css);
	messages
		.filter(i => i.type === "warning")
		.map(e => console.log(e.toString()));
});
```

## All name icons [preview](https://retyui.github.io/postcss-icon/joshnh/)

```js
Object.keys(require('postcss-icon.joshnh')).sort().join(', ')
```
`add`, `batEmpty`, `batFull`, `calendar`, `chart`, `clock`, `comment`, `contacts`, `cross`, `eject`, `flag`, `folder`, `heart`, `home`, `mail`, `newDoc`, `next`, `pause`, `play`, `prev`, `stop`, `subtract`, `tick`, `user`