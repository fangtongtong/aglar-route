angular.module("sevrices",[])
.factory("indexDate",function($http){
    return $http({url:"1.txt"});

})
/*[
 {title:"新闻1",con:"内容1"},
 {title:"新闻2",con:"内容2"},
 {title:"新闻3",con:"内容3"},
 ]*/