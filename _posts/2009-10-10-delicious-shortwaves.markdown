---
layout: post
title: Delicious Shortwaves
---

Delicious has a feature I like. When you bookmark something, you have the option of assigning a keyword, similar to the Firefox [Smart Keywords][sk] feature. For example if I wanted to assign a shortcut for Google, I would bookmark the url `http://www.google.com/search?&q=%s`, and assign the letter g. In this instance I could go the the location bar, type `g peanut` and I would be taken to the search results page for that excellent nut.

[sk]: http://support.mozilla.com/en-US/kb/Smart+keywords

The advantage the Delicious implementation has over browser bound versions, is that it provides an easy way to synchronize all of your bookmarks, including keywords, across multiple computers by installing the [Delicious Bookmarks][db] plugin. 

[db]: https://addons.mozilla.org/en-US/firefox/addon/3615

I prefer Safari to Firefox which means I can’t use any of this in my favorite browser. Fortunately there’s Shaun Inman’s [Shortwave][sw]. Shortwave provides the same URL keyword functionality of Delicious, but does it using a JavaScript bookmarklet. This means it will work on just about any browser, including Safari for the iPhone.

[sw]: http://shortwaveapp.com/

Shortwave stores all of your keywords in a text file on your own webserver, so it will work from any location. However, I wanted a way to import my existing Delicious keywords AND an easy way to add new keywords. Using the [Delicious Feeds API][df] I'm able to do this. The process is straightforward. I query my bookmarks looking for a specific tag, then write the results to a text file in the format that Shortwave expects.

[df]: http://delicious.com/help/feeds

First I tagged all of the bookmarks I wanted with `shortcut` then uploaded the following script to my webserver and set cron to run it automatically once a day to keep it up-to-date with Delicious. For any future keywords I just have to remember to add the extra tag and it will be updated in my shortwave file.

Here is the script:

<script src="http://gist.github.com/207575.js"> </script>

