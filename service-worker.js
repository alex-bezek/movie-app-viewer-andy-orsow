"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/movie-app-viewer-andy-orsow/index.html","c4066c2fb56c524535cf9bdbb5ffef05"],["/movie-app-viewer-andy-orsow/static/css/main.e8132730.css","1de8c4cd4feab87c974f2b4c3f58abaf"],["/movie-app-viewer-andy-orsow/static/js/main.0265da73.js","bf9831d67841ab9c78c2d502c91f7004"],["/movie-app-viewer-andy-orsow/static/media/arrival-background.32c87b36.jpg","32c87b36064529d2359b5fd3084437f9"],["/movie-app-viewer-andy-orsow/static/media/arrival.041296f4.jpg","041296f4f5f7409754e4e465e372d077"],["/movie-app-viewer-andy-orsow/static/media/avengers-background.dcf3553a.jpg","dcf3553ab92a9cf817f57b236af73471"],["/movie-app-viewer-andy-orsow/static/media/avengers.5a362945.jpg","5a3629450f37ffb7eafa5e210c674fbc"],["/movie-app-viewer-andy-orsow/static/media/darknight-background.dabdf152.jpg","dabdf152ae38e8a45897c1e6f11e7354"],["/movie-app-viewer-andy-orsow/static/media/darknight.8cec5c02.jpg","8cec5c02a972e54e5b1763841cf8d917"],["/movie-app-viewer-andy-orsow/static/media/divergent-background.3e6374d3.jpg","3e6374d3a5dc1bda1a90c892c9891450"],["/movie-app-viewer-andy-orsow/static/media/guardians-background.a29b7ea6.jpg","a29b7ea6edde166449c67908fc839669"],["/movie-app-viewer-andy-orsow/static/media/guardians.93584676.jpg","93584676ae102cc8cae690fdf864a7ae"],["/movie-app-viewer-andy-orsow/static/media/menu-close-x.a8e81635.png","a8e816356c01e972f72c3933e9937c70"],["/movie-app-viewer-andy-orsow/static/media/mockingjay-background.c37cee4d.jpg","c37cee4dbd146c6842a1004b55eaa564"],["/movie-app-viewer-andy-orsow/static/media/mockingjay.cb515aa5.jpg","cb515aa5120a675b9d8430a8b80a320a"],["/movie-app-viewer-andy-orsow/static/media/oblivian.6644f1c6.jpg","6644f1c6c834202853daf2e47ab246cd"],["/movie-app-viewer-andy-orsow/static/media/oblivion-background.20a6ae89.jpg","20a6ae895fcb3c9686002245daeacf3a"],["/movie-app-viewer-andy-orsow/static/media/pirates-background.9e6ce77f.jpg","9e6ce77f3243ca3acffa3e169240e78a"],["/movie-app-viewer-andy-orsow/static/media/pirates.7ae81d11.jpg","7ae81d118d78c9a0bb22ce3f203f49b2"],["/movie-app-viewer-andy-orsow/static/media/sherlock-background.e0f55487.jpg","e0f5548728423867687e57cb6292945a"],["/movie-app-viewer-andy-orsow/static/media/sherlock.29beb8a9.jpg","29beb8a9973f0138f5ed03b613d23eae"],["/movie-app-viewer-andy-orsow/static/media/thor-background.dfb49099.jpg","dfb49099ae41025b59ad6972717e0fb1"],["/movie-app-viewer-andy-orsow/static/media/thor.ac7ddd51.jpeg","ac7ddd5180c3337a43da4cf228af1500"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=a),r.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,r,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var r=new URL(a).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,a){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],r=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,r,/\.\w{8}\./);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!a.has(r)){var t=new Request(r,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+r+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(r,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!a.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,"index.html"),a=urlsToCacheKeys.has(r));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL("/movie-app-viewer-andy-orsow/index.html",self.location).toString(),a=urlsToCacheKeys.has(r)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});