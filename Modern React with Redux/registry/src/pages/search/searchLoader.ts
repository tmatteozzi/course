import type { PackageSummary } from '../../api/types/packageSummary';
import { searchPackages } from '../../api/querys/searchPackages';

export interface searchLoaderResult {
    searchResults: PackageSummary[];
}

export async function searchLoader({
    request
}: {
    request: Request;
}): Promise<searchLoaderResult> {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term');

    if (!term) {
        throw new Error('Search term must be provided!');
    }

    const results = await searchPackages(term);

    return {
        searchResults: results
    };
}
