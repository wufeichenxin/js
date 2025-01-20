/*
脚本功能：移除 Amazon Prime 请求中的 amzn-app-ctxt cookie
脚本作者：自定义
*/

var responseBody = $response.body;  // 响应体内容
var requestUrl = $request.url;  // 请求的 URL

// 匹配 Amazon Prime 相关的请求 URL
if (requestUrl.includes('amazonprime') || requestUrl.includes('gp/prime/pipeline/confirm')) {
    var cookiesHeader = $request.headers['Cookie'];  // 请求头中的 Cookie 字段
    
    if (cookiesHeader) {
        // 使用正则表达式移除 amzn-app-ctxt cookie
        cookiesHeader = cookiesHeader.replace(/(?:^|;)\s*amzn-app-ctxt=[^;]*/, '');
        $request.headers['Cookie'] = cookiesHeader;  // 更新请求头中的 Cookie
    }
}

$done({ body: responseBody, headers: $request.headers });  // 返回更新后的响应体和请求头
