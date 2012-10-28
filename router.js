function route(handle, pathname, request, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](request, response);
  } else {
    throw new Error("404 Not found");
  }
}

exports.route = route;
