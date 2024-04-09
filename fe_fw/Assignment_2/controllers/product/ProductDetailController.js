window.ProductDetailController = function($location, $http, $scope, $routeParams){
    var apiUrlGenre = "http://localhost:3000/genres";

    var apiUrlNovel = "http://localhost:3000/novels";

    var idNovel = $routeParams.id;

    $scope.getNovel = function(id) {
        $http.get(`${apiUrlNovel}/${id}`).then(response=>{
            if(response.status == 200) {
                $scope.novel = response.data;
            }
        })
    }

    $scope.getNovel(idNovel);
}