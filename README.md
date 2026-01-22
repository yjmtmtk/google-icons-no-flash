# google-icons-no-flash

Prevent FOUT (Flash of Unstyled Text) for Material Symbols and Material Icons.

No more "close", "menu", "home" text flashing before icons load!

## Install

### CDN (Recommended)

```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/google-icons-no-flash@1/google-icons-no-flash.min.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
</head>
```

### npm

```bash
npm install google-icons-no-flash
```

```js
import 'google-icons-no-flash';
```

## Usage

Just load the script **before** your Google Fonts link. That's it!

```html
<head>
  <!-- 1. Load this script first (no defer!) -->
  <script src="https://cdn.jsdelivr.net/npm/google-icons-no-flash@1/google-icons-no-flash.min.js"></script>
  
  <!-- 2. Then load your icon fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
</head>

<body>
  <span class="material-symbols-outlined">close</span>  <!-- No flash! -->
</body>
```

## Supported Fonts

| Class | Font |
|-------|------|
| `material-symbols-outlined` | Material Symbols Outlined |
| `material-symbols-rounded` | Material Symbols Rounded |
| `material-symbols-sharp` | Material Symbols Sharp |
| `material-icons` | Material Icons |
| `material-icons-outlined` | Material Icons Outlined |
| `material-icons-round` | Material Icons Round |
| `material-icons-sharp` | Material Icons Sharp |
| `material-icons-two-tone` | Material Icons Two Tone |

## How It Works

1. Injects CSS to hide icons (`visibility: hidden`) immediately
2. Detects font loading via `document.fonts` API
3. Shows icons when font is ready
4. Fallback: Force show after 3 seconds

## License

MIT