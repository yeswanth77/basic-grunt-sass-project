# Basic Grunt Project
This is a basic Grunt project that compiles Sass and compresses it, concatenate Javascript and compresses it and also optimize images.

<h2>How to get started for beginners who don't know Grunt</h2>

<h3>What you need to install</h3>
<ul>
<li>Install <strong>Git</strong> on your computer - http://git-scm.com/downloads</li>
<li>Install <strong>NodeJs</strong> - http://nodejs.org/</li>
</ul>

<h3>Install the next items using Git Bash command line which is an application on your computer when you installed Git</h3>
<p>Open Git Bash and type in the following commands. This will install Grunt and the Grunt Cli</p>
<ul>
<li>Install <strong>Grunt Cli</strong>  command: npm install -g grunt-cli</li>
<li>Install <strong>Grunt</strong> with command: npm install grunt --save-dev</li>
</ul>

<h3>Download the Zip file on your right</h3>
<ul>
<li>Next you should download the zip file on your right, unzip the files and place the folder in your project directory where your css and js folder will be.</li>
<li>Go into the folder and you should see a file called Grunt.js.</li>
<li>Right click in this folder and open Git Bash in this directory.</li>
<li>Type "npm install". This will download all the dependencies and modules that's specified in your package.json file.</li>
</ul>

<h3>That's it!</h3>
<ul>
<li>Type "grunt" in the command line. This will build your CSS (uncompressed) outside of the grunt directory into a css folder. Your js will also be built (uncompressed + un-concatenated) outside of the grunt directory in a js folder.</li>
<li>Type "grunt build" into your command line and this will build your CSS and Js into two compressed files named styles.min.css and scripts.min.js</li>
</ul>

If you have any questions, go to http://www.icreatehosting.co.za/contact-us/ and send me a message.
