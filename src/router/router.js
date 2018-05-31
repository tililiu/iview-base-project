export const otherRouter = {
    path: '/',
    name: 'home_index',
    component: () => import('@/views/home/home.vue')
};

export const routers = [
    otherRouter
];