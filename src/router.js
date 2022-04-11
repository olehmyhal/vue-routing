import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList'
import UsersList from './components/users/UsersList'
import TeamMembers from './components/teams/TeamMembers'
import NotFound from './components/nav/NotFound'
import TeamsFooter from './components/teams/TeamsFooter'
import UserFooter from './components/users/UserFooter'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { 
            path: '/teams', 
            components: {
                default: TeamsList,
                footer: TeamsFooter
            }, 
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers },
            ] 
        },
        { 
            path: '/users', 
            components: {
                default: UsersList,
                footer: UserFooter
            }
        },
        { path: '/:NotFound(.*)', component: NotFound }
    ],
    scrollBehavior(_, _2, savedPosition){
        if(savedPosition){
            return savedPosition
        }

        return { top: 0, left: 0 }
    }
})

export default router
