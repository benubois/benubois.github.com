---
layout: post
title: Bare Bones Subversion Backup
---

This is a basic incremental Subversion backup script. It is meant to be run daily by [cron][c]. It requires Ruby.

There are many other excellent svn backup scripts out there that do way more than this one. But my goal was just to create something simple and hopefully easy to use.

[c]: http://www.freebsd.org/cgi/man.cgi?query=cron&manpath=FreeBSD+8.0-RELEASE

The script checks that a dump of every revision in the repository exists, if not, it dumps the revision and gzips it.

{% highlight ruby %}
#!/usr/bin/env ruby
# This program writes incremental backups from a Subversion repository to the filesystem

# Configure the paths to the svn repository and backup directory 
# full paths to the executables are not necessary if they are on the cron user's $PATH
config = {
  :backup_dir => "/path/to/backup/", # Path to backup directory
  :repos      => "/path/to/repos/",  # Path to SVN repository
  :svnlook    => "svnlook",          # Path to svnlook executable
  :svnadmin   => "svnadmin",         # Path to svnadmin executable
  :gzip       => "gzip"              # Path to gzip executable
}

# Dumps svn gzipped revisions incrementally.
def svn_dump(config)
  
  # Start revision
  oldest = 1

  # Get the youngest (most recent) revision
  youngest = `#{config[:svnlook]} youngest #{config[:repos]}`.to_i

  # Save start time
  output = `date`.chomp + " - Subversion backup started\n"
  
  # Check if the revision exists, if not, dump it to the filesystem
  oldest.upto(youngest) do |i|
    unless File.exist? "#{config[:backup_dir]}#{i}.dump.gz"
      if system "#{config[:svnadmin]} dump #{config[:repos]} -r #{i} --incremental 2>/dev/null | #{config[:gzip]} -9 > #{config[:backup_dir]}#{i}.dump.gz"
        output += "* Dumped revision #{i}\n"
      end
    end
  end
  
  output += `date`.chomp + " - Subversion backup complete"
end

# execute dump, writing to stdout for cron
puts svn_dump(config)
{% endhighlight %}
