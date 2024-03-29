interface baseInterface {
    _id: string;
    updatedAt: string;
    createdAt: string;
}
export interface IBlog extends baseInterface {
    type: IType
    title: string;
    description: string
    markdown: string;
    organisation: IOrganisation
    tags : IType[]
}

export interface IType extends baseInterface {
    title: string;
    cat1: string;
    cat2?: string;
    description: string;

}

export interface IActiveType extends IType {
    classes: string[],
    blogCount ?: number
}
export interface IOrganisation extends baseInterface {
    name: string;
    logo?: IFile;
    description?: string
    markdown: string;
}

export interface IFile extends baseInterface {
    name: string;
    path: string;
    description?: string
}
export interface IPagination {
    currentPage: number;
    totalRecord: number;
}

export interface IOrganisation extends baseInterface {
    name: string;
    logo?: IFile;
    description?: string
    markdown: string;
}

export interface IUser {
    // type: Schema.Types.ObjectId
    name: {
        first: string;
        middle: string;
        last: string;
    };
    avatar: IFile;
    dob: Date;
    gender?: 'male' | 'female';
    credential: Icredential;
}

export interface Icredential {
    username: string;
    password: string;
}
export interface IBrowserStorage {
    set(key: string, value: string): void
    get(key: string): string | null
    remove(key: string): void
    clear(): void
}


export type IInputType =
    "button" |
    "checkbox" |
    "color" |
    "date" |
    "datetime-local" |
    "email" |
    "file" |
    "hidden" |
    "image" |
    "month" |
    "number" |
    "password" |
    "radio" |
    "range" |
    "reset" |
    "search" |
    "submit" |
    "tel" |
    "text" |
    "time" |
    "url" |
    "week"

export interface IFloatingInput {
    placeholder: string,
    id: string,
    type : IInputType,
    classes?: string
}

export interface IFloatingSelect {
    placeholder: string,
    id: string,
    classes?: string
}


export interface IFloatingTextarea extends IFloatingInput {
    autoResize : number,
    maxChar ?: number
}
export enum EventTypes {
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
  }


export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
}




