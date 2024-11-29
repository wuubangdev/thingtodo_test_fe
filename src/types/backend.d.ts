export { };

declare global {

    interface IRequest {
        url: string;
        method: string;
        body?: { [key: string]: any };
        queryParams?: any;
        useCredentials?: boolean;
        headers?: any;
        nextOption?: any;
    }

    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }

    interface IResultPaginate<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: {
            meta: {
                page: number;
                pageSize: number;
                pages: number;
                total: number;
            },
            result: T[]
        }
    }

    interface IHero {
        id: number,
        description: string;
        videoDesktop: string;
        videoTablet: string;
        videoMobile: string;
    }
    interface ICatalog {
        id: number,
        facebookLink: string;
        tikLink: string;
        instagramLink: string;
        address: string;
        addressLink: string;
        phone: string;
    }
}