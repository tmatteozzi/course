import Button from './Button';

function App() {
    return (
        <div>
            <div>
                <Button primary>Click me!</Button>
            </div>
            <div>
                <Button secondary>Buy Now!</Button>
            </div>
            <div>
                <Button success>See Deal!</Button>
            </div>
            <div>
                <Button warning>Hide Ads!</Button>
            </div>
            <div>
                <Button danger>Something</Button>
            </div>
        </div>
    );
}

export default App;
