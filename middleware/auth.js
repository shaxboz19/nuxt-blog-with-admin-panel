export default function({redirect, store}) {
    if(!store.getters['auth/isAuth']) {
        redirect('/admin/login?message=login')
    }
}