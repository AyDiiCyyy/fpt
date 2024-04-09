window.ProductAddController = function($scope, $http, $location){

    var apiUrlGenre = "http://localhost:3000/genres";

    var apiUrlNovel = "http://localhost:3000/novels";

    $scope.getListGenre = function() {
        $http.get(apiUrlGenre).then(response=>{
            if(response.status == 200) {
                $scope.genres = response.data;
            }
        })
    }

    $scope.getListGenre();
    
    $scope.onAddNovelForm = function() {

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
            let newNovel = {
                ...$scope.novel
            }
            
            $http.post(apiUrlNovel, newNovel).then(response=>{
                if(response.status == 201) {
                    alert('Thêm thành công');
                    $location.path('/product/list');
                }
            })
        }
    }

}