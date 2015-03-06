/**
 * 查询方法统一命名为  search
 * 按钮命名：
 * 添加按钮 ： class ->btnAdd
 * 编辑按钮 ： class ->btnEdit
 * 查询按钮 ： class ->btnSearch
 * 删除按钮 ： class ->btnDelete
 * 
 * 数据表格 ： class ->datagrid
 * 
 */


//全局初始化
$(function(){
    /**菜单初始化*/
    $("#menu ul li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
    /**一些特定按钮的设置 比如 添加按钮、删除按钮、查询按钮、编辑按钮等*/
    
    /**列表字段过长截断处理 使用format+数字 以及默认的截断长度 format */
    
});