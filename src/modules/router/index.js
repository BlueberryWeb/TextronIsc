
export default {

    name: 'portal',
    component: () => import('@/modules/layout/PortalLayout'),
    children: [
        {
            path: '',
            name: 'welcomePortal',
            component: () => import('@/modules/views/WelcomePortal.vue'),
            meta:{
                requiresAuth: true
            }
        },
        // Business Updates routes
        {
            path: '/portal/business_updates',
            name: 'business_updates',
            component: () => import('@/modules/views/BusinessUpdates/BusinessUpdates'),
        },
        {
            path: '/portal/business_updates/update/:id',
            name: 'business_updates-detail',
            component: () => import('@/modules/views/BusinessUpdates/BusinessUpdatesDetail'),
        },
        // Training plan
        {
            path: '/portal/training_plan',
            name: 'training_plan',
            component: () => import('@/modules/views/TrainingPlan/TrainingPlan'),
        },
        // Sharepoints
        {
            path: '/portal/sharepoints',
            name: 'sharepoints',
            component: () => import('@/modules/views/Sharepoints/SharepointsView'),
        },
         // Success Stories
         {
            path: '/portal/success_stories',
            name: 'success_stories',
            component: () => import('@/modules/views/SuccessStories/SuccessStories'),
        },
        // Leasons Learned
        {
            path: '/portal/leasons_learned',
            name: 'leasons_learned',
            component: () => import('@/modules/views/LeasonsLearned/LeasonsLearned'),
        },
        {
            path: '/portal/leasons_learned/training_plan/:id',
            name: 'leasons_learned-training',
            component: () => import('@/modules/views/LeasonsLearned/Results/TrainingResults'),
        },
        {
            path: '/portal/leasons_learned/success_stories/:id',
            name: 'leasons_learned-success',
            component: () => import('@/modules/views/LeasonsLearned/Results/SuccessResults'),
        },
         // Master Plan
         {
            path: '/portal/master_plan',
            name: 'master_plan',
            component: () => import('@/modules/views/MasterPlan/MasterPlan'),
        },
        {
            path: '/portal/master_plan/:category',
            name: 'master_plan-detail',
            component: () => import('@/modules/views/MasterPlan/MasterDetail'),
        },
        // Admin Panel
        {
            path: '/portal/admin_panel',
            name: 'admin_panel',
            component: () => import('@/modules/views/AdminPanel/AdminPanel'),
        },
        {
            path: '/portal/admin_panel/business_updates',
            name: 'admin_panel-business_updates',
            component: () => import('@/modules/views/AdminPanel/Options/BusinessAdmin'),
        },
        {
            path: '/portal/admin_panel/success_stories',
            name: 'admin_panel-success_stories',
            component: () => import('@/modules/views/AdminPanel/Options/SuccessAdmin'),
        },
        {
            path: '/portal/admin_panel/training_plan',
            name: 'admin_panel-training_plan',
            component: () => import('@/modules/views/AdminPanel/Options/TrainingAdmin'),
        },
        {
            path: '/portal/admin_panel/sharepoints',
            name: 'admin_panel-sharepoints',
            component: () => import('@/modules/views/AdminPanel/Options/ShareAdmin'),
        },
        // Users
        {
            path: '/users',
            name: 'users',
            component: () => import('@/modules/views/Users/UsersView'),
        },
        // About Company
        {
            path: '/aboutCompany',
            name: 'About_Company',
            component: () => import('@/modules/views/Company/AboutCompany')
        },
        // Vision Company
        {
            path: '/vision',
            name: 'Vision',
            component: () => import('@/modules/views/Company/VisionCompany')
        },
        // Mission Company
        {
            path: '/mission',
            name: 'Mission',
            component: () => import('@/modules/views/Company/MissionCompany')
        },
        //Values Company
        {
            path: '/values',
            name: 'Values',
            component: () => import('@/modules/views/Company/ValuesCompany')
        },
        //ISC OS 
        {
            path: '/OS',
            name: 'ISC_OS',
            component: () => import('@/modules/views/OS/IscOs')
        },
    ]

}
