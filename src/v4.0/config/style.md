# Style

## Use

You should set the value of `customStyles` in `_config.nexmoe.yml` in root directory.

The default config is as follows:

```yaml
customStyles:
  - custom.css
```

And then, you should create a file named `custom.css` in the path named `source`. So that you can write your own custom styles.

## Default Variables

```css
:root {
    --gutter: 25px;
    --radius: 13px;
    --color-primary: #ff4e6a;
    --color2: #ff761e;
    --color3: #ffb900;
    --color4: #33d57a;
    --color5: #00dbff;
    --color6: #1a98ff;
    --color7: #9090ff;
    --color-primary-bg: rgba(255,78,106,0.15);
    --color2-bg: rgba(255,118,30,0.15);
    --color3-bg: rgba(255,185,0,0.15);
    --color4-bg: rgba(51,213,122,0.15);
    --color5-bg: rgba(0,219,255,0.15);
    --color6-bg: rgba(26,152,255,0.15);
    --color7-bg: rgba(144,144,255,0.15);
    --color-shadow: rgba(161, 177, 204, 0.4);
}
```
