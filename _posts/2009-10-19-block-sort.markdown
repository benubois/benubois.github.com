---
layout: post
title: Block Sort TextMate Command
---

Here’s a quick TextMate command to take a document with double return separated blocks of text and sort them. 

For example if you had some HTML block you wanted to sort like:


{% highlight html %}
<p>
    Company B
    <br />Company description.
</p>

<p>
    Company A
    <br />Company description.
</p>
{% endhighlight %}

Running this through Block Sort would give you:

{% highlight html %}
<p>
    Company A
    <br />Company description.
</p>

<p>
    Company B
    <br />Company description.
</p>
{% endhighlight %}

For the command settings, I have:

* Input: Selected Text or Document
* Output: Create New Document


And here is the command:

{% highlight php %}
#!/usr/bin/env php 
<?php
$document = file_get_contents('php://stdin'); 
$blocks = explode("\n\n", $document); 
sort($blocks);

foreach ($blocks as $block)
{
    print $block . "\n\n";
}
?>
{% endhighlight %}
