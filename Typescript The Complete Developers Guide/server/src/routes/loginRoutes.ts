import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
        </form>
    `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    // HARDCODED EMAIL & PASSWORD
    if (
        email &&
        password &&
        email === 'tomasmatteozzi@gmail.com' &&
        password === 'password'
    ) {
        // MARK PERSON AS LOGGED IN
        req.session = { loggedIn: true };
        // REDIRECT TO ROOT ROUTE
        res.redirect('/');
    } else {
        res.send('Invalid email or password');
    }
});

export { router };
