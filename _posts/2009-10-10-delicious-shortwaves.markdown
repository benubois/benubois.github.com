---
layout: post
title: Delicious Shortwaves
---

Delicious has a feature I like. Whenever you bookmark something, you have the option of assigning a keyword, similar to the Firefox [Smart Keywords](http://support.mozilla.com/en-US/kb/Smart+keywords "Smart keywords") feature. For example if I wanted to assign a shortcut for Google, I would bookmark the url http://www.google.com/search?&q=<abbr title="this is the placeholder for the search term">%s</abbr>, and assign the letter g. In this instance I could go the the location bar, type `g peanut` and I would be taken to the search results page for that excellent nut.

The advantage the Delicious implementation has over browser bound versions, is that it provides and easy way to synchronize across multiple computers by installing the [Delicious Bookmarks](https://addons.mozilla.org/en-US/firefox/addon/3615) plugin. 

The problem is I prefer Safari to Firefox which means I can&rsquo;t use any of this in my favorite browser. Fortunately there's Shaun Inman&rsquo;s [Shortwave](http://shortwaveapp.com/ "Shortwave ~ an extensible quick-search and shortcut bookmark"). Shortwave provides the same URL keyword functionality of Delicious, but does it using a JavaScript bookmarklet. This means it will work on just about any browser, including Safari for the iPhone.

Shortwave stores all of your keywords in a text file on your own webserver, so it will work from any location. However, I wanted a way to import my existing Delicious keywords AND an easy way to add new keywords. Using the [Delicious Feeds API](http://delicious.com/help/feeds "delicious/help/feeds") I'm able to do this. The process is straightforward. I query my bookmarks looking for a specific tag, then write the results to a text file in the format that Shortwave expects.

First I tagged all of the bookmarks I wanted with `shortcut` then uploaded the following script to my webserver and set cron to run it automatically once a day to keep it up-to-date with Delicious.

Here is the script:

<script src="http://gist.github.com/207575.js"></script>

