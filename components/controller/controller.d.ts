import AppLoader from './appLoader';
import type { SourcesResponse, ArticlesResponse } from '../../types/index.js';
declare class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void): void;
    getNews(e: Event, callback: (data: ArticlesResponse) => void): void;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map