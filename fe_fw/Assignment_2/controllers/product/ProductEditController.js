window.ProductEditController = function($location, $http, $scope, $routeParams){
    var apiUrlNovels = "http://localhost:3000/novels";
    var apiUrlGenres = "http://localhost:3000/genres";
    var idNovel = $routeParams.id;

    $scope.getListGenre = function() {
        $http.get(apiUrlGenres).then(response=>{
            if(response.status == 200) {
                $scope.genres = response.data;
            }
        })
    }

    $scope.getNovel = function(id) {
        $http.get(`${apiUrlNovels}/${id}`).then(response=>{
            if(response.status == 200) {
                $scope.novel = response.data;
            }
        })
    }
    
    $scope.getListGenre();
    $scope.getNovel(idNovel);

    $scope.onUpdateNovel = function(id) {

        $scope.checkData = {
            novel_name: false,
            author: false,
            total_chapters: false,
            genre_id: false,
            status: false,
            image: false,
            introduce: false
        }

        let flag = false;

        if(!$scope.novel || !$scope.novel.novel_name) {
            $scope.checkData.novel_name = true;
            flag = true;
        }
        if(!$scope.novel || !$scope.novel.author) {
            $scope.checkData.author = true;
            flag = true;
        }
        if(!$scope.novel || !$scope.novel.total_chapters) {
            $scope.checkData.total_chapters = true;
            flag = true;
        }
        if(!$scope.novel || !$scope.novel.genre_id) {
            $scope.checkData.genre_id = true;
            flag = true;
        }
        if(!$scope.novel || !$scope.novel.status) {
            $scope.checkData.status = true;
            flag = true;
        }
        if(!$scope.novel || !$scope.novel.image) {
            $scope.checkData.image = true;
            flag = true;
        }
        if(!$scope.novel || !$scope.novel.introduce) {
            $scope.checkData.introduce = true;
            flag = true;
        }
        
        if(!flag) {
            let updateNovel = {
                ...$scope.novel
            }
    
            $http.put(`${apiUrlNovels}/${id}`, updateNovel).then(response=>{
                if(response.status == 200) {
                    alert('Sửa thành công');
                    $location.path("/product/list");
                }
            })
        }
    }

}