import { searchPackages } from '../../api/querys/searchPackages';

export async function searchLoader({ request }: { request: Request }) {
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
