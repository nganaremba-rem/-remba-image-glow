# Image Glow

A React component for creating glowing image effects using background-image css property.

## Installation

```bash
npm install image-glow
```

# Usage

```jsx
import ImageGlow from "image-glow";

function App() {
  return (
    <ImageGlow
      url="https://example.com/image.jpg"
      size={1}
      shadowSize={0.5}
      blurAmount={4}
    />
  );
}
```
