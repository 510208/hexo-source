'use strict';

var hexo = hexo || {};
var config = hexo.config;
var copyright = config.copyright; // 此处为 hexo 配置文件中的配置参数, 名称可自定义

hexo.extend.filter.register('before_post_render', function (data) {
    if (!copyright || !config.url || data.layout !== 'post') {
        return data;
    }

    var domain = config.url;
    var href = domain + '/' + data.path;
    var text = copyright.text || ''
    var hrefText = text
        .replace('${url}', domain) // 博客地址
        .replace('${link}', ' [' + href + '](' + href + ') '); // 文章地址

    data.content += '\n\n' + hrefText + '\n\n';
});