class Cookie {
  static getCookie(name: string, source?: string): string | null {
    try {
      const cookieString = source || document.cookie;
      return this.extractCookieValue(name, cookieString);
    } catch (e) {
      console.error('Cookie parsing error:', e);
      return null;
    }
  }

  private static extractCookieValue(name: string, cookieString: string): string | null {
    const value = `; ${cookieString}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop()!.split(';').shift()!);
    }
    return null;
  }
}

export default Cookie;
