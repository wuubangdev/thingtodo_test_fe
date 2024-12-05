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
        gmail: string;
    }
    interface Product {
        id: number;
        title: string;
        fileList: string[];
    }

    interface Client {
        id: number;
        clientName: string;
        clientLogo: string;
        clientCompany: string;
        position: string;
        feedback: string;
    }

    interface IProject {
        id: number;
        title: string;
        subTitle: string;
        overView: string;
        year: number;
        sector: string[];
        category: string[];
        customerSegments: number;
        automationFlow: number;
        increaseQuantity: number;
        productList: Product[];
        mainMedia: string;
        clients: Client[];
    }
    interface IService {
        id: number;
        title: string;
        icon: string;
        description: string;
        subService: string[];
        serviceImage: string[];
    }
    interface IClient {
        id: number;
        name: string;
        logo: string;
        logoHover: string;
    }
    interface IClientFeedback {
        id: number,
        clientName: string,
        clientCompanyLogo: string,
        clientAvatar: string,
        clientCompany: string,
        position: string,
        feedback: string,
    }

}