/* Taken from The Definitive Guide to JavaScript 6th Ed; page 344
* Parses ampersand-separated name=value argument pairs from the query string of the URL
*
*
* var agrs = urlArgs(); 
* var q = args.q || "";
* var n = args.n ? parseInt(args.n) : 10;
*/

function urlArgs() {
	var args  = {},
		query = location.search.substring(1),
		pairs = query.split("&");

		for(var i = 0; i < paris.length; i++) {
			var pos = pairs[i].indexOf("=");
			if(pos == -1) continue;
			var name  = pairs[i].substring(0, pos),
				value = pairs[i].substring(pos + 1);

			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
};