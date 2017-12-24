
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

# Other icon sets:
- [postcss-icon.cssicon](https://github.com/retyui/postcss-icon.cssicon) (count icons : 192) [result demo](https://retyui.github.io/postcss-icon/cssicon/)
- [postcss-icon.icono](https://github.com/retyui/postcss-icon.icono) (count icons : 131) [result demo](https://retyui.github.io/postcss-icon/icono/)
- [postcss-icon.rosa](https://github.com/retyui/postcss-icon.rosa) (count icons : 78) [result demo](https://retyui.github.io/postcss-icon/rosa/)
- [postcss-icon.airpwn](https://github.com/retyui/postcss-icon.airpwn) (count icons : 39) [result demo](https://retyui.github.io/postcss-icon/airpwn/)
- [postcss-icon.stiffi](https://github.com/retyui/postcss-icon.stiffi) (count icons : 34) [result demo](https://retyui.github.io/postcss-icon/stiffi/)


## All name icons (count: 24) [result demo](https://retyui.github.io/postcss-icon/joshnh/)

```js
Object.keys(require('postcss-icon.joshnh')).sort().join(', ')
```
`add`, `batEmpty`, `batFull`, `calendar`, `chart`, `clock`, `comment`, `contacts`, `cross`, `eject`, `flag`, `folder`, `heart`, `home`, `mail`, `newDoc`, `next`, `pause`, `play`, `prev`, `stop`, `subtract`, `tick`, `user`