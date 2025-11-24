import { BlogPage } from "../../pages/blog/BlogPage"
import { HomePage } from "../../pages/home/HomePage"
import { ImmovablesPage } from "../../pages/immovables/ImmovablesPage"


export type MyRoutesType = {
    url: string
    component: React.ComponentType
}
export const MyRoutes = [
    {
        url: '/',
        component: HomePage
    },
    {
        url: '/blog',
        component: BlogPage
    },
    {
        url: '/immovables',
        component: ImmovablesPage
    },
    
]
