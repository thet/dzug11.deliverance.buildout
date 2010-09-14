# -*- coding: iso-8859-15 -*-
"""Simple FunkLoad test

$Id: test_Simple.py 54228 2010-04-14 22:11:52Z bdelbosc $
"""
import unittest
from funkload.FunkLoadTestCase import FunkLoadTestCase as TestCase
#from collective.funkload.testcase import FLTestCase as TestCase

class Simple(TestCase):
    """This test use a configuration file Simple.conf."""

    def setUp(self):
        """Setting up test."""
        self.logd("setUp")
        self.label = 'Simple test'
        self.server_url = self.conf_get('main', 'url')

    def test_simple(self):
        # The description should be set in the configuration file
        server_url = self.server_url
        # begin of test ---------------------------------------------
        nb_time = self.conf_getInt('test_simple', 'nb_time')
        for i in range(nb_time):
            self.get(server_url, description='Get url')
        # end of test -----------------------------------------------


def test_suite():
    return unittest.makeSuite(Simple)

additional_tests = test_suite

if __name__ in ('main', '__main__'):
    unittest.main(defaultTest='test_suite')
