<html>
	<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
    <form action="/upload" enctype="multipart/form-data" method="post">
    <input type="file" name="upload" multiple="multiple">
    <input type="submit" value="Upload file" />
    </form>
   {#pgi}
		<div>{name}</div>
		<div>{disese_name}</div>
		<div>{symptoms}</div>
		<div>{medicine_info}</div>
		<div>{other_info}</div>
	{/pgi}
    </body>
</html>