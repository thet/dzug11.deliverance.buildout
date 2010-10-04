install deliverance
===================

create an working directory
$ cd
$ mkdir dzug11
$ cd dzug11

have python2.6 and virtualenv installed and initialize an vanilla python
distribution which doesn't come into the way of your system python distribution
$ virtualenv --no-site-packages python

have git-scm installed and check out the dzug11 deliverance example buildout:
$ git clone git://github.com/thet/dzug11.deliverance.buildout.git thet.wpd10.buildout
$ cd dzug11.deliverance.buildout

Deliverance uses lxml which needs development headers of libxslt and libxml.
On Ubuntu Linux, just type:
$ apt-get install libxslt1-dev


run:
$ ../python/bin/python bootstrap.py --distribute
this uses the more modern distribute packaging tools http://packages.python.org/distribute/ instead of setuptools

run:
$ ./bin/buildout
and relax...


To run the rules for Gruene Akademie example Plone site do:
$./bin/deliverance-proxy rules-grak.xml
and point your browser to:
$ firefox http://localhost:5000/grak-plain.html

run the funkload bench like so:
$ cd src/dzug11/deliverance/buildout/tests
$ ../../../../../bin/fl-monitor-ctl monitor.conf start
$  ../../../../../bin/fl-run-bench test_Simple.py Simple.test_simple
$  ../../../../../bin/fl-build-report --html simple-bench.xml




general info
============

create a git project
--------------------
1) create the project on github.com
2) run:

git init
git remote add origin git@github.com:USERNAME/PACKAGENAME.git
git config branch.master.merge refs/heads/master
git config branch.master.remote origin

get an recent bootstrap.py file
-------------------------------
bootstrap.py repository:
    - http://svn.zope.org/zc.buildout/trunk/bootstrap/bootstrap.py
to directly check it out:
    - http://svn.zope.org/*checkout*/zc.buildout/trunk/bootstrap/bootstrap.py
zc.buildout on pypi:
    - http://pypi.python.org/pypi/zc.buildout

#
