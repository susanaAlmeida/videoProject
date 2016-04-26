function editVideoController($state, $stateParams, $sce, videoService) {
  'ngInject';

  let self = this;
  self.singleVideo = singleVideo;
  self.updateSingleVideo = updateSingleVideo;


  function singleVideo(eid){
    console.log('entrou');
    videoService.getSingleVideo(eid).then(function(res){
      self.video = res.data;
      console.log(self.video);
    })
  }

  function updateSingleVideo(){
    var formData = {
      name: self.video.name,
      url: self.video.url
    }
    videoService.updateSingleVideo($stateParams.id,formData).then(function(res){
    $state.go("basic",{},{reload:true})
    })
  }

  singleVideo($stateParams.id)

}



export default {
  name: 'editVideoController',
  fn: editVideoController
};
