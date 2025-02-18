```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello</div>
  );
}
// pages/[id].js

export default function DynamicRoute({params}) {
  return (
    <div>Dynamic Route: {params.id}</div>
  );
}
```