import { withIronSessionApiRoute } from 'iron-session/next';

declare module 'iron-session' {
    interface IronSessionData {
        user?: {
            id: number;
        };
    }
}

const options = {
    cookieName: "carrot_cookie",
    password: process.env.IRON_COOKIE_PW!,
    cookieOptions: {
        secure: false,
        httpOnly: false,
    }
}

export function withApiSession(fn: any) {
    return withIronSessionApiRoute(fn, options)
}