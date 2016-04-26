function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('basic',{
    url: '/basic',
    templateUrl: 'basic.html',
    controller: 'basicController',
    controllerAs: 'basic',
    title: 'Basic'
  })
  .state('single-video',{
    url: '/basic/:id',
    templateUrl: 'singleVideo.html',
    controller: 'singleVideoController',
    controllerAs: 'basic',
    title: 'Basic'
  })
  .state('criar-form',{
    url: '/criar',
    templateUrl: 'criar.html',
    controller: 'createVideoController',
    controllerAs: 'basicCreate',
    title: 'Basic'
  })
    .state('editar-form',{
    url: '/editar/:id',
    templateUrl: 'editar.html',
    controller: 'editVideoController',
    controllerAs: 'basicEdit',
    title: 'Basic'
  })

  ;


}

export default OnConfig;
