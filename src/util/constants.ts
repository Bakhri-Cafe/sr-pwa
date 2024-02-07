import { IFloatingInput, IFloatingTextarea } from "./dataModel"

export const defaultAvatar = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1151.jpg'

const description: IFloatingTextarea = {
    placeholder: 'Description...',
    id: 'description',
    autoResize: 50,
    maxChar: 100
}
const markdown: IFloatingTextarea = {
    placeholder: 'Markdown...',
    id: 'markdown',
    autoResize: 500,
    maxChar: undefined
}
export const BLOG_CONSTANT = {
    title: {
        placeholder: 'Title ...',
        id: 'title',
        type: 'text'
    },
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
    tag: {
        placeholder: 'Search tag',
        id: 'tag',
        type: 'text'
    }
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

export const AUTH_CONSTANT = {
    signIn: {
        username,
        password,
        btnText: 'login'
    },
    signUp: {
        name: {
            placeholder: 'Enter name',
            id: 'name',
            type: 'text'
        },
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