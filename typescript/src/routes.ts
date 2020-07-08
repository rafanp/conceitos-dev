import { Request, Response } from 'express';
import createUser from './services/CreateUser';


export function helloWorld(request: Request , response: Response ) {
    const user = createUser({
        email: 'rafael@gmail.com',
        password: '123456',
        techs: [
            'node.js',
            'reactjs',
            'react native',
            { title: 'javascript', experience: 100},
        ]
    });

    return response.json({ message: 'Hello WOrld'});
}