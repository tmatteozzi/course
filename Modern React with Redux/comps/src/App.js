import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
    return (
        <div>
            <div>
                <Button primary>
                    <GoBell />
                    Click me!
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase />
                    See Deal!
                </Button>
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
