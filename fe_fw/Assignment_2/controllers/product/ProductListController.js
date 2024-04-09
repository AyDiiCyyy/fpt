window.ProductListController = function($scope, $http, $location) {
    var apiUrlNovels = "http://localhost:3000/novels";
    var apiUrlGenres = "http://localhost:3000/genres";

    $scope.getNovels = function() {
        $http.get(apiUrlNovels).then(response=>{
            $scope.novels = response.data;
        });
        $http.get(apiUrlGenres).then(response=>{
            $scope.listGenres = response.data;
        });
    }

    $scope.getNovels();

    $scope.onDeleteNovel = function(id) {
        let confirm = window.confirm('Bạn có muốn xóa không?');
        if(confirm) {
            $http.delete(`${apiUrlNovels}/${id}`).then(response=>{
                if(response.status == 200) {
                    $scope.getNovels();
                    alert('Xóa thành công');
                }
            })
        }
    }

    $scope.onAddNovel = function(){
        $location.path('/product/add');
    }
    $scope.onDetailNovel = function(id){
        $location.path(`/product/detail/${id}`);
    }
    $scope.onEditNovel = function(id){
        $location.path(`/product/edit/${id}`);
    }

}
