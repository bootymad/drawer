# UI Drawer
UI React Drawer Component

## Usage

The drawer component hides content until the component/dropdown is clicked. Wrap any content inside the component to have it be displayed on click. The component itself takes a `summary` prop: Can be HTML/JSX. This is displayed as the clickable content to expand upon. A `maxWidth` prop can also be specified. It takes a valid CSS `max-width` value as a JS string. If omitted, `maxWidth` will default to `auto`.

## Example Code

```
import Drawer from "./components/drawer/Drawer";

function App() {
    const summaryContent = (
    <div>
        <p>Click me for more info!</p>
    </div>
    );
    return (
        <div>
            <Drawer summary={summaryContent} maxWidth="300px">
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto vel asperiores explicabo eaque at fugiat cum
                        libero voluptatibus deserunt repellat.
                    </p>
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <div>My third element....</div>
            </Drawer>
        </div>
    );
}

export default App;
```
