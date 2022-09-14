import { useCookies } from "react-cookie";

/** 
 * Update Cookie
 * @function useUpdateCookie
 * @param {string} name - cookie name
 * @param {any} newValue - new value for cookie
 * @param {object} options - cookie path, cookie expires e.t.c
 * @param {number} time - time in days to cookie expires but you actually can use options
 * if you don't specify expires in options, the default time will be set at 1 day
 */
export function useUpdateCookie({ name, newValue, options, time = 1 }) {
    const [cookies, setCookie] = useCookies([name]);

    let now = new Date();
    now.setDate(now.getDate + time);

    setCookie(name, newValue, { ...options, expires: (options.expires) ? options.expires : now });
}

// TODO: ПЕРЕПИСАТЬ ЭТОТ ГРЕБАНЫЙ ХУК