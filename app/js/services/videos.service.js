function videoService($http) {
  'ngInject';
  var self = this;
  const server = 'http://localhost:8080';

  self.getVideos = getVideos;
  self.getSingleVideo = getSingleVideo;
  self.deleteSingleVideo = deleteSingleVideo;
  self.updateSingleVideo = updateSingleVideo;
  self.createSingleVideo = createSingleVideo;

  function getVideos(){
    return $http({
      method: 'GET',
      url: server+'/videos'
    });
  }

  function createSingleVideo(videoData){
    return $http({
      method: 'POST',
      url: server+'/videos',
      data: videoData
    });
  }

  function getSingleVideo(eid){
    return $http({
      method: 'GET',
      url: server+'/videos/'+eid
    });
  }


  function deleteSingleVideo(eid){
    return $http({
      method: 'DELETE',
      url: server+'/videos/'+eid
    });
  }

  function updateSingleVideo(eid, videoData){
    return $http({
      method: 'PUT',
      url: server+'/videos/'+eid,
      data: videoData

    });
  }

  //vai buscar dados ao json!!!
  // self.getVideos = function(id){
  //   return $http.get('data/lista.json');
  // }

  // self.getAll = function(){
  //   //LER DO JSON
  //   return $http.get('data/lista.json');
  // }

  self.cutBasic = function(id){
    console.log(id);
  }


}

export default {
  name: 'videoService',
  fn: videoService
};
