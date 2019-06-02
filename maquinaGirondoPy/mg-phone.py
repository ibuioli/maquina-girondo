# -*- coding: utf-8 -*-

import random
import pyttsx3
from time import sleep
from estrofa import Estrofa

engine = pyttsx3.init();
engine.setProperty('voice', 'spanish')

while True:
	es = Estrofa()
	poema = es.estrofa(random.randint(3, 8))
	print poema

	for p in poema:
		engine.say(p)
		engine.runAndWait()

