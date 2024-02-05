import { IFloatingInput } from "./dataModel"

export const defaultAvatar = 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1151.jpg'

export const BLOG_CONSTANT = {
    title: {
        placeholder: 'Title ...',
        id: 'title',
        type: 'text'
    },
    description: {
        placeholder: 'Description max 50 cars ...',
        id: 'description',
    },
    markdown: {
        placeholder: 'Markdown ...',
        id: 'markdown',
    },
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

const password : IFloatingInput = {
    placeholder: 'Password',
    id: 'password',
    type: 'password'
}
const rePassword : IFloatingInput = {
    placeholder: 'Re enter password',
    id: 're-password',
    type: 'password'
}

export const AUTH_CONSTANT = {
    signIn: {
        username,
        password,
        btnText : 'login'
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
        btnText : 'create account'
    },
    forgotPassword: {
        username,
        btnText : 'Send password reset link'
    },
    changePassword: {
        password,
        rePassword,
        btnText : 'Change Password'
    }
}