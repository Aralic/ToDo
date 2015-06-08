/*
*   页面加载时初始化数据
*   并对页面视图渲染
*   
*/

define(["min$", "localStorage", "util"], function($, store, _) {
    var Catalog = $('#catalog');
    var json = store.get('root');
    if (!json) {  
        var root = {
                id: 'root',
                chiId: ['defaultId'],
                unDoneNum: 0
            },
            defaultCatalog = {
                id: 'defaultId',
                title: '默认分类',
                chiId: [],
                parId: 'root',            
                unDoneNum: 0,
                taskId: []
            }; 
        store.save(root);
        store.save(defaultCatalog);  
    } 
    json = store.get('root');
    $('.catalog-all span').innerHTML = "("+json.unDoneNum+")";
    var str = '';
    for (var i = 0, len = json.chiId.length; i < len; i++) {
        var chiIdData =store.get(json.chiId[i]);
        str += '<li class=\"catalog1\" data-id='+chiIdData.id+'>'
            + '<div class=\"list-item\">'
            + '<i class=\"iconfont\">&#xe603;</i>'
            + '<span class=\"title\">'+chiIdData.title+'</span>'
            + '<span class=\"unDoneNum\">('+chiIdData.unDoneNum+')</span>'
            + '<i class=\"arrow\"></i>'
            + '</div></li>';
     }
    Catalog.innerHTML = str;
});