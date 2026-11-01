declare enum HttpMethod {
    GET = "GET",
    POST = "POST"
}
type Endpoint = 'sources' | 'everything';
declare class Loader {
    private baseLink;
    private options;
    constructor(baseLink: string, options: Partial<Record<string, string>>);
    getResp<T>({ endpoint, options }: {
        endpoint: Endpoint;
        options?: Partial<Record<string, string>>;
    }, callback?: (data: T) => void): void;
    errorHandler(res: Response): Response;
    makeUrl(options: Partial<Record<string, string>>, endpoint: Endpoint): string;
    load<T>(method: HttpMethod, endpoint: Endpoint, callback: (data: T) => void, options?: Partial<Record<string, string>>): void;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map