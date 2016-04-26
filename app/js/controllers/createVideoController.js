function createVideoController($state, $stateParams, $sce, videoService) {
  'ngInject';

  let self = this;
  self.createSingleVideo = createSingleVideo;

  function createSingleVideo(data){
    videoService.createSingleVideo(data).then(function(res){
        $state.go("basic",{},{reload:true})
    })
  }
}



export default {
  name: 'createVideoController',
  fn: createVideoController
};
