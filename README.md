# React Image Glow [:Hover]

A React component for creating glowing image hover effect using background-image css property.

## Installation

```bash
npm install @remba/image-glow
```

# Usage

```jsx
import ImageGlow from "@remba/image-glow";

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
