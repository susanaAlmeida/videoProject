function singleVideoController($stateParams, $sce, videoService) {
  'ngInject';

  console.log("susana");
  let self = this;
  self.getVideo = getVideo;

  function getVideo(eid){
    videoService.getSingleVideo(eid).then(function(res){
      self.video = res.data;
      self.link = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+ self.video.url+'?autoplay=1');
    })
  }

  getVideo($stateParams.id);
}

export default {
  name: 'singleVideoController',
  fn: singleVideoController
};
