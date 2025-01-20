/*
脚本功能：移除 Amazon Prime 请求中的 amzn-app-ctxt cookie
脚本作者：自定义
*/

var requestUrl = $request.url;  // 获取请求的 URL

// 匹配 Amazon Prime 请求 URL
if (requestUrl.includes('amazonprime') || requestUrl.includes('gp/prime/pipeline/confirm')) {
    var cookiesHeader = $request.headers['Cookie'];  // 获取请求头中的 Cookie 字段
    
    if (cookiesHeader) {
        // 使用正则表达式移除 amzn-app-ctxt cookie
        cookiesHeader = cookiesHeader.replace(/(?:^|;)\s*amzn-app-ctxt=[^;]*/, '');
        $request.headers['Cookie'] = cookiesHeader;  // 更新请求头中的 Cookie
    }
}

$done({ headers: $request.headers });  // 返回更新后的请求头
