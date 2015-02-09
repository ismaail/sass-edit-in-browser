# Sass Edit in Browser

## Grunt

install npm modules from `package.json` by running the command:

```
npm install
```

Grunt is used to compile sass file.

In `Gruntfile.js` the options of **compass** task will also generate a source map file for the compiled sass.

Start grunt **watch** task to compile sass file every time it changes:

```
grunt watch
```

## Bower

Bower is to illustrate the installation of [Bootstrap 3](http://getbootstrap.com/getting-started/) in a specific folder set in `.bowerrc` file.

Run bower whith the command:

```
bower install
```

## Node LiveReload

LiveReload server watchs `public` folder for changes so the browser can refresh the page.

Install [node-livereload](https://github.com/napcs/node-livereload) globally by running the command:

```
npm install -g livereload
```

Run livereload server:

```
node server.js
```

The page in `public/index.html` file listen to the server via the tag:

```html
<script src="http://localhost:35729/livereload.js"></script>
```

## The browser

The browsers I tested are Firefox and Chrome.

By inspecting the page you will see to css rule source file is `style.scss`,
by clicking on the file name you'll be able to edit it.

[![IMG1](http://i.imgur.com/Zk4Rgm2l.jpg)](http://i.imgur.com/Zk4Rgm2.png)

After saving the file grunt will execute **watch** task to regenerate the css files and livereload server will notify
the browser about this changes and reload the css or refresh the entire page.

[![IMG2](http://i.imgur.com/zUsawivl.jpg)](http://i.imgur.com/zUsawiv.png)
