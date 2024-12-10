// import queryString from 'query-string';
import slugify from 'slugify';

export const sendRequest = async <T>(props: IRequest): Promise<T> => {
    let { url } = props; // Only `url` is reassigned
    const {
        method,
        body,
        queryParams = {},
        useCredentials = false,
        headers = {},
        nextOption = {},
    } = props;

    const options: RequestInit = {
        method,
        headers: new Headers({ "Content-Type": "application/json", ...headers }),
        body: body ? JSON.stringify(body) : null,
        ...nextOption,
    };

    if (useCredentials) {
        options.credentials = "include";
    }

    if (queryParams) {
        const queryString = new URLSearchParams(queryParams as Record<string, string>).toString();
        url = `${url}?${queryString}`;
    }

    const response = await fetch(url, options);

    if (response.ok) {
        return response.json() as Promise<T>;
    } else {
        const errorJson = await response.json();
        throw {
            statusCode: response.status,
            message: errorJson?.message ?? "An error occurred",
            error: errorJson?.error ?? "Unknown error",
        };
    }
};



export const toSlugify = (title: string | undefined) => {
    if (title) {
        return slugify(title.toLowerCase(), {
            lower: false,
            locale: 'vi',
        });
    }
    return "";
}

export const getIdFromSlug = (slug: string) => {
    if (slug) {
        const firstString = slug.split('.html')[0];
        const id = firstString.split("-").pop();
        return id;
    }
    return "";
}