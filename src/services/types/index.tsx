

export interface IResponse{
        data:IResponseDetails;
        error?:IError
}

export interface IError{
        documentation_url:string;
        message:string
}
export interface IResponseDetails{
        total_count:number;
        items: IRepository[]
}

export interface IRepository{
        id: string,
        created_at:string,
        name: string,
        full_name: string,
        description: string,
        url:string,
        stargazers_count: number,
        language: string,
}