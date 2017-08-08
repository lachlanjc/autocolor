# autocolor

CLI for generating CSS color utilities

- Generates `color`, `background-color`, and `border-color` utility classes
- Names colors with Pantone names
- Saves to clipboard

## Usage

- Omit hash on hex colors (Bash doesn't understand)
- Separate colors with commas or spaces

```sh
npm i -g autocolor
autocolor 0cf fc0 cf0 0fc
```

```css
.cerulean { color: #0cf; }
.bg-cerulean { background-color: #0cf; }
.b--cerulean { border-color: #0cf; }

.sunglow { color: #fc0; }
.bg-sunglow { background-color: #fc0; }
.b--sunglow { border-color: #fc0; }

.inch-worm { color: #cf0; }
.bg-inch-worm { background-color: #cf0; }
.b--inch-worm { border-color: #cf0; }

.caribbean-green { color: #0fc; }
.bg-caribbean-green { background-color: #0fc; }
.b--caribbean-green { border-color: #0fc; }
```

MIT License

___
*Another thing by [@lachlanjc](https://lachlanjc.me).*
