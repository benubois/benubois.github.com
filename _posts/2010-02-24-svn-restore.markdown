---
layout: post
title: Subversion Restore
---

A way to restore an svn repository from dumps of individual commits. This is a companion to the [Subversion backup script][svn].

[svn]: /2010/02/22/bare-bones-svn-backup.html

{% highlight ruby %}
#!/usr/bin/env ruby
floor = start_revision
ceiling = end_revision
 
floor.upto(ceiling) do |i|
  puts `gunzip #{i}.dump.gz`
  puts `svnadmin load /path/to/repos < #{i}.dump`
  puts `rm -f #{i}.dump`
end
{% endhighlight %}
