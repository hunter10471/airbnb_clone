import prisma from '@/app/libs/prismadb';

export interface IListingParams {
    userId?: string;
}

export async function getListings(params: IListingParams) {
    try {
        const { userId } = params;
        let query: any = {};
        if (userId) {
            query.userId = userId;
        }
        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: { createdAt: 'desc' },
        });
        const safeListings = listings.map((listing) => {
            return {
                ...listing,
                createdAt: listing.createdAt.toISOString(),
            };
        });
        return safeListings;
    } catch (error: any) {
        throw new Error(error);
    }
}
