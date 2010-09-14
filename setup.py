# -*- coding: utf-8 -*-
#
# GNU General Public License (GPL)
#
__author__ = """Johannes Raggam <johannes@raggam.co.at>"""
__docformat__ = 'plaintext'

from setuptools import setup, find_packages
import os

version = '1.0'

setup(name='dzug11.deliverance.buildout',
      version=version,
      description="Deliverance buildout example package for DZUG11 conference",
      long_description=open("README.txt").read(),
      # Get more strings from http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        "Framework :: Deliverance",
        "Programming Language :: Python",
        ],
      keywords='deliverance xdv xslt funkload',
      author='Johannes Raggam',
      author_email='johannes@raggam.co.at',
      url='http://github.com/thet/dzug11.deliverance.buildout',
      license='GPL',
      packages = find_packages('src'),
      package_dir = {'': 'src'},
      namespace_packages=['dzug11', 'dzug11.deliverance'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          # -*- Extra requirements: -*-
      ],
      extras_require={'test': ['zope.testing',]}  
    )
