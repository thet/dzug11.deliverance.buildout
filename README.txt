install a hot new plone4
========================

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

run:
$ ../python/bin/python bootstrap.py --distribute
this uses the more modern distribute packaging tools http://packages.python.org/distribute/ instead of setuptools

run:
$ ./bin/buildout
and relax...

point your browser to:
http://localhost:8080/

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

more info
=========

To run the rules for Gruene Akademie example Plone site do:
$./bin/deliverance-proxy rules-grak.xml
and open a browser like:
$ firefox http://localhost:5000/grak-plain.html

run the funkload bench like so:
$ ./bin/funkload bench -t funkload.test_Simple
