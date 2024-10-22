import r2wc from "@r2wc/react-to-web-component"

export default function Text() {
  return <h1>Hello, World!</h1>;
}
const WebGreeting = r2wc(Text)
customElements.define("web-greeting", WebGreeting)