import qs from 'qs';

import IUser from '@/types/user';
import Cookie from '@/services/cookie';

const LOGGED_IN_COOKIE = 'logged_in';
const SESSION_CHECKED_COOKIE = 'session_checked'; //

export default class User {
  static async Login(params: any): Promise<any> {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: qs.stringify(params, { indices: false }),
      });

      if (!res.ok) {
        throw new Error('Login failed');
      }

      const data = await res.json();

      return data;
    } catch (e) {
      return null;
    }
  }

  static async autoLogin(source?: any): Promise<Optional<any>> {
    try {
      const loggedInCookie = Cookie.getCookie(LOGGED_IN_COOKIE, source);
      const sessionCheckedCookie = Cookie.getCookie(SESSION_CHECKED_COOKIE, source);

      if (!loggedInCookie) {
        return await Promise.resolve(null);
      }

      let promise: Promise<any> = Promise.resolve(true);
      if (!sessionCheckedCookie) {
        promise = fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/auto_login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
      }
      await promise;

      const res = await User.getUserInfo();

      return res.data;
    } catch (_err) {
      return null;
    }
  }

  static async getUserInfo(): Promise<IUser> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/get_user_data'`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return res.json();
  }
}
