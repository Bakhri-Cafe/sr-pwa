import { IFloatingInput, IFloatingTextarea } from "./dataModel"

export const defaultAvatar = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1151.jpg'

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
const title: IFloatingInput = {
    placeholder: 'Title ...',
    id: 'title',
    type: 'text'
}
const tag: IFloatingInput = {
    placeholder: 'Search tag',
    id: 'tag',
    type: 'text'
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

const name : IFloatingInput = {
        placeholder: 'Enter name',
        id: 'name',
        type: 'text'
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