import { IFloatingInput, IFloatingTextarea } from "./dataModel"

export const defaultAvatar = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1151.jpg'

const title: IFloatingInput = {
    placeholder: 'Title ...',
    id: 'title',
    type: 'text'
}

const description: IFloatingTextarea = {
    placeholder: 'Description...',
    id: 'description',
    autoResize: 50,
    maxChar: 200,
    type: "number"
}
const markdown: IFloatingTextarea = {
    placeholder: 'Markdown...',
    id: 'markdown',
    autoResize: 500,
    maxChar: undefined,
    type: "number"
}

const logo: IFloatingInput = {
    placeholder: 'choose logo ',
    id: 'logo',
    type: 'text'
}

export const search: IFloatingInput = {
    placeholder: 'Search',
    id: 'img_search',
    type: 'text'
}

const tag: IFloatingInput = {
    placeholder: 'Search tag',
    id: 'tag',
    type: 'text'
}

const username: IFloatingInput = {
    placeholder: 'Enter username',
    id: 'username',
    type: 'text'
}

const password: IFloatingInput = {
    placeholder: 'Password',
    id: 'password',
    type: 'password'
}
const rePassword: IFloatingInput = {
    placeholder: 'Re enter password',
    id: 're-password',
    type: 'password'
}

const name: IFloatingInput = {
    placeholder: 'Enter name',
    id: 'name',
    type: 'text'
}

export const ORGANISATION_CONSTANT = {
    name: title,
    description: { ...description, autoResize: 100 },
    markdown,
    logo,
    btnText: 'Create'
}


export const CREATE_BLOG_CONST = {
    title,
    cat1: {
        placeholder: 'select cat1',
        id: 'cat1',
        type: 'text'
    },
    cat2: {
        placeholder: 'select cat2',
        id: 'cat2',
        type: 'text'
    },
    description: {
        ...description, autoResize: 150, maxChar: 500
    }
}

export const BLOG_CONSTANT = {
    title,
    description,
    markdown,
    type: {
        placeholder: 'select blog type',
        id: 'type',
        type: 'text'
    },
    organisation: {
        placeholder: 'select Organisation',
        id: 'organisation',
        type: 'text'
    },
    tag
}

export const AUTH_CONSTANT = {
    signIn: {
        username,
        password,
        btnText: 'login'
    },
    signUp: {
        name,
        username,
        password,
        rePassword,
        btnText: 'create account'
    },
    forgotPassword: {
        username,
        btnText: 'Send password reset link'
    },
    changePassword: {
        password,
        rePassword,
        btnText: 'Change Password'
    }
}