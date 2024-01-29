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
}

export interface IType extends baseInterface {
    title: string;
    cat1: string;
    description: string;
}
export interface IOrganisation extends baseInterface {
    name: string;
    logo?: IFile;
    description?: string
    markdown: string;
}

export interface IFile extends Document {
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