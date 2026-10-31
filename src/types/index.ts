export interface Source {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly url: string;
    readonly category: string;
    readonly language: string;
    readonly country: string;
}

export interface SourcesResponse {
    readonly status: string;
    readonly sources: Source[];
}

export interface Article {
    readonly source: {
        readonly id: string | null;
        readonly name: string;
    };
    readonly author: string | null;
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly urlToImage: string;
    readonly publishedAt: string;
    readonly content: string;
}

export interface ArticlesResponse {
    readonly status: string;
    readonly totalResults: number;
    readonly articles: Article[];
}
