enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
}

type Endpoint = 'sources' | 'everything';

class Loader {
    private baseLink: string;
    private options: Partial<Record<string, string>>;
    constructor(baseLink: string, options: Partial<Record<string, string>>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: Partial<Record<string, string>> },
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load(HttpMethod.GET, endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Partial<Record<string, string>>, endpoint: Endpoint): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(
        method: HttpMethod,
        endpoint: Endpoint,
        callback: (data: T) => void,
        options: Partial<Record<string, string>> = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
