export { };

declare global {
    interface IRequest {
        url: string; // API endpoint
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS"; // Restrict to valid HTTP methods
        body?: Record<string, unknown>; // Use Record type for key-value pairs
        queryParams?: Record<string, string | number | boolean>; // Strongly type query parameters
        useCredentials?: boolean; // Whether to include credentials
        headers?: Record<string, string>; // HTTP headers as key-value pairs
        nextOption?: Omit<RequestInit, "headers" | "body" | "method">; // Additional fetch options, excluding already defined fields
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
        subTitleDetail: string;
        headingDetail: string;
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